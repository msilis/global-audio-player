import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { StationContext } from "../../utils/stationContext";
import { AudioContainer } from "./AudioContainer";
import smallLogo from "../../assets/global-logo-footer.svg";
import jest from "jest-mock";
import "@testing-library/jest-dom";

describe("AudioContainer", () => {
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
        <AudioContainer />
      </StationContext.Provider>
    );
  });

  it("renders correct logo source", () => {
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
        <AudioContainer />
      </StationContext.Provider>
    );

    expect(screen.getByAltText("logo")).toHaveAttribute(
      "src",
      mockContext.stationDetail.logo
    );
  });

  it("renders default logo source when station logo is not available", () => {
    const mockContext = {
      stationList: [],
      setStationList: jest.fn(),
      stationDetail: {
        id: "1",
        logo: "/src/assets/global-logo-footer.svg",
        name: "Test Station",
        slug: "test-station",
        tagline: "Test Tagline",
        streamUrl: "http://example.com/stream",
      },
      setStationDetail: jest.fn(),
    };

    render(
      <StationContext.Provider value={mockContext}>
        <AudioContainer />
      </StationContext.Provider>
    );

    expect(screen.getByAltText("logo")).toHaveAttribute("src", smallLogo);
  });
});
