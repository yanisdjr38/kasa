import Dropdown from "./Dropdown";

function DescriptionEquipments({ description, equipments }) {
  return (
    <div className="description-equipments">
      <div className="description">
        <Dropdown summary="Description" paragraph={description} />
      </div>
      <div className="equipments">
        <Dropdown
          summary="Équipements"
          paragraph={
            <ul>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default DescriptionEquipments;
