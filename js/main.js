import Game from "./game.js";

const game = new Game();
const myGame = game.create.bind(game);
btnStart.addEventListener('click', myGame);