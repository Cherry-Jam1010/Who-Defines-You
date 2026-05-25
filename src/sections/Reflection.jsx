import SectionTitle from "../components/SectionTitle";

const questions = [
  "我的性别，是身体决定的吗？",
  "我的性别，是社会告诉我的吗？",
  "我的性别，是我自己感受到的吗？",
  "当这些答案彼此不一致时，我该如何理解自己？"
];

export default function Reflection() {
  return (
    <section id="reflection" className="shell reflection-section">
      <SectionTitle
        eyebrow="Final Mirror"
        title="最后的镜子"
        subtitle="问题不在于立刻给出唯一答案，而在于如何更审慎地理解那些彼此并不总是一致的线索。"
        align="center"
      />
      <div className="question-grid">
        {questions.map((question, index) => (
          <article key={question} className="question-card">
            <span>{`0${index + 1}`}</span>
            <p>{question}</p>
          </article>
        ))}
      </div>
      <div className="summary-panel">
        <p>
          性别认同既不是完全脱离身体的自由选择，也不是可以被社会任意制造的标签。
          它更像是身体、心理、社会与文化共同作用下，一个人对“我是谁”的持续理解。
        </p>
        <p>面对青少年的性别困扰，我们真正需要的不是仓促判断，而是尊重、审慎、证据与支持。</p>
      </div>
    </section>
  );
}
