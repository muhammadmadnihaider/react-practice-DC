import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [bulb, setBulb] = useState(false);

  const onFlip = () => {
    setBulb((bulb) => !bulb);
  };

  return (
    <div className="light-body">
      {bulb ? <h1 className="dark">dark</h1> : <h1 className="light">Light</h1>}
      <button onClick={onFlip}>flip</button>
    </div>
  );
};

export default App;
