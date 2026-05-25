import Navbar from "./components/Navbar";
import { useCamera } from "./hooks/useCamera";
import CaseArchive from "./sections/CaseArchive";
import Hero from "./sections/Hero";
import HistoryLens from "./sections/HistoryLens";
import LabelStorm from "./sections/LabelStorm";
import MirrorIntro from "./sections/MirrorIntro";
import Reflection from "./sections/Reflection";
import References from "./sections/References";
import TheoryLens from "./sections/TheoryLens";

export default function App() {
  const { stream, status, error, requestCamera, stopCamera } = useCamera();

  async function handleOpenMirror() {
    document.getElementById("mirror")?.scrollIntoView({ behavior: "smooth", block: "start" });
    await requestCamera();
  }

  return (
    <>
      <Navbar />
      <main className="page-shell">
        <Hero onOpenMirror={handleOpenMirror} />
        <MirrorIntro
          stream={stream}
          status={status}
          error={error}
          onRequestCamera={requestCamera}
          onStopCamera={stopCamera}
        />
        <HistoryLens stream={stream} status={status} />
        <TheoryLens stream={stream} status={status} />
        <LabelStorm stream={stream} status={status} />
        <CaseArchive />
        <Reflection />
        <References />
      </main>
    </>
  );
}
