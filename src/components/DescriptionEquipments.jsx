function DescriptionEquipments({ description, equipments }) {
  return (
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
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
}

export default DescriptionEquipments;
