import { Navigate, useParams } from "react-router-dom";
import logements from "../../data/logements.json";

function Housing() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

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
      <div className="caroussel">
        {pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`${title} - ${index + 1}`} />
        ))}
      </div>
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
      <div className="host-rating">
        <div className="host-info">
          <p>{host.name}</p>
          <img src={host.picture} alt={host.name} />
        </div>
        <div>
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={
                  i < parseInt(rating) ? "fa-solid fa-star" : "fa-solid fa-star"
                }
                style={{ color: i < parseInt(rating) ? "#FF6060" : "#E3E3E3" }}
              ></i>
            ))}
          </div>
        </div>
      </div>
      <div className="description-equipments">
        <div className="description">
          <h4>Description</h4>
          <p>{description}</p>
        </div>
        <div className="equipments">
          <h4>Équipements</h4>
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Housing;
