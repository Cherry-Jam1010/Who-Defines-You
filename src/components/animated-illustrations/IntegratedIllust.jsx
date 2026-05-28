import React from 'react';

const IntegratedIllust = () => {
  return (
    <>
      <style>{`
        @keyframes orbitBio {
          0% { transform: rotate(0deg) translateX(22px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(22px) rotate(-360deg); }
        }
        @keyframes orbitPsycho {
          0% { transform: rotate(120deg) translateX(22px) rotate(-120deg); }
          100% { transform: rotate(480deg) translateX(22px) rotate(-480deg); }
        }
        @keyframes orbitSocial {
          0% { transform: rotate(240deg) translateX(22px) rotate(-240deg); }
          100% { transform: rotate(600deg) translateX(22px) rotate(-600deg); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; filter: drop-shadow(0 0 3px currentColor); }
          50% { opacity: 1; filter: drop-shadow(0 0 10px currentColor); }
        }
        @keyframes lineConnect {
          0%, 100% { opacity: 0.2; stroke-width: 1; }
          50% { opacity: 0.8; stroke-width: 2; }
        }
        @keyframes centerPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes particleDrift {
          0%, 100% { transform: translate(0, 0); opacity: 0.4; }
          25% { transform: translate(3px, -2px); opacity: 0.8; }
          50% { transform: translate(0, -4px); opacity: 0.6; }
          75% { transform: translate(-3px, -2px); opacity: 0.9; }
        }
        @keyframes ringExpand {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .orbit-bio { animation: orbitBio 12s linear infinite; transform-origin: 60px 60px; }
        .orbit-psycho { animation: orbitPsycho 12s linear infinite; transform-origin: 60px 60px; }
        .orbit-social { animation: orbitSocial 12s linear infinite; transform-origin: 60px 60px; }
        .glow-cyan { animation: glowPulse 2.5s ease-in-out infinite; color: #00D4FF; }
        .glow-violet { animation: glowPulse 2.8s ease-in-out infinite; color: #9B6BCE; animation-delay: 0.4s; }
        .glow-rose { animation: glowPulse 3s ease-in-out infinite; color: #E91E63; animation-delay: 0.8s; }
        .line-connect-1 { animation: lineConnect 2s ease-in-out infinite; }
        .line-connect-2 { animation: lineConnect 2.3s ease-in-out infinite; animation-delay: 0.3s; }
        .line-connect-3 { animation: lineConnect 2.1s ease-in-out infinite; animation-delay: 0.6s; }
        .center-pulse { animation: centerPulse 2s ease-in-out infinite; transform-origin: center; }
        .particle-drift-1 { animation: particleDrift 4s ease-in-out infinite; }
        .particle-drift-2 { animation: particleDrift 3.5s ease-in-out infinite; animation-delay: 0.5s; }
        .particle-drift-3 { animation: particleDrift 4.5s ease-in-out infinite; animation-delay: 1s; }
        .ring-expand { animation: ringExpand 3s ease-out infinite; transform-origin: center; }
      `}</style>
      <svg viewBox="0 0 120 120" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="integratedBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0a1525" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0d1a2d" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="bioGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#0090B0" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#006080" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id="psychoGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B088D0" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#9B6BCE" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7B4BB0" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id="socialGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF7096" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#E91E63" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C2185B" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#9B6BCE" stopOpacity="0.6" />
          </radialGradient>
          <filter id="integratedGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect width="120" height="120" fill="url(#integratedBg)" rx="8" />

        {/* Background orbital rings */}
        <circle cx="60" cy="60" r="28" fill="none" stroke="#00D4FF" strokeWidth="0.3" opacity="0.2" />
        <circle cx="60" cy="60" r="32" fill="none" stroke="#9B6BCE" strokeWidth="0.3" opacity="0.2" />
        <circle cx="60" cy="60" r="36" fill="none" stroke="#E91E63" strokeWidth="0.3" opacity="0.2" />

        {/* Connection Lines between circles */}
        <g filter="url(#integratedGlow)">
          {/* Bio to Psycho */}
          <line className="line-connect-1" x1="42" y1="45" x2="78" y2="45" stroke="#00D4FF" strokeWidth="1.5" strokeDasharray="4,2" />
          {/* Psycho to Social */}
          <line className="line-connect-2" x1="78" y1="45" x2="60" y2="82" stroke="#9B6BCE" strokeWidth="1.5" strokeDasharray="4,2" />
          {/* Social to Bio */}
          <line className="line-connect-3" x1="60" y1="82" x2="42" y2="45" stroke="#E91E63" strokeWidth="1.5" strokeDasharray="4,2" />
        </g>

        {/* Expanding rings from center */}
        <circle className="ring-expand" cx="60" cy="60" r="8" fill="none" stroke="#00D4FF" strokeWidth="0.5" opacity="0" />
        <circle className="ring-expand" cx="60" cy="60" r="8" fill="none" stroke="#9B6BCE" strokeWidth="0.5" opacity="0" style={{ animationDelay: '1s' }} />
        <circle className="ring-expand" cx="60" cy="60" r="8" fill="none" stroke="#E91E63" strokeWidth="0.5" opacity="0" style={{ animationDelay: '2s' }} />

        {/* Orbiting Circles - Three main elements */}
        {/* Biological Circle */}
        <g className="orbit-bio" style={{ transformOrigin: '60px 60px' }}>
          <circle className="glow-cyan" cx="60" cy="38" r="12" fill="url(#bioGrad)" filter="url(#integratedGlow)" />
          {/* DNA helix hint */}
          <path d="M 55 35 Q 58 38 55 41 M 65 35 Q 62 38 65 41" stroke="#FFFFFF" strokeWidth="0.8" fill="none" opacity="0.5" />
          <circle cx="55" cy="35" r="1" fill="#FFFFFF" opacity="0.7" />
          <circle cx="65" cy="41" r="1" fill="#FFFFFF" opacity="0.7" />
        </g>

        {/* Psychological Circle */}
        <g className="orbit-psycho" style={{ transformOrigin: '60px 60px' }}>
          <circle className="glow-violet" cx="60" cy="38" r="12" fill="url(#psychoGrad)" filter="url(#integratedGlow)" />
          {/* Brain hint */}
          <path d="M 54 36 Q 56 34 60 36 Q 64 34 66 36 Q 64 40 60 38 Q 56 40 54 36" stroke="#FFFFFF" strokeWidth="0.8" fill="none" opacity="0.5" />
          <circle cx="60" cy="37" r="1.5" fill="#FFFFFF" opacity="0.6" />
        </g>

        {/* Social Circle */}
        <g className="orbit-social" style={{ transformOrigin: '60px 60px' }}>
          <circle className="glow-rose" cx="60" cy="38" r="12" fill="url(#socialGrad)" filter="url(#integratedGlow)" />
          {/* People hint */}
          <circle cx="57" cy="35" r="1.5" fill="#FFFFFF" opacity="0.6" />
          <circle cx="63" cy="35" r="1.5" fill="#FFFFFF" opacity="0.6" />
          <path d="M 55 40 Q 57 38 59 40 Q 61 38 63 40 Q 65 38 67 40" stroke="#FFFFFF" strokeWidth="0.8" fill="none" opacity="0.5" />
        </g>

        {/* Central pulsing point */}
        <g className="center-pulse" style={{ transformOrigin: '60px 60px' }}>
          <circle cx="60" cy="60" r="10" fill="url(#centerGrad)" opacity="0.3" filter="url(#integratedGlow)" />
          <circle cx="60" cy="60" r="6" fill="url(#centerGrad)" opacity="0.6" />
          <circle cx="60" cy="60" r="3" fill="#FFFFFF" opacity="0.9" />
        </g>

        {/* Floating particles */}
        <g filter="url(#integratedGlow)">
          <circle className="particle-drift-1" cx="25" cy="30" r="1.5" fill="#00D4FF" />
          <circle className="particle-drift-2" cx="95" cy="35" r="1.2" fill="#9B6BCE" />
          <circle className="particle-drift-3" cx="30" cy="85" r="1.3" fill="#E91E63" />
          <circle className="particle-drift-1" cx="90" cy="80" r="1" fill="#00D4FF" style={{ animationDelay: '0.8s' }} />
          <circle className="particle-drift-2" cx="20" cy="55" r="1.2" fill="#9B6BCE" style={{ animationDelay: '1.2s' }} />
          <circle className="particle-drift-3" cx="100" cy="60" r="1" fill="#E91E63" style={{ animationDelay: '1.6s' }} />
        </g>

        {/* Labels/indicators */}
        <g opacity="0.7">
          <circle cx="38" cy="20" r="2" fill="#00D4FF" />
          <line x1="40" y1="20" x2="46" y2="28" stroke="#00D4FF" strokeWidth="0.5" />
          
          <circle cx="82" cy="20" r="2" fill="#9B6BCE" />
          <line x1="80" y1="20" x2="74" y2="28" stroke="#9B6BCE" strokeWidth="0.5" />
          
          <circle cx="60" cy="100" r="2" fill="#E91E63" />
          <line x1="60" y1="98" x2="60" y2="92" stroke="#E91E63" strokeWidth="0.5" />
        </g>
      </svg>
    </>
  );
};

export default IntegratedIllust;
