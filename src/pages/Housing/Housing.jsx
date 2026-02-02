import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import logements from "../../data/logements.json";

function Housing() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  // État pour le carrousel d'images
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  };
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + logement.pictures.length) % logement.pictures.length,
    );
  };

  // Redirection vers la page 404 si le logement n'existe pas
  if (!logement) {
    return <Navigate to="/404" />;
  }

  const {
    title,
    location,
    pictures,
    description,
    host,
    rating,
    equipments,
    tags,
  } = logement;

  return (
    <>
      <div className="carousel">
        <button className="carousel-button prev" onClick={goToPrevious}>
          <i className="fa-solid fa-angle-left fa-2xl"></i>
        </button>
        <button className="carousel-button next" onClick={goToNext}>
          <i className="fa-solid fa-angle-right fa-2xl"></i>
        </button>
        <span className="carousel-pagination">
          {/* Pagination du carrousel */}
          {currentIndex + 1} / {pictures.length}
          {/* Affichage si une seule image */}
          {pictures.length === 1 && (
            <style>{`.carousel-button { display: none; }`}</style>
          )}
        </span>
        <ul>
          {/* Affichage des images du carrousel */}
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
      <div className="housing-header">
        {/* Informations sur le logement */}
        <div className="housing-infos">
          <h2>{title}</h2>
          <h3>{location}</h3>
          <ul>
            {tags.map((tag, index) => (
              <li key={index} className="tag-item">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="host-header">
          {/* Informations sur l'hôte */}
          <div className="host-info">
            <p className="host-name">{host.name}</p>
            <img className="host-picture" src={host.picture} alt={host.name} />
          </div>
          <div>
            <div className="host-rating">
              {/* Affichage des étoiles de notation */}
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={
                    i < parseInt(rating)
                      ? "fa-solid fa-star"
                      : "fa-solid fa-star"
                  }
                  style={{
                    color: i < parseInt(rating) ? "#FF6060" : "#E3E3E3",
                  }}
                ></i>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="description-equipments">
        <div className="description">
          <details>
            <summary>Description</summary>
            <p>{description}</p>
          </details>
        </div>
        <div className="equipments">
          <details>
            <summary>Équipements</summary>
            <p>
              <ul>
                {" "}
                {equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </p>
          </details>
        </div>
      </div>
    </>
  );
}

export default Housing;
