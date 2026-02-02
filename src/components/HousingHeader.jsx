function HousingHeader({ title, location, tags, host, rating }) {
  return (
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
                className="fa-solid fa-star"
                style={{
                  color: i < parseInt(rating) ? "#FF6060" : "#E3E3E3",
                }}
              ></i>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HousingHeader;
