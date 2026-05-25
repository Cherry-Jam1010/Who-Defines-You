import CaseCard from "../components/CaseCard";
import SectionTitle from "../components/SectionTitle";
import { caseStudies } from "../data/cases";

export default function CaseArchive() {
  return (
    <section id="archive" className="shell archive-section">
      <SectionTitle
        eyebrow="Case Archive"
        title="案例档案"
        subtitle="把争议放回证据与方法里讨论，而不是直接滑进情绪化立场。"
      />
      <div className="archive-grid">
        {caseStudies.map((item) => (
          <CaseCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
