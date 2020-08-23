import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [volume, setVolume] = useState(99);
  const [treble, setTreble] = useState(99);
  const [mid, setMid] = useState(99);
  const [bass, setBass] = useState(99);

  const incVolume = () =>
    setVolume((volume) => {
      if (volume == 0 || volume == 100) return volume;
      return volume + 1;
    });
  const decVolume = () =>
    setVolume((volume) => {
      if (volume == 0 || volume == 100) return volume;
      return volume - 1;
    });

  const incTreble = () =>
    setTreble((treble) => {
      if (treble == 0 || treble == 100) return treble;
      return treble + 1;
    });
  const decTreble = () =>
    setTreble((treble) => {
      if (treble == 0 || treble == 100) return treble;
      return treble - 1;
    });

  const incMid = () =>
    setMid((mid) => {
      if (mid == 0 || mid == 100) return mid;
      return mid + 1;
    });
  const decMid = () =>
    setMid((mid) => {
      if (mid == 0 || mid == 100) return mid;
      return mid - 1;
    });

  const incBass = () =>
    setBass((bass) => {
      if (bass == 0 || bass == 100) return bass;
      return bass + 1;
    });
  const decBass = () =>
    setBass((bass) => {
      if (bass == 0 || bass == 100) return bass;
      return bass - 1;
    });

  // const [audio,setAudio] = useState({volume:})

  return (
    <div className="container w-25 border border-primary">
      <ul className="justify-content-center p-0 ">
        <li className="row">
          <button className="col-2" onClick={decVolume}>
            -
          </button>
          <span className="text-center col-5 font-weight-bold">
            {volume}
            <label className="col text-secondary">VOLUME</label>
          </span>

          <button className="col-2" onClick={incVolume}>
            +
          </button>
        </li>
        <li className="row">
          <button className="col-2" onClick={decTreble}>
            -
          </button>
          <span className="text-center col-5 font-weight-bold">
            {treble}
            <label className="col text-secondary">TREBLE</label>
          </span>
          <button className="col-2" onClick={incTreble}>
            +
          </button>
        </li>
        <li className="row">
          <button className="col-2" onClick={decMid}>
            -
          </button>
          <span className="text-center col-5 font-weight-bold">
            {mid}
            <label className="col text-secondary">MID</label>
          </span>
          <button className="col-2" onClick={incMid}>
            +
          </button>
        </li>

        <li className="row">
          <button className="col-2" onClick={decBass}>
            -
          </button>
          <span className="text-center col-5 font-weight-bold">
            {bass}
            <label className="col text-secondary">BASS</label>
          </span>
          <button className="col-2" onClick={incBass}>
            +
          </button>
        </li>
      </ul>
    </div>
  );
};

export default App;
