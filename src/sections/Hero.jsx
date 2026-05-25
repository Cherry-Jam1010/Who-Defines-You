import ParticleField from "../components/ParticleField";

export default function Hero({ onOpenMirror }) {
  return (
    <section id="hero" className="hero-section shell">
      <div className="hero-copy">
        <span className="eyebrow">Interactive Psychology Narrative</span>
        <h1>
          你，被谁定义？
          <span>Who Defines You?</span>
        </h1>
        <p>
          性别不仅是身体，也是角色、语言、认同与社会关系中的自我经验。
          这不是一张静态海报，而是一面会把“外界命名”压到你眼前的镜子。
        </p>
        <div className="button-row">
          <button type="button" className="primary-button" onClick={onOpenMirror}>
            打开镜像现场
          </button>
        </div>
      </div>
      <div className="hero-orbit">
        <ParticleField count={120} speedFactor={1.12} />
        <div className="hero-mirror-preview">
          <div className="hero-core" />
          <span>身体</span>
          <span>角色</span>
          <span>文化</span>
          <span>认同</span>
        </div>
      </div>
    </section>
  );
}
