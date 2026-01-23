import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="error__section">
      <h1 className="code__error">404 </h1>
      <p className="message__error">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="Link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
