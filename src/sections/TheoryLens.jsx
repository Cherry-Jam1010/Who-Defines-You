import { useMemo, useState } from "react";
import MirrorFrame from "../components/MirrorFrame";
import SectionTitle from "../components/SectionTitle";
import TheorySwitcher from "../components/TheorySwitcher";
import { theoryLenses } from "../data/theoryLenses";

function IntegrationDiagram({ activeTheory }) {
  return (
    <div className={`integration-diagram theory-${activeTheory.id}`}>
      <div className="ring ring-one">
        <span>生物</span>
      </div>
      <div className="ring ring-two">
        <span>心理</span>
      </div>
      <div className="ring ring-three">
        <span>社会</span>
      </div>
      <div className="diagram-core">Gender Identity</div>
    </div>
  );
}

const theoryVisuals = {
  bio: {
    beamColor: "180,214,255",
    glowColor: "122,154,255",
    particleColors: ["#e9f3ff", "#9ccfff", "#7b90ff"],
    echoShift: "12px",
    echoOpacity: 0.16,
    beamOpacity: 0.16,
    gridOpacity: 0.08,
    particleCount: 28
  },
  social: {
    beamColor: "122,228,255",
    glowColor: "59,182,227",
    particleColors: ["#d2fbff", "#82d2ff", "#49b9ed"],
    echoShift: "18px",
    echoOpacity: 0.22,
    beamOpacity: 0.2,
    gridOpacity: 0.12,
    particleCount: 34
  },
  integrated: {
    beamColor: "180,158,255",
    glowColor: "139,123,255",
    particleColors: ["#f0e7ff", "#b9b3ff", "#8588ff"],
    echoShift: "26px",
    echoOpacity: 0.3,
    beamOpacity: 0.24,
    gridOpacity: 0.15,
    particleCount: 38
  }
};

const theoryFilters = {
  bio: "contrast(1.16) saturate(0.76) hue-rotate(-10deg)",
  social: "contrast(1.08) saturate(1.08) hue-rotate(12deg)",
  integrated: "contrast(1.12) saturate(1.2) brightness(1.04)"
};

export default function TheoryLens({ stream, status }) {
  const [activeId, setActiveId] = useState(theoryLenses[2].id);
  const activeTheory = useMemo(
    () => theoryLenses.find((item) => item.id === activeId) ?? theoryLenses[2],
    [activeId]
  );

  return (
    <section id="theory" className="shell theory-section">
      <SectionTitle
        eyebrow="Causes Of Gender Identity"
        title="理论之镜"
        subtitle="不同解释路径都试图回答同一个问题：性别认同究竟是如何形成的？"
      />
      <TheorySwitcher theories={theoryLenses} activeId={activeTheory.id} onChange={setActiveId} />
      <div className="theory-grid">
        <div className="theory-panel">
          <span className="recommend-tag">
            {activeTheory.id === "integrated" ? "Recommended Perspective" : "Perspective"}
          </span>
          <h3>{activeTheory.title}</h3>
          <p className="theory-tagline">{activeTheory.tagline}</p>
          <p>{activeTheory.description}</p>
          <p className="theory-caution">{activeTheory.caution}</p>
          <ul className="keyword-list">
            {activeTheory.keywords.map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        </div>
        <div className="theory-visual">
          <MirrorFrame
            stream={stream}
            status={status}
            filter={theoryFilters[activeTheory.id]}
            keywords={activeTheory.keywords}
            accent={activeTheory.id === "integrated" ? "var(--accent-violet)" : "var(--accent-cyan)"}
            badge={activeTheory.id === "integrated" ? "Final Lens" : "Lens Shift"}
            caption="整合解释并不是模糊问题，而是拒绝用单一原因覆盖复杂经验。"
            visual={theoryVisuals[activeTheory.id]}
          />
          <IntegrationDiagram activeTheory={activeTheory} />
        </div>
      </div>
    </section>
  );
}
