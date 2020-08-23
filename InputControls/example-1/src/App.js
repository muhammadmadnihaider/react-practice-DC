import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div>
      <h1>
        hello! {firstName} {lastName}
      </h1>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstName} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastName} />
      </label>
    </div>
  );
};

export default App;
