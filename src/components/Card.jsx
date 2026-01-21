import "../styles/card.scss";

function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-cover" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
}

export default Card;
