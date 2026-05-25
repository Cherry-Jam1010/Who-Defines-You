import { useEffect, useRef } from "react";

const DEFAULT_COLORS = ["#82d2ff", "#8c96ff", "#cce0ff", "#d9bb91"];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

export default function ParticleField({
  className = "",
  count = 90,
  colors = DEFAULT_COLORS,
  connectionDistance = 140,
  mouseInfluence = 180,
  speedFactor = 1
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -2000, y: -2000, active: false });
  const frameRef = useRef(null);
  const burstsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let host = canvas.parentElement;

    function resize() {
      const ratio = window.devicePixelRatio || 1;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function createParticle(px, py, burst = false) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: px ?? randomBetween(0, canvas.offsetWidth),
        y: py ?? randomBetween(0, canvas.offsetHeight),
        vx: burst ? randomBetween(-1.3, 1.3) : randomBetween(-0.22, 0.22) * speedFactor,
        vy: burst ? randomBetween(-1.3, 1.3) : randomBetween(-0.22, 0.22) * speedFactor,
        radius: burst ? randomBetween(1.6, 3.8) : randomBetween(1.2, 3.2),
        color,
        rgb: hexToRgb(color),
        alpha: randomBetween(0.28, 0.84),
        pulsePhase: randomBetween(0, Math.PI * 2),
        pulseSpeed: randomBetween(0.008, 0.018) * speedFactor,
        life: burst ? randomBetween(40, 80) : null
      };
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    }

    function spawnBurst(x, y) {
      const burst = [];
      for (let i = 0; i < 18; i++) {
        burst.push(createParticle(x, y, true));
      }
      burstsRef.current.push(burst);
      burstsRef.current = burstsRef.current.slice(-6);
    }

    resize();
    initParticles();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function updatePointer(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    }

    function onPointerLeave() {
      mouseRef.current = { x: -2000, y: -2000, active: false };
    }

    function onPointerDown(e) {
      updatePointer(e);
      spawnBurst(mouseRef.current.x, mouseRef.current.y);
    }

    host.addEventListener("pointermove", updatePointer);
    host.addEventListener("pointerleave", onPointerLeave);
    host.addEventListener("pointerdown", onPointerDown);

    let t = 0;

    function drawParticle(p) {
      const dx = p.x - mouseRef.current.x;
      const dy = p.y - mouseRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const nearMouse = mouseRef.current.active && dist < mouseInfluence;

      const pulse = 0.5 + 0.5 * Math.sin(p.pulsePhase);
      const glowBoost = nearMouse ? 1 - dist / mouseInfluence : 0;
      const finalAlpha = Math.min(1, p.alpha + glowBoost * 0.52);
      const finalRadius = p.radius * (1 + glowBoost * 1.2 + pulse * 0.24);

      if (nearMouse) {
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, finalRadius * 6);
        grad.addColorStop(0, `rgba(${p.rgb.r},${p.rgb.g},${p.rgb.b},${0.24 * glowBoost})`);
        grad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(p.x, p.y, finalRadius * 6, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, finalRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.rgb.r},${p.rgb.g},${p.rgb.b},${finalAlpha})`;
      ctx.fill();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      t += 1;

      for (const p of particles) {
        p.x += p.vx + Math.sin(t * 0.003 + p.pulsePhase) * 0.12 * speedFactor;
        p.y += p.vy + Math.cos(t * 0.003 + p.pulsePhase) * 0.08 * speedFactor;
        p.pulsePhase += p.pulseSpeed;

        if (p.x < -20) p.x = canvas.offsetWidth + 20;
        if (p.x > canvas.offsetWidth + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.offsetHeight + 20;
        if (p.y > canvas.offsetHeight + 20) p.y = -20;

        drawParticle(p);
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pi = particles[i];
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const mx = (pi.x + pj.x) / 2;
            const my = (pi.y + pj.y) / 2;
            const mouseDx = mx - mouseRef.current.x;
            const mouseDy = my - mouseRef.current.y;
            const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
            const mouseBoost =
              mouseRef.current.active && mouseDist < mouseInfluence ? 1 - mouseDist / mouseInfluence : 0;

            const strength = (1 - dist / connectionDistance) * (0.1 + mouseBoost * 0.34);
            const alpha = Math.min(1, strength + mouseBoost * 0.3);

            const grad = ctx.createLinearGradient(pi.x, pi.y, pj.x, pj.y);
            grad.addColorStop(0, `rgba(${pi.rgb.r},${pi.rgb.g},${pi.rgb.b},${alpha})`);
            grad.addColorStop(1, `rgba(${pj.rgb.r},${pj.rgb.g},${pj.rgb.b},${alpha})`);

            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = mouseBoost > 0.08 ? 1.4 : 0.7;
            ctx.stroke();
          }
        }
      }

      burstsRef.current = burstsRef.current
        .map((burst) =>
          burst
            .map((p) => {
              p.x += p.vx;
              p.y += p.vy;
              p.vx *= 0.985;
              p.vy *= 0.985;
              p.life -= 1;
              p.alpha *= 0.985;
              drawParticle(p);
              return p;
            })
            .filter((p) => p.life > 0)
        )
        .filter((burst) => burst.length > 0);

      frameRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
      host.removeEventListener("pointermove", updatePointer);
      host.removeEventListener("pointerleave", onPointerLeave);
      host.removeEventListener("pointerdown", onPointerDown);
    };
  }, [colors, connectionDistance, count, mouseInfluence, speedFactor]);

  return <canvas ref={canvasRef} className={`particle-field${className ? ` ${className}` : ""}`} />;
}
