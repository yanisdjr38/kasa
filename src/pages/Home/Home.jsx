import Banner from "../../components/Banner";
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
        <Banner />
      </header>
      <main>
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
