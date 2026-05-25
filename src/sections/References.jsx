import SectionTitle from "../components/SectionTitle";
import { references } from "../data/references";

export default function References() {
  return (
    <section id="references" className="shell references-section">
      <SectionTitle
        eyebrow="References"
        title="真实参考文献"
        subtitle="下面这些文献都可以直接核对，覆盖了页面里用到的心理实践、案例讨论、儿科支持与方法学争议。"
      />
      <div className="reference-grid">
        {references.map((item) => (
          <article key={item.id} className="reference-item">
            <span className="reference-year">{item.year}</span>
            <h3>{item.title}</h3>
            <p className="reference-authors">{item.authors}</p>
            <p className="reference-source">{item.source}</p>
            <p className="reference-note">{item.note}</p>
            <a href={item.url} target="_blank" rel="noreferrer">
              查看来源
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
