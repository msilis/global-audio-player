import style from "./StationContainer.module.css";
import Select from "react-select";
import { StationContext } from "../../utils/stationContext";
import { useContext } from "react";
import { UI_TEXT } from "../../utils/uiText";
import { getStationDetails } from "../../utils/getStationDetails";
import globalLogo from "../../assets/global-generic.jpg";

export const StationContainer = () => {
  const { stationList } = useContext(StationContext);
  const { setStationDetail } = useContext(StationContext);

  type OptionType = { value: string; label: string; slug: string };

  const stationOptions = stationList.map((station) => ({
    value: station.name,
    label: station.name,
    slug: station.slug,
  }));

  const handleStationChange = async (newValue: OptionType | null) => {
    if (newValue) {
      setStationDetail(await getStationDetails(newValue.slug));
    }
  };

  return (
    <div className={style.selectContainer}>
      <img src={globalLogo} alt="globalLogo" id={style.globalLogoLarge} />
      <h4>{UI_TEXT.headerText}</h4>
      <Select
        options={stationOptions}
        placeholder={"Choose a station..."}
        onChange={handleStationChange}
      />
    </div>
  );
};
