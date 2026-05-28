export default function TimelineIllust() {
  const nodes = [
    { cx: 30, cy: 40, r: 3 },
    { cx: 30, cy: 85, r: 3 },
    { cx: 30, cy: 130, r: 3 },
    { cx: 30, cy: 175, r: 3 },
    { cx: 30, cy: 220, r: 3 },
    { cx: 30, cy: 265, r: 3 }
  ];

  return (
    <svg
      className="timeline-illust"
      viewBox="0 0 60 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main vertical line */}
      <line x1="30" y1="15" x2="30" y2="290" stroke="rgba(140,150,255,0.2)" strokeWidth="1" />

      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r={n.r} fill="rgba(140,150,255,0.3)" />
          <circle cx={n.cx} cy={n.cy} r={n.r - 1} fill="rgba(140,150,255,0.5)" />
          {/* Branch lines */}
          <line x1={n.cx + n.r} y1={n.cy} x2="55" y2={n.cy - 8} stroke="rgba(140,150,255,0.12)" strokeWidth="1" strokeDasharray="2 3" />
        </g>
      ))}

      {/* Top arrow */}
      <path d="M 30 12 L 26 18 L 34 18 Z" fill="rgba(140,150,255,0.3)" />
    </svg>
  );
}
