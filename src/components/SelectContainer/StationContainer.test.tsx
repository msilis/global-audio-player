import { render, screen, cleanup } from "@testing-library/react";
import { StationContext, StationDetail } from "../../utils/stationContext";
import { StationContainer } from "./StationContainer";
import { UI_TEXT } from "../../utils/uiText";
import { it, describe, expect, afterEach } from "vitest";
import jest from "jest-mock";

describe("StationContainer", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const mockContext = {
      stationList: [],
      setStationList: jest.fn(),
      stationDetail: {} as StationDetail,
      setStationDetail: jest.fn(),
    };

    render(
      <StationContext.Provider value={mockContext}>
        <StationContainer />
      </StationContext.Provider>
    );
  });

  it("renders correct text", () => {
    const mockContext = {
      stationList: [],
      setStationList: jest.fn(),
      stationDetail: {} as StationDetail,
      setStationDetail: jest.fn(),
    };

    render(
      <StationContext.Provider value={mockContext}>
        <StationContainer />
      </StationContext.Provider>
    );

    expect(screen.getByText(UI_TEXT.headerText)).toBeTruthy();
  });

  it("renders correct image", () => {
    const mockContext = {
      stationList: [],
      setStationList: jest.fn(),
      stationDetail: {} as StationDetail,
      setStationDetail: jest.fn(),
    };

    render(
      <StationContext.Provider value={mockContext}>
        <StationContainer />
      </StationContext.Provider>
    );

    expect(screen.getByAltText("globalLogo")).toBeTruthy();
  });
});
