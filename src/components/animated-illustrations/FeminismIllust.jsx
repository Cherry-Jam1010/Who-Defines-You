import React from 'react';

const FeminismIllust = () => {
  return (
    <>
      <style>{`
        @keyframes fistRaise {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(2deg); }
        }
        @keyframes fistRaise2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
        }
        @keyframes fistRaise3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(1.5deg); }
        }
        @keyframes energyPulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.08); }
        }
        @keyframes energyPulse2 {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.12); }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes radialPulse {
          0%, 100% { stroke-width: 1; opacity: 0.3; }
          50% { stroke-width: 2; opacity: 0.7; }
        }
        @keyframes fistGlow {
          0%, 100% { filter: drop-shadow(0 0 3px rgba(0, 210, 240, 0.3)); }
          50% { filter: drop-shadow(0 0 8px rgba(0, 210, 240, 0.7)); }
        }
        .fist-1 { animation: fistRaise 3s ease-in-out infinite; transform-origin: 60px 70px; }
        .fist-2 { animation: fistRaise2 3.2s ease-in-out infinite; animation-delay: 0.4s; transform-origin: 60px 70px; }
        .fist-3 { animation: fistRaise3 2.8s ease-in-out infinite; animation-delay: 0.8s; transform-origin: 60px 70px; }
        .energy-ring { animation: energyPulse 2.5s ease-in-out infinite; transform-origin: center; }
        .energy-ring-2 { animation: energyPulse2 3s ease-in-out infinite; animation-delay: 0.3s; transform-origin: center; }
        .energy-ring-3 { animation: energyPulse 2.8s ease-in-out infinite; animation-delay: 0.6s; transform-origin: center; }
        .star-twinkle-1 { animation: starTwinkle 2s ease-in-out infinite; transform-origin: center; }
        .star-twinkle-2 { animation: starTwinkle 2.3s ease-in-out infinite; animation-delay: 0.4s; transform-origin: center; }
        .star-twinkle-3 { animation: starTwinkle 1.8s ease-in-out infinite; animation-delay: 0.8s; transform-origin: center; }
        .star-twinkle-4 { animation: starTwinkle 2.5s ease-in-out infinite; animation-delay: 1.2s; transform-origin: center; }
        .star-twinkle-5 { animation: starTwinkle 2.1s ease-in-out infinite; animation-delay: 0.6s; transform-origin: center; }
        .radial-line { animation: radialPulse 2s ease-in-out infinite; transform-origin: 60px 60px; }
        .fist-glow { animation: fistGlow 3s ease-in-out infinite; }
      `}</style>
      <svg viewBox="0 0 120 120" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="femBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#001520" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#002535" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="fistGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00D2F0" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#0090B0" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#006080" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2F0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0080C0" stopOpacity="0.5" />
          </linearGradient>
          <filter id="femGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect width="120" height="120" fill="url(#femBg)" rx="8" />

        {/* Radiating Energy Lines */}
        <g className="radial-line" style={{ transformOrigin: '60px 60px' }}>
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
            <line
              key={i}
              x1="60"
              y1="60"
              x2={60 + Math.cos((angle * Math.PI) / 180) * 45}
              y2={60 + Math.sin((angle * Math.PI) / 180) * 45}
              stroke="#00D2F0"
              strokeWidth="0.8"
              opacity="0.4"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </g>

        {/* Energy Rings */}
        <circle className="energy-ring" cx="60" cy="60" r="30" fill="none" stroke="#00D2F0" strokeWidth="1.5" opacity="0.4" />
        <circle className="energy-ring-2" cx="60" cy="60" r="38" fill="none" stroke="#0080C0" strokeWidth="1" opacity="0.3" />
        <circle className="energy-ring-3" cx="60" cy="60" r="46" fill="none" stroke="#00D2F0" strokeWidth="0.5" opacity="0.2" />

        {/* Center Fist - Multiple layered for depth */}
        <g className="fist-glow">
          {/* Shadow fist */}
          <path d="M 60 95 
                   Q 55 90 52 80 
                   L 50 75
                   L 48 68
                   L 50 60
                   L 54 55
                   Q 52 52 50 50
                   Q 52 45 56 48
                   L 58 52
                   L 60 48
                   L 62 52
                   L 64 48
                   L 66 52
                   L 68 48
                   Q 72 45 74 50
                   Q 76 55 72 60
                   L 70 68
                   L 68 75
                   Q 65 85 62 95
                   Z" 
                fill="#003045" opacity="0.5" transform="translate(2, 2)" />

          {/* Main fist */}
          <g className="fist-1">
            <path d="M 60 95 
                     Q 55 90 52 80 
                     L 50 75
                     L 48 68
                     L 50 60
                     L 54 55
                     Q 52 52 50 50
                     Q 52 45 56 48
                     L 58 52
                     L 60 48
                     L 62 52
                     L 64 48
                     L 66 52
                     L 68 48
                     Q 72 45 74 50
                     Q 76 55 72 60
                     L 70 68
                     L 68 75
                     Q 65 85 62 95
                     Z" 
                  fill="url(#fistGrad)" />
          </g>

          {/* Highlight on fist */}
          <path d="M 54 58 
                   Q 52 55 54 52
                   L 56 55
                   L 58 52
                   L 60 55
                   L 62 52
                   L 64 55
                   Q 65 58 64 60
                   L 54 60
                   Z" 
                fill="#FFFFFF" opacity="0.25" className="fist-2" />

          {/* Forearm */}
          <rect x="52" y="90" width="16" height="20" fill="url(#fistGrad)" rx="3" className="fist-3" />
        </g>

        {/* Twinkling Stars */}
        <g filter="url(#femGlow)">
          <polygon className="star-twinkle-1" points="25,25 26,28 29,28 27,30 28,33 25,31 22,33 23,30 21,28 24,28" fill="#00D2F0" />
          <polygon className="star-twinkle-2" points="95,30 96,32 99,32 97,34 98,37 95,35 92,37 93,34 91,32 94,32" fill="#80E0FF" />
          <polygon className="star-twinkle-3" points="15,55 16,57 19,57 17,59 18,62 15,60 12,62 13,59 11,57 14,57" fill="#00D2F0" />
          <polygon className="star-twinkle-4" points="105,50 106,52 109,52 107,54 108,57 105,55 102,57 103,54 101,52 104,52" fill="#80E0FF" />
          <polygon className="star-twinkle-5" points="30,85 31,87 34,87 32,89 33,92 30,90 27,92 28,89 26,87 29,87" fill="#00D2F0" />
          <polygon className="star-twinkle-1" points="90,80 91,82 94,82 92,84 93,87 90,85 87,87 88,84 86,82 89,82" fill="#80E0FF" style={{ animationDelay: '1.5s' }} />
          <polygon className="star-twinkle-3" points="20,40 21,42 24,42 22,44 23,47 20,45 17,47 18,44 16,42 19,42" fill="#00D2F0" style={{ animationDelay: '0.3s' }} />
          <polygon className="star-twinkle-5" points="100,70 101,72 104,72 102,74 103,77 100,75 97,77 98,74 96,72 99,72" fill="#80E0FF" style={{ animationDelay: '1s' }} />
        </g>

        {/* Additional floating energy particles */}
        <circle className="energy-ring-2" cx="30" cy="45" r="2" fill="#00D2F0" opacity="0.5" />
        <circle className="energy-ring" cx="90" cy="45" r="1.5" fill="#80E0FF" opacity="0.4" />
        <circle className="energy-ring-3" cx="25" cy="70" r="1.8" fill="#00D2F0" opacity="0.3" />
        <circle className="energy-ring" cx="95" cy="75" r="1.5" fill="#80E0FF" opacity="0.4" />
        <circle className="energy-ring-2" cx="40" cy="95" r="1.2" fill="#00D2F0" opacity="0.35" />
        <circle className="energy-ring-3" cx="80" cy="98" r="1.8" fill="#80E0FF" opacity="0.3" />
      </svg>
    </>
  );
};

export default FeminismIllust;
