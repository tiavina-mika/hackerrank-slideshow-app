import React, { useState } from "react";
import Slide from "./Slide";

const Slides = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleInitializeSlide = () => setCurrentSlideIndex(0);
  const handleNext = () => {
    if (currentSlideIndex >= slides.length - 1) return;
    setCurrentSlideIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentSlideIndex <= 0) return;
    setCurrentSlideIndex((prev) => prev - 1);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          onClick={handleInitializeSlide}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button
          onClick={handlePrev}
          data-testid="button-prev"
          className="small"
          disabled={currentSlideIndex === 0}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          data-testid="button-next"
          className="small"
          disabled={currentSlideIndex >= slides.length - 1}
        >
          Next
        </button>
      </div>
      {slides.map(
        (slide, index) =>
          currentSlideIndex === index && <Slide slide={slide} key={index} />
      )}
    </div>
  );
};

export default Slides;
