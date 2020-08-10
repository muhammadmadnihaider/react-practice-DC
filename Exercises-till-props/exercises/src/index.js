import React from "react";
import ReactDOM from "react-dom";
import Poster from "./components/Poster";
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

const poster = {
  image:
    "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png",
  title: "React",
  description: "we are going to learn react",
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

const CreditCard = ({ cardInfo }) => {
  return (
    <div className="credit-card">
      <div className="card">
        <h1>Big Bank,Inc.</h1>
      </div>

      <div className="card-info">
        <p>1234 4567 7864 1239</p>
        <div>
          <span>Valid Thru</span>
          <span>08/20</span>
          <h2>Chloe's Card</h2>
        </div>
      </div>
    </div>
  );
};

const ExpiryDate = ({ date }) => {
  return (
    <div>
      <h1>valid trhu {date}</h1>
    </div>
  );
};
ReactDOM.render(<Poster poster={poster} />, document.querySelector("#root"));
