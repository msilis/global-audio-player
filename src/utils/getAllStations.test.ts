import { getAllStations } from "./getAllStations";
import { API_STATION_LIST } from "../config/api";
import { describe, it, expect, beforeEach } from "vitest";
import fetchMock from "fetch-mock";
import jest from "jest-mock";

describe("getAllStations", () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  it("fetches stations from API and returns data", async () => {
    const mockData = [
      { id: "1", name: "Station 1" },
      { id: "2", name: "Station 2" },
    ];
    fetchMock.getOnce(API_STATION_LIST, mockData);

    const data = await getAllStations();

    expect(data).toEqual(mockData);
  });

  it("handles exception", async () => {
    fetchMock.mock(API_STATION_LIST, 500);

    const consoleSpy = jest.spyOn(console, "error");
    consoleSpy.mockImplementation(() => {});

    await getAllStations();

    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
