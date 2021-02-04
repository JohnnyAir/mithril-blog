import m from "mithril";

const endpoint = `https://opentdb.com/api.php?amount=20&difficulty=hard&type=multiple`;
const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

var Questions = {
  All: [],
  fetchQuestions: function () {
    console.log("calleddd")
    return m
      .request({
        method: "GET",
        url: endpoint,
      })
      .then(function (data) {
          console.log(data)
        Questions.All = data.results.map((question) => ({
          ...question,
          answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer,
          ]),
        }));
      });
  },
};

export default Questions;
