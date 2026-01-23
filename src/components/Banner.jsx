function Banner({ bannerImage, bannerText }) {
  return (
    <div className="banner">
      <div>
        <div className="banner-overlay"></div>
      </div>
      <img src={bannerImage} alt="banner" />
      <h2 className="banner-text">{bannerText}</h2>
    </div>
  );
}

export default Banner;
