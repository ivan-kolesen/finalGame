import mylib from "./mylib";

class Task{
    constructor(){
        this.condition;
        this.solution;
        this.answer;
    }

    generate(){
        const firstNumber = mylib.getRandomFromTo(0, 100);
        const secondNumber = mylib.getRandomFromTo(0, 100);
        const operations = ['+', '-', '*', '/'];
        const operation = mylib.getRandomArrayElement(operations);
        this.condition = firstNumber + operation + secondNumber;
        this.solution = eval(this.condition);
        document.querySelector('.taskCondition').innerHTML = this.condition;
    }

    isSolved(){
        return this.solution == this.answer;
    }

}

export default Task;