import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import "../../styles/about.scss";

function About() {
  return (
    <>
      <header>
        <NavBar />
        <Banner />
      </header>
      <main>
        <section className="about-section">
          <ul className="about__list">
            <li>Fiabilité</li>
            <div>
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            </div>
            <li>Respect</li>
            <div>
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </div>
            <li>Service</li>
            <div>
              <p>
                La qualité du service est au cœur de notre engagement chez Kasa.
                Nous veillons à ce que chaque interaction, que ce soit avec nos
                hôtes ou nos locataires, soit empreinte de respect et de
                bienveillance.
              </p>
            </div>
            <li>Sécurité</li>
            <div>
              <p>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            </div>
          </ul>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default About;
