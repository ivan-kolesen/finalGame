class mylib{

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

export default mylib;