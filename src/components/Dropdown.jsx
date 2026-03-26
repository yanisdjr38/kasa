import { useState } from "react";

function Dropdown({ summary, paragraph }) {
  // State pour gérer l'ouverture et la fermeture du dropdown
  const [isOpen, setIsOpen] = useState(false);
  // Fonction pour basculer l'état d'ouverture du dropdown
  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <details className="dropdown" open={isOpen}>
      <summary onClick={handleToggle}>{summary}</summary>
      {/* Affichage du contenu du dropdown uniquement si isOpen est true */}
      {isOpen && <div className="dropdown-content">{paragraph}</div>}
    </details>
  );
}

export default Dropdown;
