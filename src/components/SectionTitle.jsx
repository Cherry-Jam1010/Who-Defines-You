export default function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div className={`section-title ${align === "center" ? "section-title-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}
