import { useEffect, useRef, useState } from "react";
import TimelineCardIllust from "../components/illustrations/TimelineCardIllust";
import TimelineIllust from "../components/illustrations/TimelineIllust";
import { timelineData } from "../data/timelineData";

function TimelineCard({ item, index, visible }) {
  const isRight = index % 2 === 0;
  return (
    <div className={`tl-card-wrap ${isRight ? "tl-right" : "tl-left"} ${visible ? "tl-visible" : ""}`}>
      <div className="tl-card" style={{ "--card-accent": item.iconColor }}>
        <div className="tl-card-header">
          <TimelineCardIllust era={item.id} />
          <div className="tl-card-meta">
            <span className="tl-era">{item.era}</span>
            <span className="tl-period">{item.period}</span>
          </div>
        </div>
        <h3 className="tl-theme">{item.theme}</h3>
        <p className="tl-content">{item.content}</p>
        <div className="tl-keywords">
          {item.keywords.map((k) => (
            <span key={k} className="tl-kw">{k}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Timeline({ visible }) {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!visible) return;
    const observers = [];

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, i]));
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [visible]);

  return (
    <section id="timeline" className={`timeline-section shell ${visible ? "timeline-visible" : ""}`}>
      <div className="timeline-header">
        <p className="timeline-eyebrow">Gender Through Time</p>
        <h2 className="timeline-title">性别：一部观念的演变史</h2>
        <p className="timeline-subtitle">
          不同时代、不同文化，对性别有着截然不同的理解。
          <br />
          这些差异不是错误，而是镜子——映出的是每个时代看待世界的方式。
        </p>
      </div>

      <div className="timeline-track">
        <div className="timeline-track-inner">
          <div className="timeline-track-illust">
            <TimelineIllust />
          </div>
          <div className="timeline-cards">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => { cardRefs.current[index] = el; }}
              >
                <TimelineCard item={item} index={index} visible={visibleCards.has(index)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
