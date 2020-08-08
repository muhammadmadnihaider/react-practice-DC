import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const person = {
  firstName: "John",
  lastName: "Wick",
  address: {
    street: "123 abc fake st",
    state: "California",
    postal: "MA 02118",
  },
};

const AddressLabel = ({ person }) => {
  const { firstName, lastName, address } = person;
  const { street, state, postal } = address;

  return (
    <div className="address-label">
      {`${firstName} ${lastName}`}
      <br />
      {street}
      <br />
      {state}, {postal}
    </div>
  );
};

ReactDOM.render(
  <AddressLabel person={person} />,
  document.querySelector("#root")
);
