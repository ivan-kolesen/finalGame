/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/dict.js":
/*!********************!*\
  !*** ./js/dict.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dictMonster = {
    "headsIdle" : ['spriteMonsterHeadIdle_first', 'spriteMonsterHeadIdle_second','spriteMonsterHeadIdle_third'],
    "bodiesIdle" : ['spriteMonsterBodyIdle_first', 'spriteMonsterBodyIdle_second','spriteMonsterBodyIdle_third'],
    "legsIdle" : ['spriteMonsterLegsIdle_first', 'spriteMonsterLegsIdle_second','spriteMonsterLegsIdle_third'],
    "headsFire" : ['spriteMonsterHeadFire_first', 'spriteMonsterHeadFire_second','spriteMonsterHeadFire_third'],
    "bodiesFire" : ['spriteMonsterBodyFire_first', 'spriteMonsterBodyFire_second','spriteMonsterBodyFire_third'],
    "legsFire" : ['spriteMonsterLegsFire_first', 'spriteMonsterLegsFire_second','spriteMonsterLegsFire_third'],
    "headsHurt" : ['spriteMonsterHeadHurt_first', 'spriteMonsterHeadHurt_second','spriteMonsterHeadHurt_third'],
    "bodiesHurt" : ['spriteMonsterBodyHurt_first', 'spriteMonsterBodyHurt_second','spriteMonsterBodyHurt_third'],
    "legsHurt" : ['spriteMonsterLegsHurt_first', 'spriteMonsterLegsHurt_second','spriteMonsterLegsHurt_third'],
    "headsDie" : ['spriteMonsterHeadDie_first', 'spriteMonsterHeadDie_second','spriteMonsterHeadDie_third'],
    "bodiesDie" : ['spriteMonsterBodyDie_first', 'spriteMonsterBodyDie_second','spriteMonsterBodyDie_third'],
    "legsDie" : ['spriteMonsterLegsDie_first', 'spriteMonsterLegsDie_second','spriteMonsterLegsDie_third'],

    "firstNames" : ["Kazimir", "Voiclah", "Magamed", "Ludovik", "Genrich", "Sigizmund", "Aslanbek", "Bzdashek"],
    "secondNames" : ["\"Hriply\"", "\"Shavka\"", "\"Bambula\"", "\"Baklan\"", "\"Brodyaga\"", "\"Vertuhai\""],
    "thirdNames" : ["Vonuchkin", "Svininsky", "Zhirnidze", "Kakulko", "Soplivkin", "Gryaznulenko", "Potnyakovich"],

    "backgroundImages" : ['arena1', 'arena2', 'arena3', 'arena4']
}

/* harmony default export */ __webpack_exports__["default"] = (dictMonster);

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./js/player.js");
/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster */ "./js/monster.js");
/* harmony import */ var _spell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spell */ "./js/spell.js");
/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mylib */ "./js/mylib.js");
/* harmony import */ var _dict__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dict */ "./js/dict.js");






class Game{
    constructor(){
        this.player;
        this.monster;
        this.spell;
    }


    create(){
        document.querySelector('.regPage').style.display = "none";
        document.querySelector('.gamePage').style.display = "block";
        const playerName = document.querySelector('input').value;

        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](playerName);
        this.player.drawPlayer();

        this.monster = new _monster__WEBPACK_IMPORTED_MODULE_1__["default"](this.player.score);
        this.monster.drawMonster(this.player);

        this.spell = new _spell__WEBPACK_IMPORTED_MODULE_2__["default"]();
        btnChooseSpell.addEventListener('click', () => {this.spell.open()});
        btnAnswer.addEventListener('click', () => {this.setAnswer()});

    }

    setAnswer(){
        this.spell.task.answer = answer.value;
        answer.value = '';
        document.querySelector('.taskPage').style.display = "none";
        this.spell.cast(this.player, this.monster);
        setTimeout(this.isAlive.bind(this), 2000)
    }

    isAlive(){
        if(!this.monster.isAlive()){
            this.monster.die();
            setTimeout(()=>this.monster.stopDie(), 1999);
            setTimeout(()=>this.monsterKilled(), 2000);
        }
        if(!this.player.isAlive()){
            this.player.die();
            setTimeout(()=>this.playerKilled(), 5000);
        }
    }

    monsterKilled(){
        const spriteMonster = document.querySelector('.spriteMonster');
        spriteMonster.children[0].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_4__["default"].headsIdle[this.monster.head]);
        spriteMonster.children[1].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_4__["default"].bodiesIdle[this.monster.body]);
        spriteMonster.children[2].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_4__["default"].legsIdle[this.monster.legs]);

        this.player.score +=1;
        this.monster = new _monster__WEBPACK_IMPORTED_MODULE_1__["default"](this.player.score);
        this.monster.drawMonster(this.player);
        this.player.health = Math.min(this.player.health+_mylib__WEBPACK_IMPORTED_MODULE_3__["default"].getRandomFromTo(20, 25+this.player.score*5), this.player.startHealth);
        this.player.drawHealth();
    }

    playerKilled(){
        document.querySelector('.gamePage').style.display = "none";
        document.querySelector('.scoresPage').style.display = "block";
        localStorage.setItem('game' + Date.now(), this.player.name + ',' + this.player.score);
        _mylib__WEBPACK_IMPORTED_MODULE_3__["default"].createHighscoresTable();
    }

}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./js/game.js");


let game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
let myGame = game.create.bind(game);
btnStart.addEventListener('click', myGame);
btnStart.addEventListener('click', myGame);

/*let audio = new Audio();
audio.volume = 0.3;
audio.src = './audio/soundtrack.mp3';
audio.autoplay = true;
audio.loop = true;*/




/***/ }),

/***/ "./js/monster.js":
/*!***********************!*\
  !*** ./js/monster.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mylib */ "./js/mylib.js");
/* harmony import */ var _dict__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dict */ "./js/dict.js");



class Monster{
    constructor(score){
        this.score = score;
        this.name = Monster.generateName();
        this.startHealth = Monster.generateHealth(this.score);
        this.health = this.startHealth;
        this.head;
        this.body;
        this.legs;
        this.audioFire = new Audio();
    }

    drawMonster(){
        document.querySelector('.monsterName').innerHTML = this.name;
        document.querySelector('.round').innerHTML = "round " + (this.score+1);
        this.drawHealth();
        this.createSounds();

        /*add new background and clear the previous*/
        document.querySelector('.gamePage').classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].backgroundImages[this.score % _dict__WEBPACK_IMPORTED_MODULE_1__["default"].backgroundImages.length]);
        document.querySelector('.gamePage').classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].backgroundImages[(this.score-1) % _dict__WEBPACK_IMPORTED_MODULE_1__["default"].backgroundImages.length]);

        /*get random numbers to take head, body, legs from dictionary by these numbers */
        this.head = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomFromTo(0, _dict__WEBPACK_IMPORTED_MODULE_1__["default"].headsIdle.length-1);
        this.body = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomFromTo(0, _dict__WEBPACK_IMPORTED_MODULE_1__["default"].bodiesIdle.length-1);
        this.legs = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomFromTo(0, _dict__WEBPACK_IMPORTED_MODULE_1__["default"].legsIdle.length-1);

        /*draw the monster from taken head, body and legs*/
        document.querySelector('.spriteMonsterHeadIdle').classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].headsIdle[this.head]);
        document.querySelector('.spriteMonsterBodyIdle').classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].bodiesIdle[this.body]);
        document.querySelector('.spriteMonsterLegsIdle').classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].legsIdle[this.legs]);
    }

    /*sets the green line of health and puts a number of health in html*/
    drawHealth(){
        document.querySelector('.monsterHealthRemain').style.width = this.health/this.startHealth*100 + "%";
        document.querySelector('.monsterHealthRemain').innerHTML = this.health;
    }

    createSounds(){
        this.audioFire.preload = 'auto';
        this.audioFire.volume = 1;
        this.audioFire.src = './audio/monsterFire.mp3';
    }

    /*removes classes of idle parts of the monster and sets classes of fire parts of the monster*/
    fire(){
        this.audioFire.play();
        const spriteMonster = document.querySelector('.spriteMonster');
        spriteMonster.children[0].classList.remove('spriteMonsterHeadIdle');
        spriteMonster.children[0].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].headsIdle[this.head]);
        spriteMonster.children[1].classList.remove('spriteMonsterBodyIdle');
        spriteMonster.children[1].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].bodiesIdle[this.body]);
        spriteMonster.children[2].classList.remove('spriteMonsterLegsIdle');
        spriteMonster.children[2].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].legsIdle[this.legs]);
        spriteMonster.children[0].classList.add('spriteMonsterHeadFire');
        spriteMonster.children[0].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].headsFire[this.head]);
        spriteMonster.children[1].classList.add('spriteMonsterBodyFire');
        spriteMonster.children[1].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].bodiesFire[this.body]);
        spriteMonster.children[2].classList.add('spriteMonsterLegsFire');
        spriteMonster.children[2].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].legsFire[this.legs]);

    }

    /*removes classes of fire parts of the monster and sets classes of idle parts of the monster*/
    stopFire(){
        const spriteMonster = document.querySelector('.spriteMonster');
        spriteMonster.children[0].classList.remove('spriteMonsterHeadFire');
        spriteMonster.children[0].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].headsFire[this.head]);
        spriteMonster.children[1].classList.remove('spriteMonsterBodyFire');
        spriteMonster.children[1].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].bodiesFire[this.body]);
        spriteMonster.children[2].classList.remove('spriteMonsterLegsFire');
        spriteMonster.children[2].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].legsFire[this.legs]);
        spriteMonster.children[0].classList.add('spriteMonsterHeadIdle');
        spriteMonster.children[0].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].headsIdle[this.head]);
        spriteMonster.children[1].classList.add('spriteMonsterBodyIdle');
        spriteMonster.children[1].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].bodiesIdle[this.body]);
        spriteMonster.children[2].classList.add('spriteMonsterLegsIdle');
        spriteMonster.children[2].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].legsIdle[this.legs]);
    }

    /*removes classes of idle parts of the monster and sets classes of hurt parts of the monster*/
    hurt(){
        const spriteMonster = document.querySelector('.spriteMonster');
        spriteMonster.children[0].classList.remove('spriteMonsterHeadIdle');
        spriteMonster.children[0].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].headsIdle[this.head]);
        spriteMonster.children[1].classList.remove('spriteMonsterBodyIdle');
        spriteMonster.children[1].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].bodiesIdle[this.body]);
        spriteMonster.children[2].classList.remove('spriteMonsterLegsIdle');
        spriteMonster.children[2].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].legsIdle[this.legs]);
        spriteMonster.children[0].classList.add('spriteMonsterHeadHurt');
        spriteMonster.children[0].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].headsHurt[this.head]);
        spriteMonster.children[1].classList.add('spriteMonsterBodyHurt');
        spriteMonster.children[1].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].bodiesHurt[this.body]);
        spriteMonster.children[2].classList.add('spriteMonsterLegsHurt');
        spriteMonster.children[2].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].legsHurt[this.legs]);
    }

    /*removes classes of hurt parts of the monster and sets classes of idle parts of the monster*/
    stopHurt(){
        const spriteMonster = document.querySelector('.spriteMonster');
        spriteMonster.children[0].classList.remove('spriteMonsterHeadHurt');
        spriteMonster.children[0].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].headsHurt[this.head]);
        spriteMonster.children[1].classList.remove('spriteMonsterBodyHurt');
        spriteMonster.children[1].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].bodiesHurt[this.body]);
        spriteMonster.children[2].classList.remove('spriteMonsterLegsHurt');
        spriteMonster.children[2].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].legsHurt[this.legs]);
        spriteMonster.children[0].classList.add('spriteMonsterHeadIdle');
        spriteMonster.children[0].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].headsIdle[this.head]);
        spriteMonster.children[1].classList.add('spriteMonsterBodyIdle');
        spriteMonster.children[1].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].bodiesIdle[this.body]);
        spriteMonster.children[2].classList.add('spriteMonsterLegsIdle');
        spriteMonster.children[2].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].legsIdle[this.legs]);
    }

    die(){
        const spriteMonster = document.querySelector('.spriteMonster');
        spriteMonster.children[0].classList.remove('spriteMonsterHeadIdle');
        spriteMonster.children[0].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].headsIdle[this.head]);
        spriteMonster.children[1].classList.remove('spriteMonsterBodyIdle');
        spriteMonster.children[1].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].bodiesIdle[this.body]);
        spriteMonster.children[2].classList.remove('spriteMonsterLegsIdle');
        spriteMonster.children[2].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].legsIdle[this.legs]);
        spriteMonster.children[0].classList.add('spriteMonsterHeadDie');
        spriteMonster.children[0].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].headsDie[this.head]);
        spriteMonster.children[1].classList.add('spriteMonsterBodyDie');
        spriteMonster.children[1].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].bodiesDie[this.body]);
        spriteMonster.children[2].classList.add('spriteMonsterLegsDie');
        spriteMonster.children[2].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].legsDie[this.legs]);
    }

    stopDie(){
        const spriteMonster = document.querySelector('.spriteMonster');
        spriteMonster.children[0].classList.remove('spriteMonsterHeadDie');
        spriteMonster.children[0].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].headsDie[this.head]);
        spriteMonster.children[1].classList.remove('spriteMonsterBodyDie');
        spriteMonster.children[1].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].bodiesDie[this.body]);
        spriteMonster.children[2].classList.remove('spriteMonsterLegsDie');
        spriteMonster.children[2].classList.remove(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].legsDie[this.legs]);
        spriteMonster.children[0].classList.add('spriteMonsterHeadIdle');
        spriteMonster.children[0].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].headsIdle[this.head]);
        spriteMonster.children[1].classList.add('spriteMonsterBodyIdle');
        spriteMonster.children[1].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].bodiesIdle[this.body]);
        spriteMonster.children[2].classList.add('spriteMonsterLegsIdle');
        spriteMonster.children[2].classList.add(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].legsIdle[this.legs]);
    }


    /*checks if the monster is alive*/
    isAlive(){
        return this.health > 0;
    }

    /*generates the monster's name from three parts*/
    static generateName(){
        const chosenFirstName = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomArrayElement(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].firstNames);
        const chosenSecondName = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomArrayElement(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].secondNames);
        const chosenThirdName = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomArrayElement(_dict__WEBPACK_IMPORTED_MODULE_1__["default"].thirdNames);
        return chosenFirstName + ' ' + chosenSecondName + ' ' + chosenThirdName;
    }

    /*generates the monster's health depending on the level*/
    static generateHealth(score){
        return (30 + score*10 + _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomFromTo(0, 10));
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Monster);

/***/ }),

/***/ "./js/mylib.js":
/*!*********************!*\
  !*** ./js/mylib.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class mylib{
    /*returns a random element of the passed array*/
    static getRandomArrayElement(array){
        return array[Math.floor(Math.random() * array.length)];
    }

    /*returns a random integer from a gap between min and max*/
    static getRandomFromTo(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;;
    }

    /*draws a table with highscores*/
    static createHighscoresTable() {
        let recordsArray = mylib.getHighscores();
        let recordsTable = document.querySelector('table');
        for (let i = 0; i < recordsArray.length; i++) {
            let tableRow = document.createElement("tr");
            let playerName = document.createElement("td");
            let playerScore = document.createElement("td");
            playerName.innerText = recordsArray[i][0];
            playerScore.innerText = recordsArray[i][1];
            tableRow.appendChild(playerName);
            tableRow.appendChild(playerScore);
            recordsTable.appendChild(tableRow);
        }
    }

    /*returns a sorted array of 10 top scores*/
    static getHighscores() {
        let allScores = [];
        let storageCount = localStorage.length;
        for (let i = 0; i < storageCount; i++) {
            if (localStorage.key(i).substr(0, 4) === 'game') {
                allScores.push(localStorage.getItem(localStorage.key(i)).split(','));
            }
        }
        for (let i = 0; i < allScores.length; i++) {
            allScores[i][1] = Number(allScores[i][1]);
        }
        allScores = mylib.bubbleSort2D(allScores).slice(0, 10);
        return allScores;
    }

    /*bubble sort for two-dimensional array*/
    static bubbleSort2D(array) {
        let length = array.length;
        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (array[j + 1][1] > array[j][1]) {
                    let t = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = t;
                }
            }
        }
        return array;
    }

}

/* harmony default export */ __webpack_exports__["default"] = (mylib);

/***/ }),

/***/ "./js/player.js":
/*!**********************!*\
  !*** ./js/player.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Player{
    constructor(name){
        this.name = name;
        this.startHealth = 100;
        this.health = this.startHealth;
        this.score = 0;
        this.audioFire = new Audio();
        this.audioHeal = new Audio();
    }

    drawPlayer(){
        document.querySelector('.playerName').innerHTML = this.name;
        this.drawHealth();
        this.createSounds();
    }

    drawHealth(){
        document.querySelector('.playerHealthRemain').style.width = this.health/this.startHealth*100 + "%";
        document.querySelector('.playerHealthRemain').innerHTML = this.health;
    }

    createSounds(){
        this.audioFire.preload = 'auto';
        this.audioFire.volume = 1;
        this.audioFire.src = './audio/playerFire.mp3';
        this.audioHeal.preload = 'auto';
        this.audioHeal.volume = 1;
        this.audioHeal.src = './audio/playerHeal.mp3';
    }

    fire(){
        this.audioFire.play();
        document.querySelector('.spritePlayer').classList.remove('spritePlayerIdle');
        document.querySelector('.spritePlayer').classList.add('spritePlayerFire');
    }

    stopFire(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerFire');
        document.querySelector('.spritePlayer').classList.add('spritePlayerIdle');
    }

    healing(){
        this.audioHeal.play();
        document.querySelector('.spritePlayer').classList.remove('spritePlayerIdle');
        document.querySelector('.spritePlayer').classList.add('spritePlayerHeal');
    }

    stopHealing(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerHeal');
        document.querySelector('.spritePlayer').classList.add('spritePlayerIdle');
    }

    hurt(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerIdle');
        document.querySelector('.spritePlayer').classList.add('spritePlayerHurt');
    }

    stopHurt(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerHurt');
        document.querySelector('.spritePlayer').classList.add('spritePlayerIdle');
    }

    die(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerIdle');
        document.querySelector('.spritePlayer').classList.add('spritePlayerDie');
    }

    isAlive(){
        return this.health > 0;
    }


}

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./js/spell.js":
/*!*********************!*\
  !*** ./js/spell.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./js/task.js");
/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mylib */ "./js/mylib.js");



class Spell{
    constructor(){
        this.kind;
        this.task;
    }

    /*opens window with choise of spell type*/
    open(){
        document.querySelector('.spellPage').style.display = "block";
        document.querySelector('.spells').addEventListener('click', () => {this.chooseSpell(event)});
    }

    /*sets the chosen spell type into object's property and creates a task*/
    chooseSpell(event){
        this.kind = event.target.getAttribute('id');
        document.querySelector('.spellPage').style.display = "none";
        document.querySelector('.taskPage').style.display = "block";
        this.task = new _task__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.task.generate();
    }

    /*if the chosen type of spell was "atack", the player atacks the monster or the monster atacks the player */
    atack(atacking, atacked){
        atacked.health = Math.max(atacked.health - _mylib__WEBPACK_IMPORTED_MODULE_1__["default"].getRandomFromTo(20, 25+atacked.score*5), 0);
        atacked.drawHealth();
        atacking.fire();
        atacked.hurt();
        setTimeout(atacking.stopFire.bind(atacking), 2000);
        setTimeout(atacked.stopHurt.bind(atacked), 2000);
    }

    /*if the chosen type of spell was "heal" the player healing himself*/
    heal(player){
        player.health = Math.min(player.health+_mylib__WEBPACK_IMPORTED_MODULE_1__["default"].getRandomFromTo(20, 25+player.score*5), player.startHealth);
        player.drawHealth();
        player.healing();
        setTimeout(player.stopHealing, 2000);
    }

    cast(player, monster){
        switch (this.kind){
            case 'atackSpell':
                this.task.isSolved() ? this.atack(player, monster) : this.atack(monster, player);
                break;
            case 'healSpell':
                this.task.isSolved() ? this.heal(player) : this.atack(monster, player);
                break;
            default:
                null;
        }

    }
}

/* harmony default export */ __webpack_exports__["default"] = (Spell);

/***/ }),

/***/ "./js/task.js":
/*!********************!*\
  !*** ./js/task.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mylib */ "./js/mylib.js");


class Task{
    constructor(){
        this.condition;
        this.solution;
        this.answer;
    }

    generate(){
        const tasks = [this.arithmetics];
        const currentTask = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomArrayElement(tasks).bind(this);
        currentTask();

    }

    arithmetics(){
        const firstNumber = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomFromTo(0, 100);
        const secondNumber = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomFromTo(0, 100);
        const operations = ['+', '-', '*', '/'];
        const operation = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomArrayElement(operations);
        this.condition = firstNumber + operation + secondNumber;
        this.solution = eval(this.condition);
        document.querySelector('.taskCondition').innerHTML = "solve the task:<br>" + this.condition;
    }

    translate(){
        document.querySelector('.taskCondition').innerHTML = "you win";
    }

    isSolved(){
        return this.solution == this.answer;
    }

}

/* harmony default export */ __webpack_exports__["default"] = (Task);

/***/ })

/******/ });
//# sourceMappingURL=boundle.js.map