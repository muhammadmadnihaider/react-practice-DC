import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    setNumbers((numbers) => [...numbers, Math.random() * 100]);
  };

  return (
    <div>
      <ul>
        {numbers.map((number) => (
          <li>{Math.floor(number)}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Add number</button>
    </div>
  );
};

export default App;
