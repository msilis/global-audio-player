import style from "./AudioContainer.module.css";
import smallLogo from "../../assets/global-logo-footer.svg";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import { StationContext } from "../../utils/stationContext";
import { useContext } from "react";

export const AudioContainer = () => {
  const { stationDetail } = useContext(StationContext);
  return (
    <div className={style.audioContainer} data-testid="audio-container">
      <div className={style.logoContainer}></div>
      <img
        src={stationDetail?.logo ? stationDetail.logo : smallLogo}
        alt="logo"
        id={style.smallLogo}
      />
      <AudioPlayer />
    </div>
  );
};
