import React from 'react';

const AncientIllust = () => {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(18px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(18px) rotate(-360deg); }
        }
        @keyframes orbitReverse {
          0% { transform: rotate(0deg) translateX(22px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(22px) rotate(360deg); }
        }
        @keyframes driftFade {
          0%, 100% { opacity: 0.2; transform: translate(0, 0); }
          50% { opacity: 0.7; transform: translate(3px, -4px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes moonGlow {
          0%, 100% { filter: drop-shadow(0 0 3px rgba(255, 200, 100, 0.5)); }
          50% { filter: drop-shadow(0 0 8px rgba(255, 200, 100, 0.8)); }
        }
        .ancient-float { animation: float 4s ease-in-out infinite; transform-origin: center; }
        .ancient-orbit { animation: orbit 12s linear infinite; transform-origin: 60px 60px; }
        .ancient-orbit-reverse { animation: orbitReverse 16s linear infinite; transform-origin: 60px 60px; }
        .ancient-particle { animation: driftFade 5s ease-in-out infinite; }
        .ancient-star { animation: twinkle 2s ease-in-out infinite; }
        .ancient-moon { animation: moonGlow 3s ease-in-out infinite; }
      `}</style>
      <svg viewBox="0 0 120 120" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="ancientBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a0a00" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2d1810" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="templeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B6914" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#5C4410" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="goddessGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#FFA500" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#CD853F" stopOpacity="0.6" />
          </linearGradient>
          <filter id="ancientGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect width="120" height="120" fill="url(#ancientBg)" rx="8" />

        {/* Geometric Temple Background */}
        <g opacity="0.4">
          {/* Temple base */}
          <polygon points="60,105 25,95 95,95" fill="url(#templeGrad)" />
          <polygon points="60,85 30,95 90,95" fill="url(#templeGrad)" />
          <polygon points="60,95 35,105 85,105" fill="url(#templeGrad)" />
          {/* Temple pillars */}
          <rect x="38" y="75" width="4" height="20" fill="#8B6914" opacity="0.5" />
          <rect x="78" y="75" width="4" height="20" fill="#8B6914" opacity="0.5" />
          {/* Temple roof */}
          <polygon points="60,68 30,78 90,78" fill="url(#templeGrad)" />
          <polygon points="60,72 35,78 85,78" fill="#5C4410" opacity="0.3" />
          {/* Sacred geometry */}
          <circle cx="60" cy="50" r="15" fill="none" stroke="#FFD700" strokeWidth="0.5" opacity="0.3" />
          <polygon points="60,35 75,60 45,60" fill="none" stroke="#FFD700" strokeWidth="0.5" opacity="0.3" />
        </g>

        {/* Crescent Moon */}
        <g className="ancient-moon" filter="url(#ancientGlow)">
          <path d="M 92 18 A 10 10 0 1 1 92 38 A 7 7 0 1 0 92 18" fill="#FFE4B5" opacity="0.9" />
        </g>

        {/* Drifting Particles */}
        <circle cx="25" cy="30" r="1.5" fill="#FFD700" className="ancient-particle" style={{ animationDelay: '0s' }} />
        <circle cx="95" cy="45" r="1" fill="#FFA500" className="ancient-particle" style={{ animationDelay: '1s' }} />
        <circle cx="20" cy="55" r="1.2" fill="#FFE4B5" className="ancient-particle" style={{ animationDelay: '2s' }} />
        <circle cx="100" cy="65" r="1" fill="#FFD700" className="ancient-particle" style={{ animationDelay: '0.5s' }} />
        <circle cx="30" cy="40" r="0.8" fill="#FFA500" className="ancient-particle" style={{ animationDelay: '1.5s' }} />
        <circle cx="88" cy="30" r="1.3" fill="#FFE4B5" className="ancient-particle" style={{ animationDelay: '2.5s' }} />

        {/* Orbiting Stars */}
        <g style={{ transformOrigin: '60px 55px' }}>
          <g className="ancient-orbit" style={{ transformOrigin: '60px 55px' }}>
            <polygon points="18,55 19,57 21,57 19.5,58.5 20,61 18,59.5 16,61 16.5,58.5 15,57 17,57" fill="#FFD700" className="ancient-star" />
          </g>
          <g className="ancient-orbit-reverse" style={{ transformOrigin: '60px 55px' }}>
            <polygon points="102,55 103,57 105,57 103.5,58.5 104,61 102,59.5 100,61 100.5,58.5 99,57 101,57" fill="#FFE4B5" className="ancient-star" style={{ animationDelay: '0.5s' }} />
          </g>
          <g className="ancient-orbit" style={{ transformOrigin: '60px 55px', animationDuration: '10s' }}>
            <circle cx="60" cy="32" r="2" fill="#FFA500" className="ancient-star" style={{ animationDelay: '1s' }} />
          </g>
        </g>

        {/* Goddess Figure */}
        <g className="ancient-float">
          {/* Halo */}
          <circle cx="60" cy="50" r="18" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.4" filter="url(#ancientGlow)" />
          <circle cx="60" cy="50" r="14" fill="none" stroke="#FFA500" strokeWidth="0.5" opacity="0.3" />

          {/* Body/Dress */}
          <path d="M 60 58 Q 50 65 48 85 L 72 85 Q 70 65 60 58" fill="url(#goddessGrad)" />

          {/* Head */}
          <circle cx="60" cy="52" r="7" fill="url(#goddessGrad)" />

          {/* Arms raised */}
          <path d="M 52 55 Q 45 50 42 42" stroke="url(#goddessGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 68 55 Q 75 50 78 42" stroke="url(#goddessGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Hands/Crown rays */}
          <line x1="42" y1="42" x2="40" y2="38" stroke="#FFD700" strokeWidth="1.5" opacity="0.7" />
          <line x1="42" y1="42" x2="38" y2="40" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
          <line x1="78" y1="42" x2="80" y2="38" stroke="#FFD700" strokeWidth="1.5" opacity="0.7" />
          <line x1="78" y1="42" x2="82" y2="40" stroke="#FFD700" strokeWidth="1" opacity="0.5" />

          {/* Face suggestion */}
          <circle cx="58" cy="51" r="0.8" fill="#8B6914" opacity="0.5" />
          <circle cx="62" cy="51" r="0.8" fill="#8B6914" opacity="0.5" />
          <path d="M 58 54 Q 60 56 62 54" stroke="#8B6914" strokeWidth="0.5" fill="none" opacity="0.4" />
        </g>

        {/* Ground glow */}
        <ellipse cx="60" cy="88" rx="20" ry="4" fill="#FFD700" opacity="0.15" filter="url(#ancientGlow)" />
      </svg>
    </>
  );
};

export default AncientIllust;
