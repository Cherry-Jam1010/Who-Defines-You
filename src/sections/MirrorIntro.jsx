import MirrorFrame from "../components/MirrorFrame";
import SectionTitle from "../components/SectionTitle";

const introVisual = {
  beamColor: "133,211,255",
  glowColor: "90,144,255",
  particleColors: ["#cfe8ff", "#82d2ff", "#8c96ff"],
  echoShift: "18px",
  echoOpacity: 0.22,
  beamOpacity: 0.2,
  gridOpacity: 0.12,
  particleCount: 34
};

export default function MirrorIntro({ stream, status, error, onRequestCamera, onStopCamera }) {
  const isLive = status === "granted" && Boolean(stream);

  return (
    <section id="mirror" className="shell section-grid">
      <div className="section-copy">
        <SectionTitle
          eyebrow="Camera Mirror"
          title="镜子先照见身体，也照见“被观看”这件事"
          subtitle="页面只在你的浏览器本地调用摄像头，不录制、不上传，用来把“谁在定义我”这件事变成第一层直接体验。"
        />
        <div className="copy-stack">
          <p>请允许摄像头访问。视频不会上传，只会在你当前设备的浏览器中实时显示。</p>
          <p>如果你拒绝授权，页面会切换为占位镜像，但所有内容依然可以完整浏览。</p>
        </div>
        <div className="button-row">
          <button type="button" className="primary-button" onClick={onRequestCamera}>
            {isLive ? "重新聚焦镜像" : "启用摄像头"}
          </button>
          <button type="button" className="ghost-button" onClick={onStopCamera}>
            停止镜像
          </button>
        </div>
        <div className="status-panel">
          <span className={`status-dot status-${status}`} />
          <div>
            <strong>
              {status === "granted"
                ? "实时镜像已开启"
                : status === "requesting"
                  ? "正在请求摄像头权限"
                  : status === "denied"
                    ? "摄像头权限被拒绝"
                    : status === "unsupported"
                      ? "当前环境不支持摄像头"
                      : "镜像尚未开启"}
            </strong>
            <p>{error || "建议在 HTTPS 或 localhost 环境中打开站点，以确保摄像头功能正常。"}</p>
          </div>
        </div>
      </div>
      <MirrorFrame
        stream={stream}
        status={status}
        badge="Mirror 01"
        caption="当镜子被打开，问题并没有结束：看见自己，并不等于已经理解自己。"
        keywords={["self", "body", "gaze", "identity"]}
        visual={introVisual}
      />
    </section>
  );
}
