import style from "./AudioPlayer.module.css";
import { StationContext } from "../../utils/stationContext";
import { useContext } from "react";

export const AudioPlayer = () => {
  const { stationDetail } = useContext(StationContext);

  return (
    <div className={style.audioPlayer}>
      <audio
        controls
        src={stationDetail && stationDetail.streamUrl}
        role="audio"
      />
    </div>
  );
};
