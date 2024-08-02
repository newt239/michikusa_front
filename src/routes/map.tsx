import { createFileRoute } from "@tanstack/react-router";

import { Box } from "@yamada-ui/react";

import Map from "#/components/map/Map";
import "leaflet/dist/leaflet.css";

export const Route = createFileRoute("/map")({
  component: () => (
    <Box border="ButtonText" h="full" w="full">
      <Map />
    </Box>
  ),
});
