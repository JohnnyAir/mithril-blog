import m from "mithril";

const GameOverView = {
  view(vnode) {
    return m(
      ".m-2",
      m(
        "h5",
        `Your Score ${vnode.attrs.finalScore}`,
        m(
          "button.h-12.bg-blue-500.text-white.rounded.pl-6.pr-6.mr-6",
          { onclick: vnode.attrs.reset },
          "Play Again"
        ),
        m(
          "button.h-12.bg-blue-500.text-white.rounded.pl-6.pr-6.mr-6",
          { onclick: vnode.attrs.endGame },
          "End Game"
        )
      )
    );
  },
};

export default GameOverView;
