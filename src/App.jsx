import { useCamera } from "./hooks/useCamera";
import EvidenceRoom from "./sections/EvidenceRoom";
import ExternalNoise from "./sections/ExternalNoise";
import HeroEntrance from "./sections/HeroEntrance";
import TheQuestion from "./sections/TheQuestion";
import Underneath from "./sections/Underneath";

export default function App() {
  const { stream, status, requestCamera } = useCamera();

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function handleOpenMirror() {
    scrollTo("noise");
    await requestCamera();
  }

  function handleBroken() {
    setTimeout(() => scrollTo("underneath"), 300);
  }

  return (
    <>
      <main className="page-shell">
        <HeroEntrance onOpenMirror={handleOpenMirror} />
        <ExternalNoise
          stream={stream}
          status={status}
          onBroken={handleBroken}
        />
        <Underneath stream={stream} status={status} />
        <TheQuestion />
        <div className="evidence-wrapper">
          <EvidenceRoom />
        </div>
      </main>
    </>
  );
}
