import { useEffect, useRef } from "react";

export default function Underneath({ stream, status }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (stream) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.srcObject = null;
      }
    }
  }, [stream]);

  return (
    <section id="underneath" className="underneath-section shell">
      <div className="underneath-stage">
        <div className="underneath-mirror">
          {stream ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="underneath-video"
              style={{ transform: "scaleX(-1)" }}
            />
          ) : (
            <div className="underneath-placeholder" />
          )}
          <div className="underneath-breathe" />
        </div>
      </div>
      <div className="underneath-text">
        <p>
          那些声音散去之后，
          <br />
          镜子里的那个人，
          <br />
          是谁？
        </p>
        <p className="underneath-sub">
          不是任何人的期待。
          <br />
          不是标签，也不是反标签。
          <br />
          只是你。
        </p>
      </div>
    </section>
  );
}
