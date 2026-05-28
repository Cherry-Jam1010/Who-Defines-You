import { useMemo, useState } from "react";
import FlyingLabel from "../components/FlyingLabel";
import MirrorFrame from "../components/MirrorFrame";
import { noiseLabels } from "../data/noiseLabels";

function createNoiseLabels() {
  return noiseLabels.map((item, index) => {
    const layer = index % 3;
    const angle = (Math.PI * 2 * index) / noiseLabels.length;
    const radius = 130 + layer * 54;
    const wobble = 20 + layer * 8;
    return {
      id: `${item.text}-${index}`,
      text: item.text,
      tone: item.tone,
      scale: item.scale,
      x: Math.cos(angle) * radius + (Math.random() * wobble - wobble / 2),
      y: Math.sin(angle) * radius + (Math.random() * wobble - wobble / 2),
      rotate: Math.random() * 18 - 9,
      delay: index * 0.04
    };
  });
}

const noiseVisual = {
  beamColor: "255,118,118",
  glowColor: "255,93,118",
  particleColors: ["#ffd7dc", "#ff9cae", "#ff6d92", "#ffb06d"],
  echoShift: "30px",
  echoOpacity: 0.34,
  beamOpacity: 0.32,
  gridOpacity: 0.18,
  particleCount: 52
};

export default function ExternalNoise({ stream, status, onBroken }) {
  const [labels, setLabels] = useState([]);
  const [cleared, setCleared] = useState(false);
  const [brokenShown, setBrokenShown] = useState(false);

  function handleStartNoise() {
    setLabels(createNoiseLabels());
    setCleared(false);
    setBrokenShown(false);
  }

  function handleBreak() {
    setCleared(true);
    if (!brokenShown) {
      setBrokenShown(true);
      setTimeout(() => onBroken?.(), 800);
    }
  }

  return (
    <section id="noise" className="noise-section shell">
      <div className="noise-stage">
        <MirrorFrame
          stream={stream}
          status={status}
          badge="外界的声音"
          visual={noiseVisual}
          className={labels.length && !cleared ? "is-under-noise" : ""}
        />
        {labels.length ? (
          <div className="noise-overlay" aria-live="polite">
            {labels.map((label) => (
              <FlyingLabel key={label.id} label={label} cleared={cleared} />
            ))}
          </div>
        ) : null}
      </div>
      <div className="noise-controls">
        {!labels.length ? (
          <p className="noise-prompt">这些声音，你熟悉吗？</p>
        ) : null}
        <div className="button-row">
          {!labels.length && (
            <button type="button" className="primary-button" onClick={handleStartNoise}>
              听到噪音
            </button>
          )}
          {labels.length > 0 && !cleared && (
            <button type="button" className="ghost-button" onClick={handleBreak}>
              打破它
            </button>
          )}
          {cleared && !labels.length && (
            <button type="button" className="ghost-button" onClick={handleStartNoise}>
              再来一次
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
