import bannerImage from "../../assets/images/banner_home.png";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import logements from "../../data/logements.json";
import "../../styles/home.scss";

function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="banner">
          <div>
            <div className="banner-overlay"></div>
          </div>
          <img src={bannerImage} alt="banner" />
          <h2 className="banner-text"> Chez vous , partout et ailleurs </h2>
        </div>
        <div className="logementsSection">
          {logements.length === 0 ? (
            <p>Aucun logement disponible.</p>
          ) : (
            <section className="cards-grid">
              {logements.map(({ id, title, cover }) => (
                <Card key={id} title={title} cover={cover} />
              ))}
            </section>
          )}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
