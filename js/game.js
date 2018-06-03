class Game{
    constructor(){

    }

    create(){
        document.querySelector('.regPage').style.display = "none";
        document.querySelector('.gamePage').style.display = "block";
        const playerName = document.querySelector('input').getAttribute('value');

        const player = new Player(playerName);
        player.drawPlayer();

        const monster = new Monster(player);
        monster.drawMonster(player);

        btnChooseSpell.addEventListener('click', Game.startRound);

    }

    static startRound(){
        document.querySelector('.spellPage').style.display = "block";
        const spell = new Spell();

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


}

class Monster{
    constructor(player){
        this.name = Monster.generateName();
        this.startHealth = Monster.generateHealth(player.score);
        this.health = this.startHealth;
    }

    drawMonster(player){
        document.querySelector('.monsterImage').style.display = 'block';
        document.querySelector('.monsterName').innerHTML = this.name;
        this.setHealth();

        const backgroundImages = ['arena1', 'arena2', 'arena3', 'arena4'];
        document.querySelector('.gamePage').classList.add(backgroundImages[player.score]);
    }

    setHealth(){
        document.querySelector('.monsterHealthRemain').style.width = this.health/this.startHealth*100 + "%";
        document.querySelector('.monsterHealthRemain').innerHTML = this.health;
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

    }
}




function getRandomArrayElement(array){
    return array[Math.floor(Math.random() * array.length)];
}












const game = new Game();
btnStart.addEventListener('click', game.create);


