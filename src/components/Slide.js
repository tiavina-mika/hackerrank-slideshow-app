import React from "react";

const Slide = ({ slide }) => {
  return (
    <div id="slide" className="card text-center">
      <h1 data-testid="title">{slide.title}</h1>
      <p data-testid="text">{slide.text}</p>
    </div>
  );
};

export default Slide;
