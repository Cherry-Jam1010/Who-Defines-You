export default function TheorySwitcher({ theories, activeId, onChange }) {
  return (
    <div className="theory-switcher" role="tablist" aria-label="理论切换">
      {theories.map((theory) => (
        <button
          key={theory.id}
          type="button"
          role="tab"
          aria-selected={activeId === theory.id}
          className={activeId === theory.id ? "is-active" : ""}
          onClick={() => onChange(theory.id)}
        >
          {theory.title}
        </button>
      ))}
    </div>
  );
}
