export default function TimelineIllust() {
  const nodes = [
    { cy: 36, color: "#d9bb91", label: "古代" },
    { cy: 76, color: "#ff8c9a", label: "殖民" },
    { cy: 116, color: "#8c96ff", label: "精神分析" },
    { cy: 156, color: "#82d2ff", label: "女性主义" },
    { cy: 196, color: "#cce0ff", label: "行动主义" },
    { cy: 236, color: "#8c96ff", label: "整合" }
  ];

  return (
    <svg
      className="timeline-illust"
      viewBox="0 0 60 275"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lineGrad" x1="30" y1="10" x2="30" y2="268" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(140,150,255,0)" />
          <stop offset="20%" stopColor="rgba(140,150,255,0.25)" />
          <stop offset="80%" stopColor="rgba(140,150,255,0.25)" />
          <stop offset="100%" stopColor="rgba(140,150,255,0)" />
        </linearGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* Gradient background strip */}
      <rect x="28" y="10" width="4" height="258" rx="2" fill="url(#lineGrad)" />

      {nodes.map((n, i) => (
        <g key={i}>
          {/* Outer glow */}
          <circle cx="30" cy={n.cy} r="9" fill={n.color} fillOpacity="0.08" />
          {/* Dashed orbit ring */}
          <circle cx="30" cy={n.cy} r="6" stroke={n.color} strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.4" />
          {/* Core dot */}
          <circle cx="30" cy={n.cy} r="3.5" fill={n.color} fillOpacity="0.6" />
          <circle cx="30" cy={n.cy} r="1.8" fill={n.color} />

          {/* Branch line to right */}
          <line x1="37" y1={n.cy} x2="58" y2={n.cy - 6} stroke={n.color} strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="2 3" />

          {/* Subtle horizontal shimmer */}
          <line x1="20" y1={n.cy} x2="40" y2={n.cy} stroke={n.color} strokeWidth="0.5" strokeOpacity="0.1" />
        </g>
      ))}

      {/* Top arrow */}
      <path d="M 30 8 L 26 15 L 34 15 Z" fill="rgba(140,150,255,0.3)" />

      {/* Bottom terminus */}
      <circle cx="30" cy="270" r="2" fill="rgba(140,150,255,0.2)" />
    </svg>
  );
}
