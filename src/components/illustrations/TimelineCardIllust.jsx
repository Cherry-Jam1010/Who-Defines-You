const ERA_IMAGES = {
  ancient: {
    title: "Ancient Symbol",
    elements: (
      <>
        {/* Stylized goddess figure */}
        <ellipse cx="50" cy="22" rx="10" ry="10" fill="rgba(217,187,145,0.4)" stroke="rgba(217,187,145,0.6)" strokeWidth="1" />
        <path d="M 50 32 Q 38 50 42 72 L 50 75 L 58 72 Q 62 50 50 32Z" fill="rgba(217,187,145,0.25)" stroke="rgba(217,187,145,0.5)" strokeWidth="1" />
        {/* Horned crown / headdress */}
        <path d="M 40 15 Q 50 5 60 15" stroke="rgba(217,187,145,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="40" cy="15" r="3" fill="rgba(217,187,145,0.4)" />
        <circle cx="60" cy="15" r="3" fill="rgba(217,187,145,0.4)" />
        {/* Base pedestal */}
        <rect x="30" y="75" width="40" height="6" rx="2" fill="rgba(217,187,145,0.2)" />
        <line x1="20" y1="82" x2="80" y2="82" stroke="rgba(217,187,145,0.2)" strokeWidth="1" />
      </>
    )
  },
  colonial: {
    title: "Colonial Era",
    elements: (
      <>
        {/* Ship silhouette */}
        <path d="M 10 65 Q 25 60 40 65 L 38 55 L 42 55 L 50 65 Q 65 60 80 65 Q 85 72 50 80 Q 15 72 10 65Z" fill="rgba(255,140,154,0.2)" stroke="rgba(255,140,154,0.4)" strokeWidth="1" />
        {/* Mast */}
        <line x1="50" y1="30" x2="50" y2="65" stroke="rgba(255,140,154,0.5)" strokeWidth="1.5" />
        {/* Flag */}
        <path d="M 50 30 L 65 35 L 50 40Z" fill="rgba(255,140,154,0.3)" />
        {/* Waves */}
        <path d="M 5 82 Q 20 78 35 82 Q 50 86 65 82 Q 80 78 95 82" stroke="rgba(255,140,154,0.25)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M 10 88 Q 25 84 40 88 Q 55 92 70 88 Q 85 84 95 88" stroke="rgba(255,140,154,0.15)" strokeWidth="1" fill="none" strokeLinecap="round" />
      </>
    )
  },
  freud: {
    title: "Psychoanalysis",
    elements: (
      <>
        {/* Brain silhouette */}
        <path d="M 50 15 Q 75 15 78 35 Q 82 50 72 60 Q 78 68 72 78 Q 65 88 50 85 Q 35 88 28 78 Q 22 68 28 60 Q 18 50 22 35 Q 25 15 50 15Z" fill="rgba(140,150,255,0.12)" stroke="rgba(140,150,255,0.3)" strokeWidth="1.5" />
        {/* Corpus callosum / center line */}
        <line x1="50" y1="15" x2="50" y2="85" stroke="rgba(140,150,255,0.2)" strokeWidth="1" strokeDasharray="3 3" />
        {/* Brain folds - left */}
        <path d="M 32 30 Q 38 35 32 40 Q 26 45 32 50" stroke="rgba(140,150,255,0.3)" strokeWidth="1" fill="none" />
        <path d="M 38 38 Q 44 43 38 48" stroke="rgba(140,150,255,0.2)" strokeWidth="1" fill="none" />
        {/* Brain folds - right */}
        <path d="M 68 30 Q 62 35 68 40 Q 74 45 68 50" stroke="rgba(140,150,255,0.3)" strokeWidth="1" fill="none" />
        <path d="M 62 38 Q 56 43 62 48" stroke="rgba(140,150,255,0.2)" strokeWidth="1" fill="none" />
        {/* Center dot */}
        <circle cx="50" cy="50" r="3" fill="rgba(140,150,255,0.4)" />
      </>
    )
  },
  "second-wave": {
    title: "Second Wave Feminism",
    elements: (
      <>
        {/* Raised fist silhouette */}
        <path d="M 40 80 L 40 55 Q 40 48 44 45 Q 48 42 50 38 Q 52 42 56 45 Q 60 48 60 55 L 60 80Z" fill="rgba(130,210,255,0.2)" stroke="rgba(130,210,255,0.5)" strokeWidth="1.5" />
        {/* Arm */}
        <rect x="36" y="76" width="28" height="8" rx="3" fill="rgba(130,210,255,0.15)" />
        {/* Stars / sparks */}
        {[[75,30],[82,38],[70,42]].map(([cx,cy], i) => (
          <path key={i} d={`M ${cx} ${cy-4} L ${cx} ${cy+4} M ${cx-4} ${cy} L ${cx+4} ${cy}`} stroke="rgba(130,210,255,0.4)" strokeWidth="1" strokeLinecap="round" />
        ))}
        {/* Base line */}
        <line x1="20" y1="88" x2="80" y2="88" stroke="rgba(130,210,255,0.2)" strokeWidth="1" />
      </>
    )
  },
  "trans-activism": {
    title: "Trans Activism",
    elements: (
      <>
        {/* Rainbow arch / pride arc */}
        {[
          { r: 10, color: "rgba(255,0,0,0.5)", cy: 78 },
          { r: 16, color: "rgba(255,127,0,0.4)", cy: 74 },
          { r: 22, color: "rgba(255,255,0,0.35)", cy: 70 },
          { r: 28, color: "rgba(0,200,0,0.3)", cy: 66 },
          { r: 34, color: "rgba(0,0,255,0.25)", cy: 62 },
          { r: 40, color: "rgba(139,0,255,0.2)", cy: 58 }
        ].map(({ r, color, cy }, i) => (
          <path key={i} d={`M ${50-r} ${cy} Q 50 ${cy-15} ${50+r} ${cy}`} stroke={color.replace(/[\d.]+\)$/, '0.6)')} fill="none" strokeWidth="3" strokeLinecap="round" />
        ))}
        {/* Star at peak */}
        <path d="M 50 28 L 52 34 L 58 34 L 53 38 L 55 44 L 50 40 L 45 44 L 47 38 L 42 34 L 48 34 Z" fill="rgba(255,200,180,0.4)" stroke="rgba(255,200,180,0.6)" strokeWidth="0.5" />
        {/* Ground line */}
        <line x1="5" y1="85" x2="95" y2="85" stroke="rgba(200,200,255,0.15)" strokeWidth="1" />
      </>
    )
  },
  "bio-psycho-social": {
    title: "Bio-Psycho-Social",
    elements: (
      <>
        {/* Three overlapping circles - simplified version */}
        <circle cx="42" cy="42" r="20" fill="rgba(130,210,255,0.1)" stroke="rgba(130,210,255,0.4)" strokeWidth="1.5" />
        <circle cx="58" cy="42" r="20" fill="rgba(140,150,255,0.1)" stroke="rgba(140,150,255,0.4)" strokeWidth="1.5" />
        <circle cx="50" cy="58" r="20" fill="rgba(255,140,154,0.1)" stroke="rgba(255,140,154,0.4)" strokeWidth="1.5" />
        {/* Center intersection */}
        <circle cx="50" cy="50" r="5" fill="rgba(200,180,255,0.25)" stroke="rgba(200,180,255,0.5)" strokeWidth="1" />
        {/* Base */}
        <line x1="15" y1="82" x2="85" y2="82" stroke="rgba(200,200,255,0.1)" strokeWidth="1" />
      </>
    )
  }
};

export default function TimelineCardIllust({ era }) {
  const key = era.id || era;
  const img = ERA_IMAGES[key];

  if (!img) return null;

  return (
    <svg
      className="tl-card-illust"
      viewBox="0 0 100 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={img.title}
    >
      {img.elements}
    </svg>
  );
}
