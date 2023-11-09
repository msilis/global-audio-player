import { API_STATION_DETAIL } from "../config/api";

export const getStationDetails = async (stationSlug: string) => {
  try {
    const response = await fetch(`${API_STATION_DETAIL}/${stationSlug}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
