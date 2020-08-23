import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [volume, setVolume] = useState(1);
  const [treble, setTreble] = useState(1);
  const [mid, setMid] = useState(3);
  const [bass, setBass] = useState(5);

  const incVolume = () => setVolume((volume) => volume + 1);
  const decVolume = () => setVolume((volume) => volume - 1);

  const incTreble = () => setTreble((treble) => treble + 1);
  const decTreble = () => setTreble((treble) => treble - 1);

  const incMid = () => setMid((mid) => mid + 1);
  const decMid = () => setMid((mid) => mid - 1);

  const incBass = () => setBass((bass) => bass + 1);
  const decBass = () => setBass((bass) => bass - 1);

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
