import style from "./AudioPlayer.module.css";

export const AudioPlayer = () => {
  return (
    <div className={style.audioPlayerContainer}>
      <audio controls></audio>
    </div>
  );
};
