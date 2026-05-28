export default function FlyingLabel({ label, cleared }) {
  return (
    <div
      className={`flying-label tone-${label.tone}${cleared ? " cleared" : ""}`}
      style={{
        left: `calc(50% + ${label.x}px)`,
        top: `calc(50% + ${label.y}px)`,
        transform: `translate(-50%, -50%) rotate(${label.rotate}deg) scale(${label.scale})`
      }}
    >
      {label.text}
    </div>
  );
}
