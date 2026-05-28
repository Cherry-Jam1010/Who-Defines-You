export default function MirrorIllust() {
  return (
    <svg
      className="mirror-illust"
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer oval frame */}
      <ellipse cx="60" cy="80" rx="52" ry="72" stroke="rgba(140,150,255,0.2)" strokeWidth="1.5" />
      {/* Inner glow ring */}
      <ellipse cx="60" cy="80" rx="44" ry="63" stroke="rgba(140,150,255,0.1)" strokeWidth="1" strokeDasharray="3 5" />
      {/* Core reflection */}
      <ellipse cx="60" cy="80" rx="28" ry="40" fill="rgba(140,150,255,0.04)" stroke="rgba(140,150,255,0.15)" strokeWidth="1" />
      {/* Center dot */}
      <circle cx="60" cy="80" r="3" fill="rgba(140,150,255,0.4)" />
      {/* Ambient rays */}
      <line x1="60" y1="8" x2="60" y2="22" stroke="rgba(140,150,255,0.15)" strokeWidth="1" strokeLinecap="round" />
      <line x1="60" y1="138" x2="60" y2="152" stroke="rgba(140,150,255,0.15)" strokeWidth="1" strokeLinecap="round" />
      <line x1="8" y1="80" x2="22" y2="80" stroke="rgba(140,150,255,0.15)" strokeWidth="1" strokeLinecap="round" />
      <line x1="98" y1="80" x2="112" y2="80" stroke="rgba(140,150,255,0.15)" strokeWidth="1" strokeLinecap="round" />
      {/* Corner accents */}
      <circle cx="24" cy="28" r="1.5" fill="rgba(140,150,255,0.3)" />
      <circle cx="96" cy="28" r="1.5" fill="rgba(140,150,255,0.3)" />
      <circle cx="24" cy="132" r="1.5" fill="rgba(140,150,255,0.3)" />
      <circle cx="96" cy="132" r="1.5" fill="rgba(140,150,255,0.3)" />
    </svg>
  );
}
