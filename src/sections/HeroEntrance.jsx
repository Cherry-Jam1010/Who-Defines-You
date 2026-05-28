import ParticleField from "../components/ParticleField";

export default function HeroEntrance({ onOpenMirror }) {
  return (
    <section id="entrance" className="entrance-section">
      <div className="entrance-glow" />
      <div className="entrance-content">
        <h1 className="entrance-title">
          你，被谁定义？
          <span>Who Defines You?</span>
        </h1>
        <p className="entrance-invitation">先看看自己。</p>
        <button
          type="button"
          className="entrance-button"
          onClick={onOpenMirror}
        >
          允许我看到你
        </button>
        <p className="entrance-privacy">
          视频只在本地运行，不会上传到任何地方。
        </p>
      </div>
      <div className="entrance-particles">
        <ParticleField count={60} speedFactor={0.6} />
      </div>
    </section>
  );
}
