import style from "./App.module.css";
import { AudioContainer } from "./components/AudioContainer/AudioContainer";
import { StationContainer } from "./components/SelectContainer/StationContainer";

function App() {
  return (
    <div className={style.appContainer}>
      <StationContainer />
      <AudioContainer />
    </div>
  );
}

export default App;
