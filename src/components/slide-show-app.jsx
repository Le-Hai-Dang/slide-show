import React, { useState } from "react";
import "../App.css";

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const totalImages = 10; 

  const [imageSize, setImageSize] = useState({ width: 300, height: 200 });

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === totalImages - 1 ? prevIndex : prevIndex + 1));
  };

  const handleBackToStart = () => {
    setIndex(0);
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * totalImages);
    setIndex(randomIndex);
  };

  const handleImageSizeChange = (size) => {
    switch (size) {
      case "small":
        setImageSize({ width: 300, height: 200 });
        break;
      case "large":
        setImageSize({ width: 400, height: 200 });
        break;
      default:
        break;
    }
  };

  const handleThumbnailClick = (idx) => {
    setIndex(idx);
  };

  return (
    <div className="slideshow">
      <h1>Slideshow App</h1>
      <img
        src={`https://picsum.photos/${imageSize.width}/${imageSize.height}?image=${index}`}
        alt="Slideshow"
        className="slideshow-image"
        style={{ width: imageSize.width, height: imageSize.height }} 
      />
      <div className="controls">
        <button onClick={handlePrevious} disabled={index === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={index === totalImages - 1}>
          Next
        </button>
        <button onClick={handleBackToStart} disabled={index === 0}>
          Back to Start
        </button>
        <button onClick={handleRandom}>
          Random
        </button>
        <button onClick={() => handleImageSizeChange("small")}>
          300x200
        </button>
        <button onClick={() => handleImageSizeChange("large")}>
          400x200
        </button>
      </div>
      <div className="thumbnails">
        {Array.from({ length: totalImages }).map((_, idx) => (
          <img
            key={idx}
            src={`https://picsum.photos/50/50?image=${idx}`} 
            alt={`Thumbnail ${idx}`}
            className={`thumbnail ${index === idx ? "zoomed" : ""}`} 
            onClick={() => handleThumbnailClick(idx)} 
            style={{ cursor: 'pointer', margin: '5px', borderRadius: '6px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
