import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Box } from "@yamada-ui/react";

import HalfModal from "#/components/map/HalfModal";
import Map from "#/components/map/Map";
import WayPoints from "#/components/map/WayPoints";
import { Facility } from "#/utils/type";

import "leaflet/dist/leaflet.css";

type MapRouteSearch = {
  lat: number;
  lon: number;
  name: string;
};

export const Route = createFileRoute("/map")({
  validateSearch: (search: Record<string, unknown>): MapRouteSearch => {
    return {
      lat: Number(search.lat),
      lon: Number(search.lon),
      name: String(search.name),
    };
  },
  component: () => {
    const navigate = useNavigate();
    const { lat, lon } = Route.useSearch();
    const [facilityList, setFacilityList] = useState<Facility[]>([]);
    if (!lat || !lon) {
      navigate({ to: "/" });
      return null;
    }
    const station = {
      name: "東京駅",
      latitude: 35.680959106959,
      longitude: 139.76730681777,
    };

    useEffect(() => {
      const getFacilityList = async () => {
        const data = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/locations-list`,
          {
            method: "GET",
            body: JSON.stringify({
              latitude: lat,
              longitude: lon,
            }),
          }
        );
        const json: { facilities: Facility[] } = await data.json();
        setFacilityList(json.facilities);
      };
      getFacilityList();
    }, []);

    return (
      <Box h="full" w="full">
        <Map facilityList={facilityList} station={station} />
        <Box left={0} pos="fixed" right={0} top={0} zIndex={1001}>
          <WayPoints />
        </Box>
        <Box zIndex={1001}>
          <HalfModal facilityList={facilityList} name={station.name} />
        </Box>
      </Box>
    );
  },
});
