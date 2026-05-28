import { useEffect, useRef, useState } from "react";
import { timelineData } from "../data/timelineData";

function TimelineIcon({ type, color }) {
  const style = { "--icon-color": color };
  if (type === "circle") {
    return <div className="tl-icon tl-icon-circle" style={style} />;
  }
  if (type === "x") {
    return <div className="tl-icon tl-icon-x" style={style}>✕</div>;
  }
  if (type === "brain") {
    return <div className="tl-icon tl-icon-brain" style={style}>⬡</div>;
  }
  if (type === "triangle") {
    return <div className="tl-icon tl-icon-triangle" style={style}>▲</div>;
  }
  if (type === "star") {
    return <div className="tl-icon tl-icon-star" style={style}>★</div>;
  }
  if (type === "atom") {
    return <div className="tl-icon tl-icon-atom" style={style}>⬡</div>;
  }
  return <div className="tl-icon tl-icon-circle" style={style} />;
}

function TimelineCard({ item, index, visible }) {
  const isRight = index % 2 === 0;
  return (
    <div className={`tl-card-wrap ${isRight ? "tl-right" : "tl-left"} ${visible ? "tl-visible" : ""}`}>
      <div className="tl-card" style={{ "--card-accent": item.iconColor }}>
        <div className="tl-card-header">
          <TimelineIcon type={item.icon} color={item.iconColor} />
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
        <div className="timeline-line" />
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => { cardRefs.current[index] = el; }}
          >
            <TimelineCard item={item} index={index} visible={visibleCards.has(index)} />
          </div>
        ))}
      </div>
    </section>
  );
}
