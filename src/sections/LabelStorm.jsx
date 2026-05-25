import { useMemo, useState } from "react";
import FlyingLabel from "../components/FlyingLabel";
import MirrorFrame from "../components/MirrorFrame";
import SectionTitle from "../components/SectionTitle";
import { stormLabels } from "../data/labels";

function createStormLabels() {
  return stormLabels.map((item, index) => {
    const layer = index % 4;
    const angle = (Math.PI * 2 * index) / stormLabels.length;
    const radius = 136 + layer * 52;
    const wobble = 22 + layer * 6;

    return {
      id: `${item.text}-${index}`,
      text: item.text,
      tone: item.tone,
      scale: item.scale,
      x: Math.cos(angle) * radius + (Math.random() * wobble - wobble / 2),
      y: Math.sin(angle) * radius + (Math.random() * wobble - wobble / 2),
      rotate: Math.random() * 22 - 11,
      delay: index * 0.05
    };
  });
}

const stormVisual = {
  beamColor: "255,118,118",
  glowColor: "255,93,118",
  particleColors: ["#ffd7dc", "#ff9cae", "#ff6d92", "#ffb06d"],
  echoShift: "30px",
  echoOpacity: 0.34,
  beamOpacity: 0.32,
  gridOpacity: 0.18,
  particleCount: 52
};

export default function LabelStorm({ stream, status }) {
  const [labels, setLabels] = useState([]);
  const [cleared, setCleared] = useState(false);
  const quoteVisible = cleared && labels.length > 0;

  const activeLabels = useMemo(() => labels, [labels]);

  function handleStartStorm() {
    setLabels(createStormLabels());
    setCleared(false);
  }

  function handleClearStorm() {
    setCleared(true);
  }

  return (
    <section id="storm" className="shell storm-section">
      <SectionTitle
        eyebrow="Label Storm"
        title="被命名、被判断、被贴上标签"
        subtitle="这一页不是为了证明标签正确，而是为了把“外界如何覆盖自我经验”这件事压到你面前。"
      />
      <div className="storm-layout">
        <div className="storm-stage">
          <MirrorFrame
            stream={stream}
            status={status}
            badge="External Voice"
            caption="开始标签风暴后，这些判断会直接覆盖到镜像之上，而不是停留在旁白里。"
            visual={stormVisual}
            className={activeLabels.length && !cleared ? "is-under-storm" : ""}
          />
          {activeLabels.length ? (
            <div className="storm-overlay" aria-live="polite">
              {activeLabels.map((label) => (
                <FlyingLabel key={label.id} label={label} cleared={cleared} />
              ))}
            </div>
          ) : null}
        </div>
        <div className="storm-controls">
          <p>
            外界语言有时并不是普通意见，而更像是从四面八方砸下来的命名、规训、怀疑和纠正，
            它们会抢先替你规定什么才算“正常”、什么才像“真正的你”。
          </p>
          <div className="button-row">
            <button type="button" className="primary-button" onClick={handleStartStorm}>
              释放标签风暴
            </button>
            <button type="button" className="ghost-button" onClick={handleClearStorm} disabled={!activeLabels.length}>
              击碎外界命名
            </button>
          </div>
          <div className={`storm-quote ${quoteVisible ? "is-visible" : ""}`}>
            性别认同不是别人贴上的标签，而是一个人对自身性别的持续经验、理解与确认。
          </div>
        </div>
      </div>
    </section>
  );
}
