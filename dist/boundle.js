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
        if(!this.monster.isAlive()){
            setTimeout(()=>this.monsterKilled(), 5000);
        }
        if(!this.player.isAlive()){
            setTimeout(()=>this.playerKilled(), 5000);
        }

    }

    monsterKilled(){
        this.player.score +=1;
        this.monster = new _monster__WEBPACK_IMPORTED_MODULE_1__["default"](this.player.score);
        this.monster.drawMonster(this.player);
        this.player.health = Math.min(this.player.health+_mylib__WEBPACK_IMPORTED_MODULE_3__["default"].getRandomFromTo(20, 25+this.player.score*5), this.player.startHealth);
        this.player.setHealth();
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


class Monster{
    constructor(score){
        this.score = score;
        this.name = Monster.generateName();
        this.startHealth = Monster.generateHealth(this.score);
        this.health = this.startHealth;
    }

    drawMonster(){
        document.querySelector('.monsterName').innerHTML = this.name;
        document.querySelector('.round').innerHTML = "round " + (this.score+1);
        this.setHealth();

        const backgroundImages = ['arena1', 'arena2', 'arena3', 'arena4'];
        document.querySelector('.gamePage').classList.remove(backgroundImages[(this.score-1)%4]);
        //document.querySelector('.gamePage').classList.remove(backgroundImages[this.score%4+3]);
        document.querySelector('.gamePage').classList.add(backgroundImages[this.score%4]);
    }

    setHealth(){
        document.querySelector('.monsterHealthRemain').style.width = this.health/this.startHealth*100 + "%";
        document.querySelector('.monsterHealthRemain').innerHTML = this.health;
    }

    isAlive(){
        return this.health > 0;
    }



    static generateName(){
        const firstNames = ["Kazimir", "Voiclah", "Magamed", "Ludovik", "Genrich", "Sigizmund", "Aslanbek", "Bzdashek"];
        const secondNames = ["\"Hriply\"", "\"Shavka\"", "\"Bambula\"", "\"Baklan\"", "\"Brodyaga\"", "\"Vertuhai\""];
        const thirdNames = ["Vonuchkin", "Svininsky", "Zhirnidze", "Kakulka", "Soplivyan", "Gryaznulenko", "Potnyakovich"];
        const chosenFirstName = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomArrayElement(firstNames);
        const chosenSecondName = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomArrayElement(secondNames);
        const chosenThirdName = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomArrayElement(thirdNames);
        return chosenFirstName + ' ' + chosenSecondName + ' ' + chosenThirdName;
    }

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
    constructor(){}

    static getRandomArrayElement(array){
        return array[Math.floor(Math.random() * array.length)];
    }

    static getRandomFromTo(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;;
    }

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
    }

    drawPlayer(){
        document.querySelector('.playerName').innerHTML = this.name;
        this.setHealth();
    }

    setHealth(){
        document.querySelector('.playerHealthRemain').style.width = this.health/this.startHealth*100 + "%";
        document.querySelector('.playerHealthRemain').innerHTML = this.health;
    }

    fire(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerIdle');
        document.querySelector('.spritePlayer').classList.add('spritePlayerFire');
    }

    stopFire(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerFire');
        document.querySelector('.spritePlayer').classList.add('spritePlayerIdle');
    }

    healing(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerIdle');
        document.querySelector('.spritePlayer').classList.add('spritePlayerHeal');
    }

    stopHealing(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerHeal');
        document.querySelector('.spritePlayer').classList.add('spritePlayerIdle');
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

    open(){
        document.querySelector('.spellPage').style.display = "block";
        document.querySelector('.spellPage').addEventListener('click', () => {this.chooseSpell(event)});
    }

    chooseSpell(event){
        this.kind = event.target.getAttribute('id');
        document.querySelector('.spellPage').style.display = "none";
        document.querySelector('.taskPage').style.display = "block";
        this.task = new _task__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.task.generate();

    }

    atack(atacking, atacked){
        atacked.health = Math.max(atacked.health - _mylib__WEBPACK_IMPORTED_MODULE_1__["default"].getRandomFromTo(20, 25+atacked.score*5), 0);
        atacked.setHealth();
        atacking.fire();
        setTimeout(atacking.stopFire, 2000);
    }

    heal(player){
        player.health = Math.min(player.health+_mylib__WEBPACK_IMPORTED_MODULE_1__["default"].getRandomFromTo(20, 25+player.score*5), player.startHealth);
        player.setHealth();
        player.healing();
        setTimeout(player.stopHealing, 2000);
    }

    cast(player, monster){
        switch (this.kind){
            case 'swordSpell':
                this.task.isSolved() ? this.atack(player, monster) : this.atack(monster, player);
                break;
            case 'medicineSpell':
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
        const firstNumber = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomFromTo(0, 100);
        const secondNumber = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomFromTo(0, 100);
        const operations = ['+', '-', '*', '/'];
        const operation = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomArrayElement(operations);
        this.condition = firstNumber + operation + secondNumber;
        this.solution = eval(this.condition);
        document.querySelector('.taskCondition').innerHTML = this.condition;
    }

    isSolved(){
        return this.solution == this.answer;
    }

}

/* harmony default export */ __webpack_exports__["default"] = (Task);

/***/ })

/******/ });
//# sourceMappingURL=boundle.js.map