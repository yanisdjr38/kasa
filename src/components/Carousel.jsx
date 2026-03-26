import { useState } from "react";

function Carousel({ pictures, title }) {
  // State pour suivre l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);
  // Fonction pour passer à l'image suivante, en bouclant à la première image si on atteint la fin
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };
  // Fonction pour revenir à l'image précédente, en bouclant à la dernière image si on est au début
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length,
    );
  };

  return (
    <div className="carousel">
      {/* Affichage des boutons de navigation et de la pagination uniquement s'il y a plus d'une image */}
      {pictures.length > 1 && (
        <>
          <button className="carousel-button prev" onClick={goToPrevious}>
            <i className="fa-solid fa-angle-left fa-2xl"></i>
          </button>
          <button className="carousel-button next" onClick={goToNext}>
            <i className="fa-solid fa-angle-right fa-2xl"></i>
          </button>
          {/* Affichage de la pagination */}
          <span className="carousel-pagination">
            {currentIndex + 1} / {pictures.length}
          </span>
        </>
      )}
      <ul>
        {/* Affichage des images */}
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
