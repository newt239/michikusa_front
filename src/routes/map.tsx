import { createFileRoute } from "@tanstack/react-router";

import { Box } from "@yamada-ui/react";

import { HalfModal } from "#/components/map/HalfModal";
import Map from "#/components/map/Map";
import "leaflet/dist/leaflet.css";

export const Route = createFileRoute("/map")({
  component: () => (
    <Box h="full" w="full">
      <Map />
      <Box zIndex={100}>
        <HalfModal />
      </Box>
    </Box>
  ),
});
