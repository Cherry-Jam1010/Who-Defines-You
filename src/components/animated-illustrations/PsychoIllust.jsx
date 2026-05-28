import React from 'react';

const PsychoIllust = () => {
  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; stroke-width: 1; }
          50% { opacity: 0.8; stroke-width: 2; }
        }
        @keyframes synapseBlink {
          0%, 100% { opacity: 0.3; r: 2.5; }
          30%, 70% { opacity: 1; r: 3.5; }
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 3px rgba(138, 100, 200, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(138, 100, 200, 0.8)); }
        }
        @keyframes pathTrace {
          0% { stroke-dashoffset: 100; opacity: 0.2; }
          50% { opacity: 0.9; }
          100% { stroke-dashoffset: 0; opacity: 0.5; }
        }
        @keyframes centerPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes floatNeural {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        .path-pulse { animation: pulse 3s ease-in-out infinite; }
        .path-pulse-2 { animation: pulse 3.5s ease-in-out infinite; animation-delay: 0.5s; }
        .path-pulse-3 { animation: pulse 2.8s ease-in-out infinite; animation-delay: 1s; }
        .synapse-1 { animation: synapseBlink 2s ease-in-out infinite; }
        .synapse-2 { animation: synapseBlink 2.3s ease-in-out infinite; animation-delay: 0.3s; }
        .synapse-3 { animation: synapseBlink 1.8s ease-in-out infinite; animation-delay: 0.6s; }
        .synapse-4 { animation: synapseBlink 2.5s ease-in-out infinite; animation-delay: 0.9s; }
        .synapse-5 { animation: synapseBlink 2.1s ease-in-out infinite; animation-delay: 1.2s; }
        .brain-glow { animation: glowPulse 4s ease-in-out infinite; }
        .center-pulse { animation: centerPulse 2s ease-in-out infinite; transform-origin: center; }
        .float-neural { animation: floatNeural 5s ease-in-out infinite; }
      `}</style>
      <svg viewBox="0 0 120 120" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="psychoBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1030" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0f0820" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9B6BCE" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#7B4BB0" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#5A3090" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="synapseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#8A64C8" stopOpacity="0.8" />
          </linearGradient>
          <filter id="synapseGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect width="120" height="120" fill="url(#psychoBg)" rx="8" />

        <g className="float-neural">
          {/* Brain Outline */}
          <g className="brain-glow">
            {/* Left hemisphere */}
            <path d="M 35 55 
                     Q 28 45 32 35 
                     Q 38 25 50 28 
                     Q 55 30 55 38
                     Q 52 32 48 30
                     Q 42 28 40 38
                     Q 38 45 42 50
                     Q 38 55 40 62
                     Q 38 70 45 75
                     Q 52 78 58 72
                     Q 55 80 60 85
                     L 60 55
                     Q 50 50 35 55" 
                  fill="url(#brainGrad)" opacity="0.7" />
            
            {/* Right hemisphere */}
            <path d="M 85 55 
                     Q 92 45 88 35 
                     Q 82 25 70 28 
                     Q 65 30 65 38
                     Q 68 32 72 30
                     Q 78 28 80 38
                     Q 82 45 78 50
                     Q 82 55 80 62
                     Q 82 70 75 75
                     Q 68 78 62 72
                     Q 65 80 60 85
                     L 60 55
                     Q 70 50 85 55" 
                  fill="url(#brainGrad)" opacity="0.7" />
            
            {/* Central division */}
            <line x1="60" y1="28" x2="60" y2="72" stroke="#1a1030" strokeWidth="2" opacity="0.3" />
            
            {/* Brain folds */}
            <path d="M 40 40 Q 45 45 42 52" stroke="#B88AE0" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M 48 35 Q 50 42 47 48" stroke="#B88AE0" strokeWidth="1" fill="none" opacity="0.3" />
            <path d="M 72 40 Q 75 45 72 52" stroke="#B88AE0" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M 80 35 Q 78 42 75 48" stroke="#B88AE0" strokeWidth="1" fill="none" opacity="0.3" />
          </g>

          {/* Neural Pathway Lines */}
          <g filter="url(#synapseGlow)">
            <path className="path-pulse" d="M 45 45 Q 50 55 60 58 Q 70 61 78 50" stroke="#00D4FF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path className="path-pulse-2" d="M 38 55 Q 48 60 60 62 Q 72 64 82 58" stroke="#8A64C8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path className="path-pulse-3" d="M 50 35 Q 55 45 60 50 Q 65 55 70 40" stroke="#00D4FF" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <path className="path-pulse" d="M 35 65 Q 45 68 60 70 Q 75 72 85 65" stroke="#B088D0" strokeWidth="1.2" fill="none" strokeLinecap="round" style={{ animationDelay: '0.8s' }} />
            <path className="path-pulse-2" d="M 55 70 Q 58 75 60 82" stroke="#8A64C8" strokeWidth="1" fill="none" strokeLinecap="round" />
            <path className="path-pulse-3" d="M 40 48 Q 48 52 55 58" stroke="#00D4FF" strokeWidth="1" fill="none" strokeLinecap="round" style={{ animationDelay: '1.2s' }} />
            <path className="path-pulse" d="M 65 58 Q 72 52 80 48" stroke="#B088D0" strokeWidth="1" fill="none" strokeLinecap="round" style={{ animationDelay: '1.5s' }} />
          </g>

          {/* Synaptic Dots */}
          <g filter="url(#synapseGlow)">
            <circle className="synapse-1" cx="45" cy="45" r="2.5" fill="#00D4FF" />
            <circle className="synapse-2" cx="78" cy="50" r="2.5" fill="#B088D0" />
            <circle className="synapse-3" cx="38" cy="55" r="2.5" fill="#8A64C8" />
            <circle className="synapse-4" cx="82" cy="58" r="2.5" fill="#00D4FF" />
            <circle className="synapse-5" cx="50" cy="35" r="2.5" fill="#B088D0" />
            <circle className="synapse-1" cx="70" cy="40" r="2" fill="#8A64C8" style={{ animationDelay: '1.8s' }} />
            <circle className="synapse-2" cx="35" cy="65" r="2" fill="#00D4FF" style={{ animationDelay: '0.4s' }} />
            <circle className="synapse-3" cx="85" cy="65" r="2" fill="#B088D0" style={{ animationDelay: '1.1s' }} />
            <circle className="synapse-4" cx="60" cy="82" r="2.5" fill="#8A64C8" style={{ animationDelay: '0.7s' }} />
            <circle className="synapse-5" cx="60" cy="58" r="3" fill="#00D4FF" style={{ animationDelay: '0.2s' }} />
          </g>
        </g>

        {/* Pulsing Center Point */}
        <g className="center-pulse" style={{ transformOrigin: '60px 58px' }}>
          <circle cx="60" cy="58" r="6" fill="#00D4FF" opacity="0.4" filter="url(#synapseGlow)" />
          <circle cx="60" cy="58" r="3" fill="#FFFFFF" opacity="0.6" />
          <circle cx="60" cy="58" r="1.5" fill="#00D4FF" />
        </g>

        {/* Outer energy rings */}
        <circle cx="60" cy="55" r="35" fill="none" stroke="#8A64C8" strokeWidth="0.5" opacity="0.2" className="path-pulse" />
        <circle cx="60" cy="55" r="42" fill="none" stroke="#00D4FF" strokeWidth="0.3" opacity="0.15" className="path-pulse-2" />
      </svg>
    </>
  );
};

export default PsychoIllust;
