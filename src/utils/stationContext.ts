import React from "react";

export interface Station {
  id: string;
  logo: string;
  name: string;
  slug: string;
}

export interface StationDetail {
  id: string;
  logo: string;
  name: string;
  slug: string;
  tagline: string;
  streamUrl: string;
}

export interface StationContextType {
  stationList: Station[];
  setStationList: (stationList: Station[]) => void;
  stationDetail: StationDetail | undefined;
  setStationDetail: (stationDetail: StationDetail | undefined) => void;
}

export const StationContext = React.createContext<StationContextType>({
  stationList: [],
  setStationList: () => {},
  stationDetail: {} as StationDetail,
  setStationDetail: () => {},
});
