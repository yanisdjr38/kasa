import logo from "../assets/logo/LOGO.png";

function NavBar() {
  return (
    <nav className="navbar">
      <h1>
        <img src={logo} alt="kasa" />
      </h1>

      <ul className="nav-links">
        <li>
          <a href="/">Acceuil</a>
        </li>
        <li>
          <a href="/about">À propos</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
