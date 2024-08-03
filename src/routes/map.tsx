import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Box } from "@yamada-ui/react";

import HalfModal from "#/components/map/HalfModal";
import Map from "#/components/map/Map";
import WayPoints from "#/components/map/WayPoints";
import { Facility, ResponseData } from "#/utils/type";

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
    const { lat, lon, name } = Route.useSearch();
    const [facilityList, setFacilityList] = useState<Facility[]>([]);
    const [station, setStation] = useState<ResponseData | null>(null);

    if (!lat || !lon) {
      navigate({ to: "/" });
      return null;
    }

    useEffect(() => {
      const stationRes = localStorage.getItem("michikusa_station");
      if (stationRes) {
        setStation(JSON.parse(stationRes));
      }

      const getFacilityList = async () => {
        const data = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/location-list?latitude=${lat}&longitude=${lon}`
        );
        const json: { facilities: Facility[] } = await data.json();
        console.log(json);
        setFacilityList(json.facilities);
      };
      getFacilityList();
    }, []);

    return (
      <Box h="full" w="full">
        <Map
          facilityList={facilityList}
          station={{ latitude: lat, longitude: lon, name }}
        />
        <Box left={0} pos="fixed" right={0} top={0} zIndex={1001}>
          <WayPoints departure={station} destination_station={name} />
        </Box>
        <Box zIndex={1001}>
          <HalfModal facilityList={facilityList} name={name} />
        </Box>
      </Box>
    );
  },
});
