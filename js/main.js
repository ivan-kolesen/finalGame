import Game from "./game.js";

let game = new Game();
let myGame = game.create.bind(game);
btnStart.addEventListener('click', myGame);