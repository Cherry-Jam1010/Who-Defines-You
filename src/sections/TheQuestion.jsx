import { quietQuestions } from "../data/quietQuestions";

export default function TheQuestion() {
  return (
    <section id="thequestion" className="thequestion-section shell">
      <div className="thequestion-center">
        <p className="thequestion-hook">你呢？</p>
        <div className="thequestion-list">
          {quietQuestions.map((q) => (
            <p key={q} className="thequestion-item">
              {q}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
