import { useEffect, useRef, useState } from "react";
import FlyingLabel from "../components/FlyingLabel";
import MirrorIllust from "../components/illustrations/MirrorIllust";
import { noiseLabels } from "../data/noiseLabels";

function createNoiseLabels() {
  return noiseLabels.map((item, index) => {
    const layer = index % 3;
    const angle = (Math.PI * 2 * index) / noiseLabels.length;
    const radius = 100 + layer * 44;
    const wobble = 16 + layer * 6;
    return {
      id: `${item.text}-${index}`,
      text: item.text,
      tone: item.tone,
      scale: item.scale,
      x: Math.cos(angle) * radius + (Math.random() * wobble - wobble / 2),
      y: Math.sin(angle) * radius + (Math.random() * wobble - wobble / 2),
      rotate: Math.random() * 14 - 7,
      delay: index * 0.04
    };
  });
}

export default function Experience({ stream, status, onBroken }) {
  const [labels, setLabels] = useState([]);
  const [cleared, setCleared] = useState(false);
  const [phase, setPhase] = useState("idle"); // idle | noisy | broken
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
      videoRef.current.play().catch(() => {});
    }
  }, [stream]);

  function startNoise() {
    setLabels(createNoiseLabels());
    setCleared(false);
    setPhase("noisy");
  }

  function breakNoise() {
    setCleared(true);
    setPhase("broken");
    setTimeout(() => {
      onBroken?.();
    }, 1200);
  }

  return (
    <section id="experience" className="experience-section">
      {/* Title bar */}
      <div className="experience-header">
        <span className="experience-title">你，被谁定义？</span>
        <span className="experience-subtitle">Who Defines You?</span>
      </div>

      {/* Mirror + labels */}
      <div className="experience-stage">
        {/* Camera or placeholder */}
        <div className="experience-mirror">
          {stream ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="experience-video"
            />
          ) : (
            <div className="experience-placeholder">
              <MirrorIllust />
              <p>正在获取摄像头……</p>
            </div>
          )}
          <div className="experience-breathe" />

          {/* Labels overlay */}
          {labels.length > 0 && (
            <div className="experience-labels" aria-live="polite">
              {labels.map((label) => (
                <FlyingLabel
                  key={label.id}
                  label={label}
                  cleared={cleared}
                />
              ))}
            </div>
          )}
        </div>

        {/* Controls below mirror */}
        <div className="experience-controls">
          {phase === "idle" && (
            <button
              type="button"
              className="exp-button exp-primary"
              onClick={startNoise}
            >
              听到噪音
            </button>
          )}
          {phase === "noisy" && !cleared && (
            <button
              type="button"
              className="exp-button exp-ghost"
              onClick={breakNoise}
            >
              打破它
            </button>
          )}
          {phase === "broken" && (
            <button
              type="button"
              className="exp-button exp-ghost"
              onClick={startNoise}
            >
              再来一次
            </button>
          )}
        </div>
      </div>

      {/* After breaking — quiet prose */}
      {phase === "broken" && (
        <div className="experience-prose">
          <p className="prose-main">
            那些声音散去之后，
            <br />
            镜子里的那个人，
            <br />
            是谁？
          </p>
          <p className="prose-sub">
            不是任何人的期待。
            <br />
            不是标签，也不是反标签。
            <br />
            只是你。
          </p>
        </div>
      )}

      <div className="experience-hint">
        {phase === "idle" && <span>这些声音，你熟悉吗？</span>}
        {phase === "noisy" && !cleared && <span>它们从四面八方来。</span>}
        {phase === "broken" && <span>往下继续。</span>}
      </div>
    </section>
  );
}
