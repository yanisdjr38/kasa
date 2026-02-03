function Dropdown({ summary, paragraph }) {
  return (
    <details className="dropdown">
      <summary>{summary}</summary>
      <div className="dropdown-content">{paragraph}</div>
    </details>
  );
}

export default Dropdown;
