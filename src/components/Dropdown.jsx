import { useState } from "react";

function Dropdown({ summary, paragraph }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <details className="dropdown" open={isOpen}>
      <summary onClick={handleToggle}>{summary}</summary>
      {isOpen && <div className="dropdown-content">{paragraph}</div>}
    </details>
  );
}

export default Dropdown;
