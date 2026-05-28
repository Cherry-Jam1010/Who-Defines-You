import { quietQuestions } from "../data/quietQuestions";

export default function Closing() {
  return (
    <section id="closing" className="closing-section shell">
      <div className="closing-inner">
        <p className="closing-hook">你呢？</p>

        <div className="closing-questions">
          {quietQuestions.map((q) => (
            <p key={q} className="closing-question">{q}</p>
          ))}
        </div>

        <div className="closing-note">
          <p>
            性别认同既不是完全脱离身体的自由选择，也不是可以被社会任意制造的标签。
            它更像是身体、心理、社会与文化共同作用下，一个人对「我是谁」的持续理解。
          </p>
          <p>
            面对青少年的性别困扰，我们真正需要的不是仓促判断，而是尊重、审慎、证据与支持。
          </p>
          <p>
            如果你正在经历困惑，请知道你并不孤独。
            <br />
            寻求专业帮助，是力量，而非软弱。
          </p>
        </div>
      </div>
    </section>
  );
}
