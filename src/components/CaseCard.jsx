export default function CaseCard({ item }) {
  return (
    <article className="case-card">
      <div className="case-head">
        <span className="case-stamp">Case File</span>
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </div>
      <div className="case-body">
        <section>
          <span>概述</span>
          <p>{item.overview}</p>
        </section>
        <section>
          <span>启示</span>
          <p>{item.insight}</p>
        </section>
        <section>
          <span>方法学提醒</span>
          <p>{item.caution}</p>
        </section>
      </div>
    </article>
  );
}
