import Leaflet from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { Facility, Station } from "#/utils/type";

type Props = {
  station: Station;
  facilityList: Facility[];
};

const Map: React.FC<Props> = ({ station, facilityList }) => {
  const facilityIcon = new Leaflet.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      center={[station.latitude, station.longitude]}
      zoom={16}
      zoomControl={false}
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
          icon={facilityIcon}
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
