import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const firstName = useRef("");
  const lastName = useRef("");
  const handlerClick = () => {
    // setDisplay(firstName || lastName);
    setFName(firstName.current.value);
    setLName(lastName.current.value);
  };
  return (
    <div>
      <label>
        firstName:
        <input ref={firstName} type="text" />
      </label>
      <label>
        firstName:
        <input ref={lastName} type="text" />
      </label>
      {fName || lName ? (
        <h1>
          {fName}
          {lName}
        </h1>
      ) : null}
      <button onClick={handlerClick}>Submit</button>
    </div>
  );
};
export default App;
