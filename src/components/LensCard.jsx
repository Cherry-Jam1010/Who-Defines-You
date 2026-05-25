export default function LensCard({ item, active, onClick }) {
  return (
    <button
      type="button"
      className={`lens-card ${active ? "is-active" : ""}`}
      onClick={onClick}
      aria-pressed={active}
    >
      <span className="lens-card-label">{item.title}</span>
      <strong>{item.formula}</strong>
      <p>{item.summary}</p>
    </button>
  );
}
