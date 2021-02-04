import m from "mithril";
import GameOverView from "./components/GameOverView";
import Qiuz from "./components/Quiz";

function App() {
  let playing = false;
  let gameOver = false;
  let finalScore = 0;

  function reset() {
    playing = true;
    gameOver = false;
  }

  function endGame() {
    playing = false;
    gameOver = false;
  }

  function startGame() {
    playing = true;
    gameOver = false;
  }

  return {
    view() {
      return m(
        ".app.bg-gray-100.h-full",
        m("header.h-14.bg-white"),
        m(
          ".m-auto.w-11/12.max-w-2xl",
          m(
            ".mt-8",
            playing
              ? gameOver
                ? m(GameOverView, { finalScore, reset, endGame })
                : m(Qiuz, {
                    ongameover: (score) => {
                      finalScore = score;
                      gameOver = true;
                    },
                  })
              : m(
                  "button.h-12.bg-blue-500.text-white.rounded.pl-6.pr-6.mr-6",
                  { onclick: startGame },
                  "Start Quiz"
                )
          )
        )
      );
    },
  };
}

export default App;
