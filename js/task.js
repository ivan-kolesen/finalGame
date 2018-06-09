import mylib from "./mylib";
import {dictTranslateTask, dictListeningTask} from "./dict";

class Task{
    constructor(){
        this.condition;
        this.solution = [];
        this.answer;
    }

    generate(){
        document.getElementById('tempMedia').innerHTML = '';
        document.getElementById('answer').value = '';
        const tasks = [this.arithmetics, this.translate, this.listening];
        const currentTask = mylib.getRandomArrayElement(tasks).bind(this);
        currentTask();

    }

    arithmetics(){
        const firstNumber = mylib.getRandomFromTo(0, 100);
        const secondNumber = mylib.getRandomFromTo(0, 100);
        const operations = ['+', '-', '*', '/'];
        const operation = mylib.getRandomArrayElement(operations);
        this.condition = firstNumber + operation + secondNumber;
        this.solution.push(eval(this.condition).toString());
        document.querySelector('.taskDescription').innerHTML = "solve the task:<br>" + this.condition;
    }

    translate(){
        const arrayOfWords = Object.keys(dictTranslateTask);
        const arrayOfWordsLength = arrayOfWords.length;
        this.condition = arrayOfWords[mylib.getRandomFromTo(0, arrayOfWordsLength-1)];
        this.solution = dictTranslateTask[this.condition];

        document.querySelector('.taskDescription').innerHTML = "translate into russian:<br>" + this.condition;
    }

    listening(){
        const arrayOfWords = Object.keys(dictListeningTask);
        const arrayOfWordsLength = arrayOfWords.length;
        this.condition = arrayOfWords[mylib.getRandomFromTo(0, arrayOfWordsLength-1)];
        this.solution.push(dictListeningTask[this.condition]);

        const insertingAudio = document.createElement("audio");
        insertingAudio.setAttribute("src", this.condition);
        insertingAudio.setAttribute("controls", "");
        document.getElementById('tempMedia').appendChild(insertingAudio);
        document.querySelector('.taskDescription').innerHTML = "type the word you heard";
    }

    isSolved(){
        return this.solution.indexOf(this.answer.toLowerCase()) > -1;
    }

}

export default Task;