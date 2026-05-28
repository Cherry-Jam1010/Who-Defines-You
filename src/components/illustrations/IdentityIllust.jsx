export default function IdentityIllust() {
  return (
    <svg
      className="identity-illust"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="idGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(140,150,255,0.12)" />
          <stop offset="100%" stopColor="rgba(140,150,255,0)" />
        </radialGradient>
        <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(200,210,255,0.3)" />
          <stop offset="100%" stopColor="rgba(140,150,255,0.05)" />
        </radialGradient>
      </defs>

      {/* Ambient background glow */}
      <circle cx="110" cy="110" r="105" fill="url(#idGlow)" />

      {/* Outermost ring */}
      <circle cx="110" cy="110" r="98" stroke="rgba(140,150,255,0.08)" strokeWidth="1" />

      {/* Ring 2 */}
      <circle cx="110" cy="110" r="82" stroke="rgba(140,150,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Ring 3 */}
      <circle cx="110" cy="110" r="65" stroke="rgba(140,150,255,0.12)" strokeWidth="1.5" />

      {/* Inner filled core */}
      <circle cx="110" cy="110" r="45" fill="url(#coreGrad)" />
      <circle cx="110" cy="110" r="45" stroke="rgba(140,150,255,0.18)" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Crosshair lines */}
      <line x1="110" y1="12" x2="110" y2="208" stroke="rgba(140,150,255,0.06)" strokeWidth="1" />
      <line x1="12" y1="110" x2="208" y2="110" stroke="rgba(140,150,255,0.06)" strokeWidth="1" />

      {/* Diagonal crosshairs */}
      <line x1="42" y1="42" x2="178" y2="178" stroke="rgba(140,150,255,0.04)" strokeWidth="1" />
      <line x1="178" y1="42" x2="42" y2="178" stroke="rgba(140,150,255,0.04)" strokeWidth="1" />

      {/* Tick marks on outermost ring */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 110 + 98 * Math.cos(rad);
        const y1 = 110 + 98 * Math.sin(rad);
        const x2 = 110 + 105 * Math.cos(rad);
        const y2 = 110 + 105 * Math.sin(rad);
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(140,150,255,0.2)" strokeWidth="1.2" strokeLinecap="round" />;
      })}

      {/* Secondary tick marks on ring 3 */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 110 + 65 * Math.cos(rad);
        const y1 = 110 + 65 * Math.sin(rad);
        const x2 = 110 + 70 * Math.cos(rad);
        const y2 = 110 + 70 * Math.sin(rad);
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(140,150,255,0.15)" strokeWidth="1" strokeLinecap="round" />;
      })}

      {/* Center core */}
      <circle cx="110" cy="110" r="10" fill="rgba(140,150,255,0.15)" />
      <circle cx="110" cy="110" r="6" fill="rgba(140,150,255,0.3)" />
      <circle cx="110" cy="110" r="3" fill="rgba(200,215,255,0.8)" />

      {/* Corner constellation dots */}
      {[[14,14],[206,14],[14,206],[206,206]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" fill="rgba(140,150,255,0.2)" />
      ))}

      {/* Inner quadrant markers */}
      {[[65,65],[155,65],[65,155],[155,155]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.5" fill="rgba(140,150,255,0.15)" />
      ))}
    </svg>
  );
}
