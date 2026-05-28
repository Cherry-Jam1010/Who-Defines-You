import AncientIllust from "./AncientIllust";
import ColonialIllust from "./ColonialIllust";
import PsychoIllust from "./PsychoIllust";
import FeminismIllust from "./FeminismIllust";
import ActivismIllust from "./ActivismIllust";
import IntegratedIllust from "./IntegratedIllust";

const ILLUST_MAP = {
  ancient: AncientIllust,
  colonial: ColonialIllust,
  freud: PsychoIllust,
  "second-wave": FeminismIllust,
  "trans-activism": ActivismIllust,
  "bio-psycho-social": IntegratedIllust
};

const PHOTO_SEEDS = {
  ancient: "history/ancient",
  colonial: "colonial/history",
  freud: "brain/psychology",
  "second-wave": "women/equality",
  "trans-activism": "rainbow/pride",
  "bio-psycho-social": "science/medical"
};

export default function AnimatedTimelineCard({ eraId, accentColor }) {
  const IllustComponent = ILLUST_MAP[eraId];
  if (!IllustComponent) return null;

  return (
    <div className="anim-card-shell" style={{ "--card-accent": accentColor }}>
      {/* Real photo layer — used as blurred background */}
      <img
        className="anim-card-photo"
        src={`https://picsum.photos/seed/${encodeURIComponent(PHOTO_SEEDS[eraId] || eraId)}/320/200`}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      {/* Dark overlay so SVG is legible */}
      <div className="anim-card-overlay" />
      {/* Animated SVG illustration — foreground */}
      <div className="anim-card-illust">
        <IllustComponent />
      </div>
    </div>
  );
}
