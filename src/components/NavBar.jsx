import { Link } from "react-router-dom";
import logo from "../assets/logo/LOGO.png";

function NavBar() {
  return (
    <nav className="navbar">
      <h1>
        <img src={logo} alt="kasa" />
      </h1>

      <ul className="nav-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
