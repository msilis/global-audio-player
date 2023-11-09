import { API_STATION_LIST } from "../config/api";

export const getAllStations = async () => {
  try {
    const response = await fetch(API_STATION_LIST);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
