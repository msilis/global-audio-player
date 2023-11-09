import { render, screen, act } from "@testing-library/react";
import { getAllStations } from "./utils/getAllStations";
import { describe, it, expect, vi, beforeEach } from "vitest";
import jest from "jest-mock";
import "@testing-library/jest-dom";
import App from "./App";
import fetchMock from "fetch-mock";

vi.mock("./utils/getAllStations");

describe("App", () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  it("renders without crashing", () => {
    render(<App />);
  });

  it("fetches stations on mount", async () => {
    const mockData = [
      { id: "1", name: "Station 1" },
      { id: "2", name: "Station 2" },
    ];
    (getAllStations as jest.Mock).mockResolvedValue(mockData);

    await act(async () => {
      render(<App />);
    });

    expect(getAllStations).toHaveBeenCalled();
  });

  it("provides station context", () => {
    render(<App />);
    const stationContainer = screen.getByTestId("station-container");
    const audioContainer = screen.getByTestId("audio-container");

    expect(stationContainer).toBeInTheDocument();
    expect(audioContainer).toBeInTheDocument();
  });
});
