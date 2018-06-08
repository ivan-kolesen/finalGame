import mylib from "./mylib";
import {dictTranslateTask} from "./dict";

class Task{
    constructor(){
        this.condition;
        this.solution = [];
        this.answer;
    }

    generate(){
        const tasks = [this.arithmetics, this.translate];
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
        document.querySelector('.taskCondition').innerHTML = "solve the task:<br>" + this.condition;
    }

    translate(){
        const arrayOfWords = Object.keys(dictTranslateTask);
        const arrayOfWordsLength = arrayOfWords.length;
        this.condition = arrayOfWords[mylib.getRandomFromTo(0, arrayOfWordsLength-1)];
        this.solution = dictTranslateTask[this.condition];

        document.querySelector('.taskCondition').innerHTML = "translate into russian:<br>" + this.condition;
    }

    isSolved(){
        return this.solution.indexOf(this.answer.toLowerCase()) > -1;
    }

}

export default Task;