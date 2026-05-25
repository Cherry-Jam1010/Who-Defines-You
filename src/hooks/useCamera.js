import { useEffect, useState } from "react";

export function useCamera() {
  const [stream, setStream] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function requestCamera() {
    if (stream) {
      setStatus("granted");
      return;
    }

    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus("unsupported");
      setError("当前浏览器不支持摄像头访问。");
      return;
    }

    setStatus("requesting");
    setError("");

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      setStream(mediaStream);
      setStatus("granted");
    } catch (err) {
      if (err?.name === "NotAllowedError") {
        setStatus("denied");
        setError("你拒绝了摄像头权限，页面已切换为本地占位镜像。");
        return;
      }

      setStatus("error");
      setError("摄像头暂时无法访问，页面已切换为本地占位镜像。");
    }
  }

  function stopCamera() {
    if (!stream) {
      return;
    }

    stream.getTracks().forEach((track) => track.stop());
    setStream(null);
    setStatus("idle");
  }

  useEffect(() => () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  }, [stream]);

  return {
    stream,
    status,
    error,
    requestCamera,
    stopCamera
  };
}
