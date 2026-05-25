export default function FlyingLabel({ label, cleared }) {
  return (
    <div
      className={`flying-label tone-${label.tone} ${cleared ? "is-cleared" : "is-visible"}`}
      style={{
        "--x": `${label.x}px`,
        "--y": `${label.y}px`,
        "--rotate": `${label.rotate}deg`,
        "--delay": `${label.delay}s`,
        "--scale": label.scale
      }}
    >
      {label.text}
    </div>
  );
}
