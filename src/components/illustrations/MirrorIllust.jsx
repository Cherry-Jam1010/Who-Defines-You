export default function MirrorIllust() {
  return (
    <svg
      className="mirror-illust"
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mirrorGlow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="rgba(140,150,255,0.15)" />
          <stop offset="100%" stopColor="rgba(140,150,255,0)" />
        </radialGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(180,190,255,0.3)" />
          <stop offset="60%" stopColor="rgba(140,150,255,0.05)" />
          <stop offset="100%" stopColor="rgba(140,150,255,0)" />
        </radialGradient>
        <clipPath id="mirrorClip">
          <ellipse cx="100" cy="120" rx="78" ry="100" />
        </clipPath>
      </defs>

      {/* Ambient glow */}
      <ellipse cx="100" cy="120" rx="95" ry="115" fill="url(#mirrorGlow)" />

      {/* Outer frame - dashed */}
      <ellipse cx="100" cy="120" rx="88" ry="108" stroke="rgba(140,150,255,0.18)" strokeWidth="1" strokeDasharray="6 4" />

      {/* Main mirror body */}
      <ellipse cx="100" cy="120" rx="78" ry="100" fill="rgba(8,10,26,0.7)" stroke="rgba(140,150,255,0.22)" strokeWidth="1.5" />

      {/* Reflection surface - clipped */}
      <g clipPath="url(#mirrorClip)">
        {/* Subtle gradient bands */}
        <ellipse cx="85" cy="110" rx="60" ry="80" fill="rgba(140,150,255,0.04)" />
        <ellipse cx="120" cy="130" rx="40" ry="60" fill="rgba(100,130,200,0.03)" />

        {/* Center focal glow */}
        <ellipse cx="100" cy="115" rx="22" ry="28" fill="url(#centerGlow)" />

        {/* Inner subtle ring */}
        <ellipse cx="100" cy="120" rx="40" ry="52" stroke="rgba(140,150,255,0.1)" strokeWidth="1" strokeDasharray="3 5" />
      </g>

      {/* Core dot */}
      <circle cx="100" cy="115" r="5" fill="rgba(140,150,255,0.5)" />
      <circle cx="100" cy="115" r="2.5" fill="rgba(200,210,255,0.8)" />

      {/* Cardinal direction marks */}
      {[0, 90, 180, 270].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 100 + 88 * Math.cos(rad);
        const y1 = 120 + 108 * Math.sin(rad);
        const x2 = 100 + 96 * Math.cos(rad);
        const y2 = 120 + 116 * Math.sin(rad);
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(140,150,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />;
      })}

      {/* Corner sparkle dots */}
      {[[28,30],[172,30],[28,210],[172,210]].map(([cx,cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="3" fill="rgba(140,150,255,0.2)" />
          <circle cx={cx} cy={cy} r="1.2" fill="rgba(200,210,255,0.5)" />
        </g>
      ))}

      {/* Subtle scan line effect */}
      <line x1="22" y1="80" x2="178" y2="80" stroke="rgba(140,150,255,0.04)" strokeWidth="1" />
      <line x1="22" y1="100" x2="178" y2="100" stroke="rgba(140,150,255,0.04)" strokeWidth="1" />
      <line x1="22" y1="120" x2="178" y2="120" stroke="rgba(140,150,255,0.04)" strokeWidth="1" />
      <line x1="22" y1="140" x2="178" y2="140" stroke="rgba(140,150,255,0.04)" strokeWidth="1" />
      <line x1="22" y1="160" x2="178" y2="160" stroke="rgba(140,150,255,0.04)" strokeWidth="1" />
    </svg>
  );
}
