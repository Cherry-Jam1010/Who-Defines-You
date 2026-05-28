import { useState } from "react";
import { theoriesData } from "../data/theoriesData";
import BioPsychoSocialIllust from "../components/illustrations/BioPsychoSocialIllust";

function TheoryCard({ theory, active, onActivate }) {
  return (
    <div
      className={`theory-card ${active ? "theory-active" : ""}`}
      style={{ "--theory-color": theory.color }}
      onClick={() => onActivate(active ? null : theory.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onActivate(active ? null : theory.id)}
      aria-expanded={active}
    >
      <div className="theory-card-header">
        <div className="theory-icon-wrap">
          <span className="theory-icon">{theory.icon}</span>
        </div>
        <div className="theory-meta">
          <span className="theory-name">{theory.name}</span>
          <span className="theory-tagline">{theory.tagline}</span>
        </div>
        <div className="theory-chevron">{active ? "▲" : "▼"}</div>
      </div>

      {active && (
        <div className="theory-card-body">
          <p className="theory-desc">{theory.description}</p>
          <div className="theory-evidence-wrap">
            <p className="theory-evidence-label">支持证据</p>
            <p className="theory-evidence">{theory.evidence}</p>
          </div>
          <div className="theory-caution-wrap">
            <p className="theory-caution-label">需要注意</p>
            <p className="theory-caution">{theory.caution}</p>
          </div>
          <div className="theory-keywords">
            {theory.keywords.map((k) => (
              <span key={k} className="theory-kw">{k}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TheoryExploration({ visible }) {
  const [activeId, setActiveId] = useState(null);
  const activeTheory = theoriesData.find((t) => t.id === activeId) ?? theoriesData[theoriesData.length - 1];

  return (
    <section id="theory" className={`theory-section shell ${visible ? "theory-visible" : ""}`}>
      <div className="theory-header">
        <p className="theory-eyebrow">Theories of Gender Identity</p>
        <h2 className="theory-title">理解性别认同的不同路径</h2>
        <p className="theory-subtitle">
          每一种理论都抓住了某种真实，也忽略了某种真实。
          <br />
          点击任意卡片，了解它们的视角、证据与局限。
        </p>
      </div>

      <div className="theory-cards">
        {theoriesData.map((theory) => (
          <TheoryCard
            key={theory.id}
            theory={theory}
            active={activeId === theory.id}
            onActivate={setActiveId}
          />
        ))}
      </div>

      <div className="theory-integrated-note">
        <div className="theory-integrated-body">
          <div className="theory-integrated-text">
            <div className="theory-integrated-line" />
            <p>
              <strong>当代主流立场</strong>：没有单一理论能够完整解释性别认同。
              <br />
              APA（2015）、WPATH SOC-8（2022）和大多数临床指南采用整合视角——
              承认生物因素的基础性，也承认社会环境对心理健康的关键影响。
              <br />
              <span className="theory-integrated-emphasis">
                「肯定性的环境与支持」是跨性别青少年心理健康最有力的保护因素——
                这一结论在研究中高度一致。
              </span>
            </p>
          </div>
          <div className="theory-integrated-illust">
            <BioPsychoSocialIllust />
          </div>
        </div>
      </div>
    </section>
  );
}
