import style from "./AudioContainer.module.css";
import smallLogo from "../../assets/global-logo-footer.svg";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";

export const AudioContainer = () => {
  return (
    <div className={style.audioContainer}>
      <div className={style.logoContainer}></div>
      <img src={smallLogo} alt="logo" id={style.smallLogo} />
      <AudioPlayer />
    </div>
  );
};
