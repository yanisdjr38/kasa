import { Navigate, useParams } from "react-router-dom";
import Carousel from "../../components/Carousel";
import DescriptionEquipments from "../../components/DescriptionEquipments";
import HousingHeader from "../../components/HousingHeader";
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
      <Carousel pictures={pictures} title={title} />
      <HousingHeader
        title={title}
        location={location}
        tags={tags}
        host={host}
        rating={rating}
      />
      <DescriptionEquipments
        description={description}
        equipments={equipments}
      />
    </>
  );
}

export default Housing;
