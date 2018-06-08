import mylib from "./mylib";

class Task{
    constructor(){
        this.condition;
        this.solution;
        this.answer;
    }

    generate(){
        const tasks = [this.arithmetics];
        const currentTask = mylib.getRandomArrayElement(tasks).bind(this);
        currentTask();

    }

    arithmetics(){
        const firstNumber = mylib.getRandomFromTo(0, 100);
        const secondNumber = mylib.getRandomFromTo(0, 100);
        const operations = ['+', '-', '*', '/'];
        const operation = mylib.getRandomArrayElement(operations);
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

export default Task;