import { createFileRoute } from "@tanstack/react-router";

import { Box } from "@yamada-ui/react";

import HalfModal from "#/components/map/HalfModal";
import Map from "#/components/map/Map";
import WayPoints from "#/components/map/WayPoints";
import "leaflet/dist/leaflet.css";

export const Route = createFileRoute("/map")({
  component: () => {
    const station = {
      name: "東京駅",
      latitude: 35.680959106959,
      longitude: 139.76730681777,
    };

    const facilityList = [
      {
        name: "東京国際フォーラム",
        distance: 500,
        color_code: "#FF4500",
        genre: "コンベンションセンター",
        latitude: 35.6784,
        longitude: 139.7636,
      },
      {
        name: "丸の内ブリックスクエア",
        distance: 300,
        color_code: "#4B0082",
        genre: "ショッピング",
        latitude: 35.6809,
        longitude: 139.7664,
      },
      {
        name: "皇居外苑",
        distance: 1000,
        color_code: "#228B22",
        genre: "公園",
        latitude: 35.6825,
        longitude: 139.7521,
      },
      {
        name: "KITTE",
        distance: 100,
        color_code: "#8B4513",
        genre: "ショッピング",
        latitude: 35.6798,
        longitude: 139.7687,
      },
      {
        name: "東京ステーションギャラリー",
        distance: 0,
        color_code: "#B8860B",
        genre: "美術館",
        latitude: 35.6812,
        longitude: 139.7671,
      },
    ];

    return (
      <Box h="full" w="full">
        <Map facilityList={facilityList} station={station} />
        <Box left={0} pos="fixed" right={0} top={0} zIndex={1001}>
          <WayPoints />
        </Box>
        <Box zIndex={1001}>
          <HalfModal facilityList={facilityList} station={station} />
        </Box>
      </Box>
    );
  },
});
