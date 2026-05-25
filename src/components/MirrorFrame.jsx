import { useEffect, useRef } from "react";
import KeywordOverlay from "./KeywordOverlay";
import ParticleField from "./ParticleField";

function MirrorVideo({ stream, filter, themeClass }) {
  const baseRef = useRef(null);
  const echoRef = useRef(null);

  useEffect(() => {
    const nodes = [baseRef.current, echoRef.current].filter(Boolean);

    if (!nodes.length) {
      return;
    }

    nodes.forEach((node) => {
      if (stream) {
        node.srcObject = stream;
        node.play().catch(() => {});
      } else {
        node.srcObject = null;
      }
    });
  }, [stream]);

  return (
    <div className={`mirror-video-stack ${themeClass}`}>
      <video
        ref={echoRef}
        autoPlay
        muted
        playsInline
        className="mirror-video mirror-video-ghost"
        style={{ filter }}
      />
      <video
        ref={baseRef}
        autoPlay
        muted
        playsInline
        className="mirror-video mirror-video-main"
        style={{ filter }}
      />
    </div>
  );
}

function PlaceholderSurface({ status }) {
  return (
    <div className="placeholder-surface">
      <div className="placeholder-silhouette" />
      <div className="placeholder-copy">
        <strong>{status === "unsupported" ? "摄像头不可用" : "本地占位镜像"}</strong>
        <span>
          {status === "unsupported"
            ? "当前环境不支持 getUserMedia，但你仍然可以完整浏览页面。"
            : "这里显示的是本地占位层。无论是否开启摄像头，视频都不会被上传到任何服务器。"}
        </span>
      </div>
    </div>
  );
}

export default function MirrorFrame({
  stream,
  status,
  filter = "none",
  keywords = [],
  accent = "var(--accent-ice)",
  caption,
  badge,
  visual = {},
  className = ""
}) {
  const showVideo = Boolean(stream);
  const themeClass = visual.themeClass ?? "";

  return (
    <div className={`mirror-shell ${className}`.trim()}>
      {badge ? <span className="mirror-badge">{badge}</span> : null}
      <div
        className="mirror-frame"
        style={{
          "--beam-color": visual.beamColor ?? "130,210,255",
          "--glow-color": visual.glowColor ?? "122,154,255",
          "--noise-opacity": visual.noiseOpacity ?? 0.2,
          "--beam-opacity": visual.beamOpacity ?? 0.18,
          "--echo-opacity": visual.echoOpacity ?? 0.22,
          "--echo-shift": visual.echoShift ?? "14px",
          "--grid-opacity": visual.gridOpacity ?? 0.12
        }}
      >
        <div className="mirror-bezel" />
        <div className="mirror-glare" />
        <div className="mirror-scanlines" />
        <div className="mirror-noise" />
        <div className="mirror-beam" />
        <div className="mirror-content">
          {showVideo ? <MirrorVideo stream={stream} filter={filter} themeClass={themeClass} /> : <PlaceholderSurface status={status} />}
          <ParticleField
            className="mirror-particles"
            count={visual.particleCount ?? 24}
            colors={visual.particleColors}
            connectionDistance={110}
            mouseInfluence={140}
            speedFactor={0.8}
          />
          <KeywordOverlay keywords={keywords} accent={accent} />
        </div>
      </div>
      {caption ? <p className="mirror-caption">{caption}</p> : null}
    </div>
  );
}
