import SectionTitle from "../components/SectionTitle";
import { references } from "../data/references";

export default function References() {
  return (
    <section id="references" className="shell references-section">
      <SectionTitle
        eyebrow="References"
        title="真实参考文献"
        subtitle="以下文献均可直接核对，涵盖心理实践指南、实证研究、神经生物学基础、社会角色理论与争议案例等多元视角。"
      />
      <div className="reference-grid">
        {references.map((item) => (
          <article key={item.id} className="reference-item">
            <span className="reference-year">{item.year}</span>
            <h3>{item.title}</h3>
            <p className="reference-authors">{item.authors}</p>
            <p className="reference-source">{item.source}</p>
            <p className="reference-note">{item.note}</p>
            <div className="reference-links">
              <a href={item.url} target="_blank" rel="noreferrer">
                查看来源
              </a>
              {item.pdf && (
                <a href={item.pdf} target="_blank" rel="noreferrer" className="pdf-link">
                  下载 PDF
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
