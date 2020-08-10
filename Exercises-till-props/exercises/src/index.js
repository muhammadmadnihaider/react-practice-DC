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
      <br />
    </div>
  );
};

const Stamp = () => {
  return (
    <img
      className="image"
      src={
        "https://static.vecteezy.com/system/resources/thumbnails/000/187/311/small/postcard_from_alaska1_RF_RMPL-01.jpg"
      }
      alt="stamp"
    />
  );
};

const Envelope = () => {
  return (
    <div className="envelope">
      <div className="first">
        <AddressLabel person={person} />
        <Stamp />
      </div>
      <div className="second">
        <AddressLabel person={person} />
      </div>
    </div>
  );
};

ReactDOM.render(<Envelope />, document.querySelector("#root"));
