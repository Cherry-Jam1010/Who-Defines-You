import { useEffect, useRef } from "react";

const DEFAULT_COLORS = ["#82d2ff", "#8c96ff", "#cce0ff", "#d9bb91"];

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

export default function ParticleField({
  className = "",
  count = 30,
  colors = DEFAULT_COLORS,
  connectionDistance = 90,
  mouseInfluence = 120,
  speedFactor = 1,
  lineDistance = 140
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -2000, y: -2000, active: false });
  const frameRef = useRef(null);
  const frameCountRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const host = canvas.parentElement || document.body;
    let running = true;

    function resize() {
      const ratio = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = Math.floor(w * ratio);
      canvas.height = Math.floor(h * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function createParticle() {
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3 * speedFactor,
        vy: (Math.random() - 0.5) * 0.3 * speedFactor,
        radius: Math.random() * 1.8 + 0.8,
        color,
        rgb: hexToRgb(color),
        alpha: Math.random() * 0.5 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: (Math.random() * 0.012 + 0.006) * speedFactor
      };
    }

    function init() {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    }

    resize();
    init();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    }

    function onLeave() {
      mouseRef.current = { x: -2000, y: -2000, active: false };
    }

    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave);

    function draw() {
      if (!running) return;
      frameCountRef.current++;

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Only run expensive logic every 2 frames
      const skipFrame = frameCountRef.current % 2 !== 0;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulsePhase += p.pulseSpeed;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const nearMouse = mouseRef.current.active && dist < mouseInfluence;
        const pulse = 0.5 + 0.5 * Math.sin(p.pulsePhase);
        const glowBoost = nearMouse ? 1 - dist / mouseInfluence : 0;
        const finalAlpha = Math.min(1, p.alpha + glowBoost * 0.4);
        const finalRadius = p.radius * (1 + glowBoost * 0.8 + pulse * 0.15);

        if (nearMouse) {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, finalRadius * 5);
          grad.addColorStop(0, `rgba(${p.rgb.r},${p.rgb.g},${p.rgb.b},${0.2 * glowBoost})`);
          grad.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(p.x, p.y, finalRadius * 5, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, finalRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.rgb.r},${p.rgb.g},${p.rgb.b},${finalAlpha})`;
        ctx.fill();
      }

      // Draw connections every 3 frames to save CPU
      if (!skipFrame) {
        ctx.globalAlpha = 0.18;
        ctx.lineWidth = 0.6;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          // Only check next 12 neighbors (spatial approximation)
          for (let j = i + 1; j < Math.min(i + 12, particles.length); j++) {
            const q = particles[j];
            const dx = p.x - q.x;
            const dy = p.y - q.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < lineDistance) {
              const strength = 1 - d / lineDistance;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = `rgba(${Math.round((p.rgb.r + q.rgb.r) / 2)},${Math.round((p.rgb.g + q.rgb.g) / 2)},${Math.round((p.rgb.b + q.rgb.b) / 2)},${strength})`;
              ctx.stroke();
            }
          }
        }
        ctx.globalAlpha = 1;
      }

      frameRef.current = requestAnimationFrame(draw);
    }

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, [colors, count, lineDistance, mouseInfluence, speedFactor]);

  return <canvas ref={canvasRef} className={`particle-field${className ? ` ${className}` : ""}`} />;
}
