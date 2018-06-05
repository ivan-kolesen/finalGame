import mylib from "./mylib";

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
        const chosenFirstName = mylib.getRandomArrayElement(firstNames);
        const chosenSecondName = mylib.getRandomArrayElement(secondNames);
        const chosenThirdName = mylib.getRandomArrayElement(thirdNames);
        return chosenFirstName + ' ' + chosenSecondName + ' ' + chosenThirdName;
    }

    static generateHealth(score){
        return (30 + score*10 + mylib.getRandomFromTo(0, 10));
    }
}

export default Monster;