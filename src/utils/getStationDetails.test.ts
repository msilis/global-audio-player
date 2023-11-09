import { getStationDetails } from "./getStationDetails";
import { API_STATION_DETAIL } from "../config/api";
import { describe, it, expect, beforeEach } from "vitest";
import fetchMock from "fetch-mock";
import jest from "jest-mock";

describe("getStationDetails", () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  it("fetches station details from API and returns data", async () => {
    const mockData = { id: "1", name: "Station 1" };
    const stationSlug = "station-1";
    fetchMock.getOnce(`${API_STATION_DETAIL}/${stationSlug}`, mockData);

    const data = await getStationDetails(stationSlug);

    expect(data).toEqual(mockData);
  });

  it("handles exception", async () => {
    const stationSlug = "station-1";
    fetchMock.mock(`${API_STATION_DETAIL}/${stationSlug}`, 500);

    const consoleSpy = jest.spyOn(console, "error");
    consoleSpy.mockImplementation(() => {});

    await getStationDetails(stationSlug);

    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
