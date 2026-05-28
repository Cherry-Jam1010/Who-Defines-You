import React from 'react';

const ActivismIllust = () => {
  return (
    <>
      <style>{`
        @keyframes rainbowPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes starRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes starGlow {
          0%, 100% { filter: drop-shadow(0 0 3px rgba(255, 255, 200, 0.5)); transform: scale(1); }
          50% { filter: drop-shadow(0 0 12px rgba(255, 255, 200, 1)); transform: scale(1.1); }
        }
        @keyframes confettiFall1 {
          0% { transform: translateY(-10px) translateX(0px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(130px) translateX(15px) rotate(360deg); opacity: 0; }
        }
        @keyframes confettiFall2 {
          0% { transform: translateY(-10px) translateX(0px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(130px) translateX(-20px) rotate(-360deg); opacity: 0; }
        }
        @keyframes confettiFall3 {
          0% { transform: translateY(-10px) translateX(0px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(130px) translateX(10px) rotate(180deg); opacity: 0; }
        }
        @keyframes confettiFall4 {
          0% { transform: translateY(-10px) translateX(0px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(130px) translateX(-8px) rotate(-180deg); opacity: 0; }
        }
        @keyframes arcShimmer {
          0%, 100% { opacity: 0.75; }
          50% { opacity: 0.95; }
        }
        .rainbow-1 { animation: rainbowPulse 2s ease-in-out infinite; }
        .rainbow-2 { animation: rainbowPulse 2.2s ease-in-out infinite; animation-delay: 0.15s; }
        .rainbow-3 { animation: rainbowPulse 2.4s ease-in-out infinite; animation-delay: 0.3s; }
        .rainbow-4 { animation: rainbowPulse 2.1s ease-in-out infinite; animation-delay: 0.45s; }
        .rainbow-5 { animation: rainbowPulse 2.3s ease-in-out infinite; animation-delay: 0.6s; }
        .rainbow-6 { animation: rainbowPulse 2.5s ease-in-out infinite; animation-delay: 0.75s; }
        .rainbow-7 { animation: rainbowPulse 2.15s ease-in-out infinite; animation-delay: 0.9s; }
        .star-rotate { animation: starRotate 8s linear infinite; transform-origin: center; }
        .star-glow { animation: starGlow 2s ease-in-out infinite; transform-origin: center; }
        .confetti-1 { animation: confettiFall1 4s linear infinite; }
        .confetti-2 { animation: confettiFall2 5s linear infinite; animation-delay: 0.5s; }
        .confetti-3 { animation: confettiFall3 4.5s linear infinite; animation-delay: 1s; }
        .confetti-4 { animation: confettiFall4 5.5s linear infinite; animation-delay: 1.5s; }
        .confetti-5 { animation: confettiFall1 6s linear infinite; animation-delay: 2s; }
        .confetti-6 { animation: confettiFall2 4.2s linear infinite; animation-delay: 2.5s; }
        .confetti-7 { animation: confettiFall3 5.2s linear infinite; animation-delay: 0.3s; }
        .confetti-8 { animation: confettiFall4 4.8s linear infinite; animation-delay: 0.8s; }
        .arc-shimmer { animation: arcShimmer 3s ease-in-out infinite; }
      `}</style>
      <svg viewBox="0 0 120 120" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="activismBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1030" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0f0820" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="redGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF0040" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#CC0033" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#E67800" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#E6C200" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00C853" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#00A844" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2979FF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1565C0" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9C27B0" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#7B1FA2" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E91E63" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#C2185B" stopOpacity="0.85" />
          </linearGradient>
          <filter id="activismGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect width="120" height="120" fill="url(#activismBg)" rx="8" />

        {/* Rainbow Arc - each band separate for independent animation */}
        {/* Red - outermost */}
        <path className="rainbow-1 arc-shimmer" 
              d="M 10 95 Q 10 30 60 20 Q 110 30 110 95" 
              fill="none" stroke="url(#redGrad)" strokeWidth="6" strokeLinecap="round" />
        
        {/* Orange */}
        <path className="rainbow-2 arc-shimmer" 
              d="M 15 95 Q 15 35 60 26 Q 105 35 105 95" 
              fill="none" stroke="url(#orangeGrad)" strokeWidth="6" strokeLinecap="round" />
        
        {/* Yellow */}
        <path className="rainbow-3 arc-shimmer" 
              d="M 20 95 Q 20 40 60 32 Q 100 40 100 95" 
              fill="none" stroke="url(#yellowGrad)" strokeWidth="6" strokeLinecap="round" />
        
        {/* Green */}
        <path className="rainbow-4 arc-shimmer" 
              d="M 25 95 Q 25 45 60 38 Q 95 45 95 95" 
              fill="none" stroke="url(#greenGrad)" strokeWidth="6" strokeLinecap="round" />
        
        {/* Blue */}
        <path className="rainbow-5 arc-shimmer" 
              d="M 30 95 Q 30 50 60 44 Q 90 50 90 95" 
              fill="none" stroke="url(#blueGrad)" strokeWidth="6" strokeLinecap="round" />
        
        {/* Purple */}
        <path className="rainbow-6 arc-shimmer" 
              d="M 35 95 Q 35 55 60 50 Q 85 55 85 95" 
              fill="none" stroke="url(#purpleGrad)" strokeWidth="6" strokeLinecap="round" />
        
        {/* Pink - innermost */}
        <path className="rainbow-7 arc-shimmer" 
              d="M 40 95 Q 40 60 60 56 Q 80 60 80 95" 
              fill="none" stroke="url(#pinkGrad)" strokeWidth="6" strokeLinecap="round" />

        {/* Star at top */}
        <g className="star-glow" style={{ transformOrigin: '60px 16px' }}>
          <g className="star-rotate" style={{ transformOrigin: '60px 16px' }}>
            <polygon 
              points="60,8 62,13 67,13 63,16 65,21 60,18 55,21 57,16 53,13 58,13" 
              fill="#FFFFC0" 
              filter="url(#activismGlow)" 
            />
          </g>
        </g>

        {/* Confetti particles - multiple colors and animation styles */}
        <g>
          {/* Red confetti */}
          <rect className="confetti-1" x="20" y="0" width="4" height="4" fill="#FF0040" rx="0.5" />
          <rect className="confetti-5" x="80" y="0" width="5" height="5" fill="#FF0040" rx="0.5" style={{ animationDelay: '1.2s' }} />
          
          {/* Orange confetti */}
          <circle className="confetti-2" cx="35" cy="0" r="2.5" fill="#FF8C00" />
          <rect className="confetti-6" x="90" y="0" width="4" height="4" fill="#FF8C00" rx="0.5" style={{ animationDelay: '2.8s' }} />
          
          {/* Yellow confetti */}
          <polygon className="confetti-3" points="45,0 47,3 45,6 43,3" fill="#FFD700" />
          <circle className="confetti-7" cx="70" cy="0" r="2" fill="#FFD700" style={{ animationDelay: '1.8s' }} />
          
          {/* Green confetti */}
          <rect className="confetti-4" x="55" y="0" width="3" height="5" fill="#00C853" rx="0.5" />
          <polygon className="confetti-8" points="100,0 102,3 100,6 98,3" fill="#00C853" style={{ animationDelay: '2.3s' }} />
          
          {/* Blue confetti */}
          <circle className="confetti-1" cx="25" cy="0" r="3" fill="#2979FF" style={{ animationDelay: '0.7s' }} />
          <rect className="confetti-5" x="65" y="0" width="4" height="4" fill="#2979FF" rx="0.5" style={{ animationDelay: '3s' }} />
          
          {/* Purple confetti */}
          <polygon className="confetti-2" points="50,0 52,3 50,6 48,3" fill="#9C27B0" style={{ animationDelay: '1.5s' }} />
          <circle className="confetti-6" cx="95" cy="0" r="2.5" fill="#9C27B0" style={{ animationDelay: '0.2s' }} />
          
          {/* Pink confetti */}
          <rect className="confetti-3" x="30" y="0" width="5" height="3" fill="#E91E63" rx="0.5" style={{ animationDelay: '2.5s' }} />
          <polygon className="confetti-7" points="85,0 87,3 85,6 83,3" fill="#E91E63" style={{ animationDelay: '0.9s' }} />
          
          {/* White/sparkle confetti */}
          <circle className="confetti-4" cx="15" cy="0" r="1.5" fill="#FFFFFF" style={{ animationDelay: '1.1s' }} />
          <circle className="confetti-8" cx="105" cy="0" r="2" fill="#FFFFFF" style={{ animationDelay: '2.1s' }} />
          <rect className="confetti-1" x="40" y="0" width="2" height="2" fill="#FFFFFF" rx="0.3" style={{ animationDelay: '3.5s' }} />
          <rect className="confetti-2" x="75" y="0" width="3" height="3" fill="#FFFFFF" rx="0.3" style={{ animationDelay: '0.4s' }} />
        </g>

        {/* Ground reflection/subtle glow */}
        <ellipse cx="60" cy="105" rx="45" ry="8" fill="#FF0040" opacity="0.1" filter="url(#activismGlow)" />
        <ellipse cx="60" cy="105" rx="35" ry="5" fill="#9C27B0" opacity="0.08" />
      </svg>
    </>
  );
};

export default ActivismIllust;
