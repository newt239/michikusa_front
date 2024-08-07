export type Station = {
  name: string;
  latitude: number;
  longitude: number;
  station_code: string;
};

export type Facility = {
  name: string;
  distance: number;
  color_code: string;
  genre: string;
  latitude: number;
  longitude: number;
  map_url: string;
};

export type RequestData = {
  latitude: number;
  longitude: number;
  price?: number;
};

export type ResponseData = {
  nearest_station: Station;
  destination_station: Station;
  railway_name: string;
  railway_color: string;
  number_of_stations: number;
  facilities: Facility[];
};
