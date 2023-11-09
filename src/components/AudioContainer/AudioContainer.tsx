import style from "./AudioContainer.module.css";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";

export const AudioContainer = () => {
  return (
    <div className={style.audioContainer}>
      <div className={style.logoContainer}></div>
      <AudioPlayer />
    </div>
  );
};
