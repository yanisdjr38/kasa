import bannerImage from "../../assets/images/banner_home.png";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import logements from "../../data/logements.json";

function Home() {
  return (
    <>
      <Banner
        bannerImage={bannerImage}
        bannerText="Chez vous, partout et ailleurs"
      />

      <div className="logementsSection">
        {logements.length === 0 ? (
          <p>Aucun logement disponible.</p>
        ) : (
          <section className="cards-grid">
            {logements.map(({ id, title, cover }) => (
              <Card key={id} id={id} title={title} cover={cover} />
            ))}
          </section>
        )}
      </div>
    </>
  );
}

export default Home;
