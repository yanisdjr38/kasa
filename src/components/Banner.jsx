import bannerImage from "../assets/images/banner_home.png";
import "../styles/banner.scss";

function Banner() {
  return (
    <div className="banner">
      <div>
        <div className="banner-overlay"></div>
      </div>
      <img src={bannerImage} alt="banner" />
      <h2 className="banner-text"> Chez vous , partout et ailleurs </h2>
    </div>
  );
}

export default Banner;
