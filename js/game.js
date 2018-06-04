class Game{
    constructor(){
        this.player;
        this.monster;
        this.spell;
    }


    create(){
        document.querySelector('.regPage').style.display = "none";
        document.querySelector('.gamePage').style.display = "block";
        const playerName = document.querySelector('input').getAttribute('value');

        this.player = new Player(playerName);
        this.player.drawPlayer();

        this.monster = new Monster(this.player.score);
        this.monster.drawMonster(this.player);

        this.spell = new Spell();
        btnChooseSpell.addEventListener('click', () => {this.spell.open()});
        btnAnswer.addEventListener('click', () => {this.setAnswer()});



    }

    setAnswer(){
        const HELPME = document.querySelector('#answer').getAttribute('value');
        document.querySelector('#answer').setAttribute('value', '');
        this.spell.task.answer = 10;
        document.querySelector('.taskPage').style.display = "none";
        this.spell.cast(this.player, this.monster);
        if(!this.monster.isAlive()){
            this.player.score +=1;
            this.monster = new Monster(this.player.score);
            this.monster.drawMonster(this.player);
        }
        if(!this.player.isAlive()){
            document.querySelector('.gamePage').style.display = "none";
            document.querySelector('.scoresPage').style.display = "block";
        }



    }









}


class Player{
    constructor(name){
        this.name = name;
        this.startHealth = 100;
        this.health = this.startHealth;
        this.score = 0;
    }

    drawPlayer(){
        document.querySelector('.playerImage').style.display = 'block';
        document.querySelector('.playerName').innerHTML = this.name;
        this.setHealth();
    }

    setHealth(){
        document.querySelector('.playerHealthRemain').style.width = this.health/this.startHealth*100 + "%";
        document.querySelector('.playerHealthRemain').innerHTML = this.health;
    }

    isAlive(){
        return this.health > 0;
    }


}

class Monster{
    constructor(score){
        this.level = score;
        this.name = Monster.generateName();
        this.startHealth = Monster.generateHealth(this.level);
        this.health = this.startHealth;
    }

    drawMonster(){
        document.querySelector('.monsterImage').style.display = 'block';
        document.querySelector('.monsterName').innerHTML = this.name;
        this.setHealth();

        const backgroundImages = ['arena1', 'arena2', 'arena3', 'arena4'];
        document.querySelector('.gamePage').classList.remove(backgroundImages[this.level%4-1]);
        document.querySelector('.gamePage').classList.remove(backgroundImages[this.level%4+3]);
        document.querySelector('.gamePage').classList.add(backgroundImages[this.level%4]);
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
        const chosenFirstName = getRandomArrayElement(firstNames);
        const chosenSecondName = getRandomArrayElement(secondNames);
        const chosenThirdName = getRandomArrayElement(thirdNames);
        return chosenFirstName + ' ' + chosenSecondName + ' ' + chosenThirdName;
    }

    static generateHealth(level){
        return Math.floor(30 + level*10 + Math.random() * 10);
    }


}

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
        this.task = new Task();
        this.task.generate();

    }

    atack(obj){
        obj.health -= 100;
        obj.setHealth();
    }

    heal(obj){
        obj.health = Math.min(obj.health+10, obj.startHealth);
        obj.setHealth();
    }

    cast(player, monster){
        switch (this.kind){
            case 'swordSpell':
                this.task.isSolved() ? this.atack(monster) : this.atack(player);
                break;
            case 'medicineSpell':
                this.task.isSolved() ? this.heal(player) : this.atack(player);
                break;
            default:
                null;
        }

    }





}




class Task{
    constructor(){
        this.condition;
        this.solution;
        this.answer;
    }

    generate(){
        const firstNumber = Math.floor(Math.random()*100);
        const secondNumber = Math.floor(Math.random()*100);
        const operations = ['+', '-', '*', '/'];
        const operation = getRandomArrayElement(operations);
        this.condition = firstNumber + operation + secondNumber;
        this.solution = eval(this.condition);
        document.querySelector('.taskCondition').innerHTML = this.condition;
        //console.log(this);
    }

    isSolved(){
        return this.solution == this.answer;
    }



}




function getRandomArrayElement(array){
    return array[Math.floor(Math.random() * array.length)];
}












const game = new Game();
const myGame = game.create.bind(game);
btnStart.addEventListener('click', myGame);


