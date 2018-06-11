import Game from "./game.js";

let game = new Game();
let myGame = game.create.bind(game);
btnStart.addEventListener('click', myGame);

/*
let audio = new Audio();
audio.volume = 0.1;
audio.src = './audio/soundtrack.mp3';
audio.autoplay = true;
audio.loop = true;


*/
