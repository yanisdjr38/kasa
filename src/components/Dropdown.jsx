function Dropdown({ summary, paragraph }) {
  return (
    <details className="dropdown">
      <summary>{summary}</summary>
      <p>{paragraph}</p>
    </details>
  );
}

export default Dropdown;
