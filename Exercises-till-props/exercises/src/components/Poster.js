import React from "react";
import "./Poster.css";

const Poster = ({ poster }) => {
  const { image, title, description } = poster;
  return (
    <div className="poster">
      <img className="poster-image" src={image} alt="react image" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Poster;
