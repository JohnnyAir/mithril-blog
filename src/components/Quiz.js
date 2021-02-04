import m from "mithril";
import Question from "./Question";
import Questions from "../model/Question";

const Qiuz = function (vnode) {
  let currentQuestionIndex = 0;
  let score = 0;

  const onAnswerSelection = (answer) => {
    Questions.All[currentQuestionIndex].playerAnswer = answer;
  };

  const isCorrectAnswer = () => {
    let question = Questions.All[currentQuestionIndex];
    return question.playerAnswer === question.correct_answer;
  };

  const nextQuestion = () => {
    if (isCorrectAnswer()) score += 1;
    if (currentQuestionIndex === Questions.All.length - 1) {
      return vnode.attrs.ongameover(score);
    }
    currentQuestionIndex += 1;
  };

  return {
    oninit: Questions.fetchQuestions,
    view() {
      return m(
        "div",
        m(
          "h6.text-base.font-bold.mb-4",
          `Question ${currentQuestionIndex + 1} of ${Questions.All.length}`
        ),
        Questions.All.length
          ? m(Question, {
              ...Questions.All[currentQuestionIndex],
              onAnswerSelection,
            })
          : "Loading..",
        m(
          "button.h-12.bg-blue-500.text-white.rounded.float-right.pl-6.pr-6",
          { onclick: nextQuestion },
          "Next"
        )
      );
    },
  };
};
export default Qiuz;
