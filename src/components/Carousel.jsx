import { useState } from "react";

function Carousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length,
    );
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <button className="carousel-button prev" onClick={goToPrevious}>
            <i className="fa-solid fa-angle-left fa-2xl"></i>
          </button>
          <button className="carousel-button next" onClick={goToNext}>
            <i className="fa-solid fa-angle-right fa-2xl"></i>
          </button>
          <span className="carousel-pagination">
            {currentIndex + 1} / {pictures.length}
          </span>
        </>
      )}
      <ul>
        {pictures.map((picture, index) => (
          <li
            key={index}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <img src={picture} alt={`${title} - ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carousel;
