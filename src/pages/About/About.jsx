import aboutBannerImage from "../../assets/images/banner_about.png";
import Banner from "../../components/Banner";
import Dropdown from "../../components/Dropdown";

function About() {
  return (
    <>
      <Banner bannerImage={aboutBannerImage} bannerText="" />
      <section className="about-section">
        <ul className="about__list">
          <Dropdown
            summary="Fiabilité"
            paragraph="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />

          <Dropdown
            summary="Respect"
            paragraph="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />

          <Dropdown
            summary="Service"
            paragraph="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos"
          />

          <Dropdown
            summary="Sécurité"
            paragraph="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier"
          />
        </ul>
      </section>
    </>
  );
}

export default About;
