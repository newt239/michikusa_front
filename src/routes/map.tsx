import { createFileRoute } from "@tanstack/react-router";

import { Box } from "@yamada-ui/react";

import { HalfModal } from "#/components/map/HalfModal";
import Map from "#/components/map/Map";
import "leaflet/dist/leaflet.css";

export const Route = createFileRoute("/map")({
  component: () => {
    const station = {
      name: "Station",
      latitude: 35.680959106959,
      longitude: 139.76730681777,
    };

    return (
      <Box h="full" w="full">
        <Map facilityList={[]} station={station} />
        <Box zIndex={100}>
          <HalfModal />
        </Box>
      </Box>
    );
  },
});
