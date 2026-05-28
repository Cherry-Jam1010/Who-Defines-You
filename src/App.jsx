import { useEffect, useRef, useState } from "react";
import { useCamera } from "./hooks/useCamera";
import Closing from "./sections/Closing";
import EvidenceRoom from "./sections/EvidenceRoom";
import Experience from "./sections/Experience";
import TheoryExploration from "./sections/TheoryExploration";
import Timeline from "./sections/Timeline";

export default function App() {
  const { stream, status, requestCamera } = useCamera();

  const [sections, setSections] = useState({
    experience: true,
    timeline: false,
    theory: false,
    closing: false
  });

  const timelineRef = useRef(null);
  const theoryRef = useRef(null);
  const closingRef = useRef(null);

  // Auto-request camera on load
  useEffect(() => {
    requestCamera();
  }, [requestCamera]);

  // Scroll-triggered visibility for each section
  useEffect(() => {
    const refs = [
      { key: "timeline", ref: timelineRef },
      { key: "theory", ref: theoryRef },
      { key: "closing", ref: closingRef }
    ];

    const observers = refs.map(({ key, ref }) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSections((prev) => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) obs.observe(ref.current);
      return obs;
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function handleBroken() {
    setSections((prev) => ({ ...prev, timeline: true }));
    setTimeout(() => {
      timelineRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  return (
    <>
      <main className="page-shell">
        <Experience stream={stream} status={status} onBroken={handleBroken} />

        <div ref={timelineRef}>
          <Timeline visible={sections.timeline} />
        </div>

        <div ref={theoryRef}>
          <TheoryExploration visible={sections.theory} />
        </div>

        <div ref={closingRef}>
          <Closing />
        </div>

        <div className="evidence-wrapper">
          <EvidenceRoom />
        </div>
      </main>
    </>
  );
}
