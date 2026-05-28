import { useEffect } from "react";
import { useCamera } from "./hooks/useCamera";
import Closing from "./sections/Closing";
import EvidenceRoom from "./sections/EvidenceRoom";
import Experience from "./sections/Experience";

export default function App() {
  const { stream, status, requestCamera } = useCamera();

  useEffect(() => {
    requestCamera();
  }, [requestCamera]);

  function handleBroken() {
    document.getElementById("closing")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <main className="page-shell">
        <Experience stream={stream} status={status} onBroken={handleBroken} />
        <Closing />
        <div className="evidence-wrapper">
          <EvidenceRoom />
        </div>
      </main>
    </>
  );
}
