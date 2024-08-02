import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { Facility, Station } from "#/utils/type";

type Props = {
  station: Station;
  facilityList: Facility[];
};

const Map: React.FC<Props> = ({ station, facilityList }) => {
  return (
    <MapContainer
      center={[station.latitude, station.longitude]}
      scrollWheelZoom={false}
      zoom={16}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[station.latitude, station.longitude]}>
        <Popup>{station.name}</Popup>
      </Marker>
      {facilityList.map((facility) => (
        <Marker
          key={facility.name}
          position={[facility.latitude, facility.longitude]}
        >
          <Popup>{facility.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
