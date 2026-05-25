import { useMemo, useState } from "react";
import LensCard from "../components/LensCard";
import MirrorFrame from "../components/MirrorFrame";
import SectionTitle from "../components/SectionTitle";
import { historyLenses } from "../data/historyLenses";

export default function HistoryLens({ stream, status }) {
  const [activeId, setActiveId] = useState(historyLenses[0].id);
  const activeLens = useMemo(
    () => historyLenses.find((item) => item.id === activeId) ?? historyLenses[0],
    [activeId]
  );

  return (
    <section id="history" className="shell history-section">
      <SectionTitle
        eyebrow="Gender Through History"
        title="时代之镜"
        subtitle="同一张脸，在不同历史和观念框架里，会被赋予完全不同的含义。"
      />
      <div className="history-layout">
        <div className="history-sidebar">
          {historyLenses.map((item) => (
            <LensCard
              key={item.id}
              item={item}
              active={item.id === activeLens.id}
              onClick={() => setActiveId(item.id)}
            />
          ))}
        </div>
        <div className="history-stage">
          <MirrorFrame
            stream={stream}
            status={status}
            filter={activeLens.filter}
            keywords={activeLens.keywords}
            accent={activeLens.accent}
            badge={activeLens.title}
            caption={activeLens.note}
            visual={activeLens.visual}
          />
          <div className="timeline-panel">
            <span className="timeline-kicker">当前视角</span>
            <h3>{activeLens.formula}</h3>
            <p>{activeLens.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
