export default function BioPsychoSocialIllust() {
  return (
    <svg
      className="bps-illust"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Bio circle - cyan */}
      <circle cx="100" cy="120" r="72" stroke="rgba(130,210,255,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="100" cy="120" r="56" stroke="rgba(130,210,255,0.15)" strokeWidth="1" />
      <text x="100" y="116" textAnchor="middle" fill="rgba(130,210,255,0.6)" fontSize="10" fontFamily="Space Grotesk, sans-serif" letterSpacing="1">BIO</text>
      <text x="100" y="130" textAnchor="middle" fill="rgba(130,210,255,0.4)" fontSize="8" fontFamily="Space Grotesk, sans-serif">生物</text>

      {/* Psycho circle - violet */}
      <circle cx="200" cy="120" r="72" stroke="rgba(140,150,255,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="200" cy="120" r="56" stroke="rgba(140,150,255,0.15)" strokeWidth="1" />
      <text x="200" y="116" textAnchor="middle" fill="rgba(140,150,255,0.6)" fontSize="10" fontFamily="Space Grotesk, sans-serif" letterSpacing="1">PSYCHO</text>
      <text x="200" y="130" textAnchor="middle" fill="rgba(140,150,255,0.4)" fontSize="8" fontFamily="Space Grotesk, sans-serif">心理</text>

      {/* Social circle - rose */}
      <circle cx="150" cy="205" r="72" stroke="rgba(255,140,154,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="150" cy="205" r="56" stroke="rgba(255,140,154,0.15)" strokeWidth="1" />
      <text x="150" y="201" textAnchor="middle" fill="rgba(255,140,154,0.6)" fontSize="10" fontFamily="Space Grotesk, sans-serif" letterSpacing="1">SOCIAL</text>
      <text x="150" y="215" textAnchor="middle" fill="rgba(255,140,154,0.4)" fontSize="8" fontFamily="Space Grotesk, sans-serif">社会</text>

      {/* Overlap highlight at center */}
      <circle cx="150" cy="143" r="10" fill="rgba(140,150,255,0.1)" stroke="rgba(255,140,154,0.3)" strokeWidth="1" />
      <circle cx="150" cy="143" r="4" fill="rgba(255,200,180,0.5)" />

      {/* Connection lines */}
      <line x1="128" y1="138" x2="135" y2="140" stroke="rgba(140,150,255,0.2)" strokeWidth="1" />
      <line x1="172" y1="138" x2="165" y2="140" stroke="rgba(140,150,255,0.2)" strokeWidth="1" />
      <line x1="150" y1="175" x2="150" y2="185" stroke="rgba(255,140,154,0.2)" strokeWidth="1" />
    </svg>
  );
}
