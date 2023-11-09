import { render, screen } from "@testing-library/react";
import { StationContext } from "../../utils/stationContext";
import { AudioPlayer } from "./AudioPlayer";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import jest from "jest-mock";

describe("AudioPlayer", () => {
  it("renders without crashing", () => {
    const mockContext = {
      stationList: [],
      setStationList: jest.fn(),
      stationDetail: {
        id: "1",
        logo: "http://example.com/logo.png",
        name: "Test Station",
        slug: "test-station",
        tagline: "Test Tagline",
        streamUrl: "http://example.com/stream",
      },
      setStationDetail: jest.fn(),
    };

    render(
      <StationContext.Provider value={mockContext}>
        <AudioPlayer />
      </StationContext.Provider>
    );
  });

  it("renders correct audio source", () => {
    const mockContext = {
      stationList: [],
      setStationList: jest.fn(),
      stationDetail: {
        id: "1",
        logo: "http://example.com/logo.png",
        name: "Test Station",
        slug: "test-station",
        tagline: "Test Tagline",
        streamUrl: "http://example.com/stream",
      },
      setStationDetail: jest.fn(),
    };

    render(
      <StationContext.Provider value={mockContext}>
        <AudioPlayer />
      </StationContext.Provider>
    );

    expect(screen.getByRole("audio")).toHaveAttribute(
      "src",
      mockContext.stationDetail.streamUrl
    );
  });
});
