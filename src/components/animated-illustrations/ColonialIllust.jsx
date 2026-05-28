import React from 'react';

const ColonialIllust = () => {
  return (
    <>
      <style>{`
        @keyframes rotateCompass {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes waveMove {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-8px); }
        }
        @keyframes waveMove2 {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(6px); }
        }
        @keyframes fadeInShip {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bobFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-2px) rotate(1deg); }
          75% { transform: translateY(2px) rotate(-1deg); }
        }
        @keyframes compassPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .compass-rotate { animation: rotateCompass 20s linear infinite; transform-origin: center; }
        .wave-anim { animation: waveMove 3s ease-in-out infinite; }
        .wave-anim2 { animation: waveMove2 2.5s ease-in-out infinite; }
        .wave-anim3 { animation: waveMove 3.5s ease-in-out infinite; }
        .ship-fade { animation: fadeInShip 2s ease-out forwards; }
        .ship-bob { animation: bobFloat 4s ease-in-out infinite; }
        .compass-glow { animation: compassPulse 3s ease-in-out infinite; }
      `}</style>
      <svg viewBox="0 0 120 120" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="colonialBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2d1f2f" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1a1520" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B4557" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4a2a3a" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="shipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C0A080" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8B7355" stopOpacity="0.7" />
          </linearGradient>
          <filter id="colonialGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect width="120" height="120" fill="url(#colonialBg)" rx="8" />

        {/* Stars in sky */}
        <circle cx="15" cy="15" r="1" fill="#E8D4C4" opacity="0.6" />
        <circle cx="35" cy="10" r="0.8" fill="#E8D4C4" opacity="0.4" />
        <circle cx="55" cy="8" r="1.2" fill="#E8D4C4" opacity="0.5" />
        <circle cx="85" cy="12" r="0.7" fill="#E8D4C4" opacity="0.6" />
        <circle cx="105" cy="18" r="1" fill="#E8D4C4" opacity="0.4" />
        <circle cx="25" cy="25" r="0.6" fill="#E8D4C4" opacity="0.3" />
        <circle cx="95" cy="25" r="0.9" fill="#E8D4C4" opacity="0.5" />

        {/* Rotating Compass Rose */}
        <g className="compass-rotate" style={{ transformOrigin: '60px 45px' }}>
          <g className="compass-glow" filter="url(#colonialGlow)">
            {/* Outer compass ring */}
            <circle cx="60" cy="45" r="20" fill="none" stroke="#D4A574" strokeWidth="1.5" opacity="0.7" />
            <circle cx="60" cy="45" r="16" fill="none" stroke="#C0937A" strokeWidth="0.5" opacity="0.5" />

            {/* Compass points */}
            <polygon points="60,25 62,42 60,45 58,42" fill="#E8D4C4" opacity="0.9" />
            <polygon points="60,65 58,48 60,45 62,48" fill="#8B7355" opacity="0.7" />
            <polygon points="40,45 43,47 45,45 43,43" fill="#8B7355" opacity="0.7" />
            <polygon points="80,45 77,43 75,45 77,47" fill="#8B7355" opacity="0.7" />

            {/* Diagonal points */}
            <polygon points="46,31 48,43 45,45 43,43" fill="#C0937A" opacity="0.6" />
            <polygon points="74,31 72,43 75,45 77,43" fill="#C0937A" opacity="0.6" />
            <polygon points="46,59 43,47 45,45 48,47" fill="#C0937A" opacity="0.6" />
            <polygon points="74,59 77,47 75,45 72,47" fill="#C0937A" opacity="0.6" />

            {/* Center */}
            <circle cx="60" cy="45" r="3" fill="#E8D4C4" opacity="0.8" />
            <circle cx="60" cy="45" r="1.5" fill="#8B7355" opacity="0.9" />
          </g>
        </g>

        {/* Ship Silhouette */}
        <g className="ship-fade">
          <g className="ship-bob" style={{ transformOrigin: '60px 65px' }}>
            {/* Hull */}
            <path d="M 35 70 Q 40 78 60 80 Q 80 78 85 70 L 82 70 Q 78 76 60 78 Q 42 76 38 70 Z" fill="url(#shipGrad)" />
            
            {/* Deck */}
            <rect x="38" y="68" width="44" height="3" fill="#A08060" opacity="0.8" />
            
            {/* Mast */}
            <rect x="58" y="38" width="4" height="32" fill="#8B7355" opacity="0.9" />
            
            {/* Crow's nest */}
            <rect x="55" y="36" width="10" height="4" fill="#8B7355" opacity="0.7" rx="1" />
            
            {/* Sail */}
            <path d="M 62 42 Q 75 55 62 70 L 62 42" fill="#E8D4C4" opacity="0.8" />
            <path d="M 58 44 Q 45 56 58 68 L 58 44" fill="#D4C4B4" opacity="0.7" />
            
            {/* Flag */}
            <path d="M 60 38 L 60 32 L 68 35 L 60 38" fill="#8B4557" opacity="0.9" />
            
            {/* Rigging lines */}
            <line x1="58" y1="40" x2="40" y2="68" stroke="#6B5344" strokeWidth="0.5" opacity="0.4" />
            <line x1="62" y1="40" x2="80" y2="68" stroke="#6B5344" strokeWidth="0.5" opacity="0.4" />
          </g>
        </g>

        {/* Ocean Waves */}
        <g className="wave-anim">
          <path d="M -10 88 Q 10 82 30 88 Q 50 94 70 88 Q 90 82 110 88 Q 130 94 140 88 L 140 120 L -10 120 Z" fill="url(#oceanGrad)" opacity="0.8" />
        </g>
        <g className="wave-anim2" style={{ animationDelay: '0.5s' }}>
          <path d="M -10 92 Q 15 86 40 92 Q 65 98 85 92 Q 105 86 130 92 L 130 120 L -10 120 Z" fill="#6B4A5A" opacity="0.6" />
        </g>
        <g className="wave-anim3" style={{ animationDelay: '1s' }}>
          <path d="M -10 96 Q 20 90 50 96 Q 80 102 110 96 Q 140 90 150 96 L 150 120 L -10 120 Z" fill="#5A3A4A" opacity="0.5" />
        </g>

        {/* Wave foam highlights */}
        <g className="wave-anim" style={{ animationDelay: '0.3s' }}>
          <circle cx="25" cy="88" r="2" fill="#E8D4C4" opacity="0.3" />
          <circle cx="65" cy="90" r="1.5" fill="#E8D4C4" opacity="0.25" />
          <circle cx="100" cy="87" r="1.8" fill="#E8D4C4" opacity="0.2" />
        </g>

        {/* Distant horizon line */}
        <line x1="0" y1="85" x2="120" y2="85" stroke="#D4A574" strokeWidth="0.5" opacity="0.2" />
      </svg>
    </>
  );
};

export default ColonialIllust;
