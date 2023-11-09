import style from "./App.module.css";
import { AudioContainer } from "./components/AudioContainer/AudioContainer";
import { StationContainer } from "./components/SelectContainer/StationContainer";
import { useState, useEffect } from "react";
import { StationContext } from "./utils/stationContext";
import { getAllStations } from "./utils/getAllStations";

function App() {
  const [stationList, setStationList] = useState([]);
  const [stationDetail, setStationDetail] = useState({});

  const contextProps = {
    stationList,
    stationDetail,
    setStationDetail,
  };

  useEffect(() => {
    const getStations = async () => {
      const stations = await getAllStations();
      setStationList(stations);
    };
    getStations();
  }, []);

  console.log({ stationList });

  return (
    <StationContext.Provider value={contextProps}>
      <div className={style.appContainer}>
        <StationContainer />
        <AudioContainer />
      </div>
    </StationContext.Provider>
  );
}

export default App;
