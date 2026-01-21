import footerLogo from "../assets/logo/footer_logo.png";
import "../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img src={footerLogo} alt="Kasa Logo" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
