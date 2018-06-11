import mylib from "./mylib";
import {dictTranslateTask, dictListeningTask, dictCapitalsTask, dictSortTask, dictRedundantTask} from "./dict";

class Task{
    constructor(){
        this.type;
        this.condition;
        this.solution = [];
        this.answer;
    }

    generate(){
        document.getElementById('tempMedia').innerHTML = '';
        document.getElementById('answer').value = '';
        const tasks = [this.arithmetics, this.translate, this.listening, this.capitals, this.sort, this.redundant];
        const currentTask = mylib.getRandomArrayElement(tasks).bind(this);
        currentTask();

    }

    arithmetics(){
        this.type = "arithmetics";
        const firstNumber = mylib.getRandomFromTo(0, 100);
        const secondNumber = mylib.getRandomFromTo(0, 100);
        const operations = ['+', '-', '*', '/'];
        const operation = mylib.getRandomArrayElement(operations);
        this.condition = firstNumber + operation + secondNumber;
        this.solution.push(eval(this.condition).toString());
        document.querySelector('.taskDescription').innerHTML = "solve the task:<br>" + this.condition;
    }

    translate(){
        this.type = "translate";
        const arrayOfWords = Object.keys(dictTranslateTask);
        const arrayOfWordsLength = arrayOfWords.length;
        this.condition = arrayOfWords[mylib.getRandomFromTo(0, arrayOfWordsLength-1)];
        this.solution = dictTranslateTask[this.condition];

        document.querySelector('.taskDescription').innerHTML = "translate into russian:<br>" + this.condition;
    }

    listening(){
        this.type = "listening";
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

    capitals(){
        this.type = "capitals";
        const arrayOfWords = Object.keys(dictCapitalsTask);
        const arrayOfWordsLength = arrayOfWords.length;
        this.condition = arrayOfWords[mylib.getRandomFromTo(0, arrayOfWordsLength-1)];
        this.solution = dictCapitalsTask[this.condition];

        const insertingFlag = document.createElement("img");
        insertingFlag.setAttribute("src", this.condition);
        document.getElementById('tempMedia').appendChild(insertingFlag);
        document.querySelector('.taskDescription').innerHTML = "what is the capital of:";
    }

    sort(){
        this.type = "sort";
        document.getElementById('answer').style.display = "none";

        const arrayOfWords = Object.keys(dictSortTask);
        const arrayOfWordsLength = arrayOfWords.length;
        this.condition = arrayOfWords[mylib.getRandomFromTo(0, arrayOfWordsLength-1)];
        this.solution = dictSortTask[this.condition];

        const chosenWordShuffledArr = mylib.shuffle(this.condition.split(""));

        const ul = document.createElement("ul");
        ul.classList.add("sortable");

        for(let i=0;i<chosenWordShuffledArr.length;i++){
            const li = document.createElement("li");
            li.innerHTML = chosenWordShuffledArr[i];
            ul.appendChild(li);
        }

        document.getElementById('tempMedia').appendChild(ul);

        $( function() {
            $(".sortable").sortable().disableSelection();
        } );

        document.querySelector('.taskDescription').innerHTML = "put the letters in the correct order:";
    }

    redundant(){
        this.type = "redundant";
        document.getElementById('answer').style.display = "none";

        const arrayOfWords = Object.keys(dictRedundantTask);
        const arrayOfWordsLength = arrayOfWords.length;
        this.solution.push(arrayOfWords[mylib.getRandomFromTo(0, arrayOfWordsLength-1)]);
        this.condition = dictRedundantTask[this.solution];

        const media = document.getElementById('tempMedia');
        for(let i = 0; i < 3; i++){
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "redundantPic");
            input.setAttribute("value", this.condition[i]);
            const img = document.createElement("img");
            img.setAttribute("src", this.condition[i]);
            label.appendChild(input);
            label.appendChild(img);
            media.appendChild(label);
        }

        document.querySelector('.taskDescription').innerHTML = "choose the redundant picture:";
    }



    isSolved(){
        return this.solution.indexOf(this.answer.toLowerCase()) > -1;
    }

}

export default Task;