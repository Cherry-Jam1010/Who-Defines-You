export default function IdentityIllust() {
  return (
    <svg
      className="identity-illust"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="100" cy="100" r="88" stroke="rgba(140,150,255,0.08)" strokeWidth="1" />
      <circle cx="100" cy="100" r="72" stroke="rgba(140,150,255,0.1)" strokeWidth="1" />
      {/* Cross lines */}
      <line x1="100" y1="12" x2="100" y2="188" stroke="rgba(140,150,255,0.06)" strokeWidth="1" />
      <line x1="12" y1="100" x2="188" y2="100" stroke="rgba(140,150,255,0.06)" strokeWidth="1" />
      {/* Diagonal cross */}
      <line x1="38" y1="38" x2="162" y2="162" stroke="rgba(140,150,255,0.04)" strokeWidth="1" />
      <line x1="162" y1="38" x2="38" y2="162" stroke="rgba(140,150,255,0.04)" strokeWidth="1" />
      {/* Core identity circle */}
      <circle cx="100" cy="100" r="32" stroke="rgba(140,150,255,0.2)" strokeWidth="1.5" strokeDasharray="3 4" />
      <circle cx="100" cy="100" r="18" fill="rgba(140,150,255,0.05)" stroke="rgba(140,150,255,0.25)" strokeWidth="1" />
      {/* Center point */}
      <circle cx="100" cy="100" r="3" fill="rgba(140,150,255,0.6)" />
      {/* Corner markers */}
      <circle cx="12" cy="12" r="2" fill="rgba(140,150,255,0.2)" />
      <circle cx="188" cy="12" r="2" fill="rgba(140,150,255,0.2)" />
      <circle cx="12" cy="188" r="2" fill="rgba(140,150,255,0.2)" />
      <circle cx="188" cy="188" r="2" fill="rgba(140,150,255,0.2)" />
      {/* Tick marks on outer ring */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 100 + 88 * Math.cos(rad);
        const y1 = 100 + 88 * Math.sin(rad);
        const x2 = 100 + (88 - 5) * Math.cos(rad);
        const y2 = 100 + (88 - 5) * Math.sin(rad);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(140,150,255,0.2)" strokeWidth="1" strokeLinecap="round" />;
      })}
    </svg>
  );
}
