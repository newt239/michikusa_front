import { createFileRoute } from "@tanstack/react-router";

import { MapContainer, TileLayer } from "react-leaflet";

export const Route = createFileRoute("/map")({
  component: () => (
    <div>
      <MapContainer center={[51.505, -0.09]} scrollWheelZoom={false} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  ),
});
