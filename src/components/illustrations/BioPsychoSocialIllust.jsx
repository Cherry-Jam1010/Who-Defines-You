export default function BioPsychoSocialIllust() {
  return (
    <svg
      className="bps-illust"
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bioGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(130,210,255,0.12)" />
          <stop offset="100%" stopColor="rgba(130,210,255,0)" />
        </radialGradient>
        <radialGradient id="psyGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(140,150,255,0.12)" />
          <stop offset="100%" stopColor="rgba(140,150,255,0)" />
        </radialGradient>
        <radialGradient id="socGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,140,154,0.12)" />
          <stop offset="100%" stopColor="rgba(255,140,154,0)" />
        </radialGradient>
        <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,200,160,0.25)" />
          <stop offset="100%" stopColor="rgba(255,180,140,0)" />
        </radialGradient>
      </defs>

      {/* Background ambient */}
      <circle cx="160" cy="160" r="140" fill="rgba(140,150,255,0.02)" />

      {/* Bio circle - top left - cyan */}
      <circle cx="115" cy="120" r="80" fill="url(#bioGrad)" />
      <circle cx="115" cy="120" r="80" stroke="rgba(130,210,255,0.2)" strokeWidth="1.5" strokeDasharray="5 3" />
      <circle cx="115" cy="120" r="60" stroke="rgba(130,210,255,0.1)" strokeWidth="1" />
      <text x="115" y="115" textAnchor="middle" fill="rgba(130,210,255,0.7)" fontSize="10" fontFamily="Space Grotesk, sans-serif" letterSpacing="2">BIO</text>
      <text x="115" y="130" textAnchor="middle" fill="rgba(130,210,255,0.4)" fontSize="8" fontFamily="Space Grotesk, sans-serif">生物</text>

      {/* Psycho circle - top right - violet */}
      <circle cx="205" cy="120" r="80" fill="url(#psyGrad)" />
      <circle cx="205" cy="120" r="80" stroke="rgba(140,150,255,0.2)" strokeWidth="1.5" strokeDasharray="5 3" />
      <circle cx="205" cy="120" r="60" stroke="rgba(140,150,255,0.1)" strokeWidth="1" />
      <text x="205" y="115" textAnchor="middle" fill="rgba(160,170,255,0.7)" fontSize="10" fontFamily="Space Grotesk, sans-serif" letterSpacing="1">PSYCHO</text>
      <text x="205" y="130" textAnchor="middle" fill="rgba(160,170,255,0.4)" fontSize="8" fontFamily="Space Grotesk, sans-serif">心理</text>

      {/* Social circle - bottom - rose */}
      <circle cx="160" cy="205" r="80" fill="url(#socGrad)" />
      <circle cx="160" cy="205" r="80" stroke="rgba(255,140,154,0.2)" strokeWidth="1.5" strokeDasharray="5 3" />
      <circle cx="160" cy="205" r="60" stroke="rgba(255,140,154,0.1)" strokeWidth="1" />
      <text x="160" y="200" textAnchor="middle" fill="rgba(255,160,170,0.7)" fontSize="10" fontFamily="Space Grotesk, sans-serif" letterSpacing="1">SOCIAL</text>
      <text x="160" y="215" textAnchor="middle" fill="rgba(255,160,170,0.4)" fontSize="8" fontFamily="Space Grotesk, sans-serif">社会</text>

      {/* Overlap / intersection highlight */}
      <circle cx="160" cy="148" r="16" fill="rgba(200,180,255,0.06)" />
      <circle cx="160" cy="148" r="10" fill="url(#centerGrad)" />
      <circle cx="160" cy="148" r="5" fill="rgba(255,200,160,0.5)" />
      <circle cx="160" cy="148" r="2.5" fill="rgba(255,230,200,0.9)" />

      {/* Connection lines between circles */}
      <line x1="140" y1="135" x2="148" y2="142" stroke="rgba(160,160,200,0.2)" strokeWidth="1" />
      <line x1="180" y1="135" x2="172" y2="142" stroke="rgba(160,160,200,0.2)" strokeWidth="1" />
      <line x1="160" y1="180" x2="160" y2="188" stroke="rgba(200,160,170,0.2)" strokeWidth="1" />

      {/* Outer tick marks */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 160 + 110 * Math.cos(rad);
        const y1 = 160 + 110 * Math.sin(rad);
        const x2 = 160 + 118 * Math.cos(rad);
        const y2 = 160 + 118 * Math.sin(rad);
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(140,150,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />;
      })}
    </svg>
  );
}
