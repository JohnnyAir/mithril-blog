import m from "mithril";

const Qiuz = function () {
  return {
    view(vnode) {
      return m(
        "div",
        m("p.text-2xl", m.trust(vnode.attrs.question)),
        m(
          "div.flex.flex-col",
          m(
            "ul.mt-8.q-answer-list",
            vnode.attrs.answers.map((answer) =>
              m(
                `li.option-label.${answer === vnode.attrs.playerAnswer ? "selected" : ""}`,
                { onclick: ()=> vnode.attrs.onAnswerSelection(answer) },
                m.trust(answer)
              )
            )
          )
        )
      );
    },
  };
};
export default Qiuz;
