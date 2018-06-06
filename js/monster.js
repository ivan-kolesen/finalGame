import mylib from "./mylib";

class Monster{
    constructor(score){
        this.score = score;
        this.name = Monster.generateName();
        this.startHealth = Monster.generateHealth(this.score);
        this.health = this.startHealth;
        this.head;
        this.body;
        this.legs;
    }

    drawMonster(){
        document.querySelector('.monsterName').innerHTML = this.name;
        document.querySelector('.round').innerHTML = "round " + (this.score+1);
        this.setHealth();

        const backgroundImages = ['arena1', 'arena2', 'arena3', 'arena4'];



        document.querySelector('.gamePage').classList.add(backgroundImages[this.score%4]);
        document.querySelector('.gamePage').classList.remove(backgroundImages[(this.score-1)%4]);


        const headsIdle = ['spriteMonsterHeadIdle_first', 'spriteMonsterHeadIdle_second','spriteMonsterHeadIdle_third'];
        const bodiesIdle = ['spriteMonsterBodyIdle_first', 'spriteMonsterBodyIdle_second','spriteMonsterBodyIdle_third'];
        const legsIdle = ['spriteMonsterLegsIdle_first', 'spriteMonsterLegsIdle_second','spriteMonsterLegsIdle_third'];
        const headsFire = ['spriteMonsterHeadFire_first', 'spriteMonsterHeadFire_second','spriteMonsterHeadFire_third'];
        const bodiesFire = ['spriteMonsterBodyFire_first', 'spriteMonsterBodyFire_second','spriteMonsterBodyFire_third'];
        const legsFire = ['spriteMonsterLegsFire_first', 'spriteMonsterLegsFire_second','spriteMonsterLegsFire_third'];

        this.head = mylib.getRandomFromTo(0, headsIdle.length-1);
        this.body = mylib.getRandomFromTo(0, bodiesIdle.length-1);
        this.legs = mylib.getRandomFromTo(0, legsIdle.length-1);

        document.querySelector('.spriteMonsterHeadIdle').classList.add(headsIdle[this.head]);
        document.querySelector('.spriteMonsterBodyIdle').classList.add(bodiesIdle[this.body]);
        document.querySelector('.spriteMonsterLegsIdle').classList.add(legsIdle[this.legs]);


    }

    setHealth(){
        document.querySelector('.monsterHealthRemain').style.width = this.health/this.startHealth*100 + "%";
        document.querySelector('.monsterHealthRemain').innerHTML = this.health;
    }

    fire(){
        const headsIdle = ['spriteMonsterHeadIdle_first', 'spriteMonsterHeadIdle_second','spriteMonsterHeadIdle_third'];
        const bodiesIdle = ['spriteMonsterBodyIdle_first', 'spriteMonsterBodyIdle_second','spriteMonsterBodyIdle_third'];
        const legsIdle = ['spriteMonsterLegsIdle_first', 'spriteMonsterLegsIdle_second','spriteMonsterLegsIdle_third'];
        const headsFire = ['spriteMonsterHeadFire_first', 'spriteMonsterHeadFire_second','spriteMonsterHeadFire_third'];
        const bodiesFire = ['spriteMonsterBodyFire_first', 'spriteMonsterBodyFire_second','spriteMonsterBodyFire_third'];
        const legsFire = ['spriteMonsterLegsFire_first', 'spriteMonsterLegsFire_second','spriteMonsterLegsFire_third'];

        document.querySelector('.spriteMonster').children[0].classList.remove('spriteMonsterHeadIdle');
        document.querySelector('.spriteMonster').children[0].classList.remove(headsIdle[this.head]);
        document.querySelector('.spriteMonster').children[1].classList.remove('spriteMonsterBodyIdle');
        document.querySelector('.spriteMonster').children[1].classList.remove(bodiesIdle[this.body]);
        document.querySelector('.spriteMonster').children[2].classList.remove('spriteMonsterLegsIdle');
        document.querySelector('.spriteMonster').children[2].classList.remove(legsIdle[this.legs]);
        document.querySelector('.spriteMonster').children[0].classList.add('spriteMonsterHeadFire');
        document.querySelector('.spriteMonster').children[0].classList.add(headsFire[this.head]);
        document.querySelector('.spriteMonster').children[1].classList.add('spriteMonsterBodyFire');
        document.querySelector('.spriteMonster').children[1].classList.add(bodiesFire[this.body]);
        document.querySelector('.spriteMonster').children[2].classList.add('spriteMonsterLegsFire');
        document.querySelector('.spriteMonster').children[2].classList.add(legsFire[this.legs]);

    }

    stopFire(){
        const headsIdle = ['spriteMonsterHeadIdle_first', 'spriteMonsterHeadIdle_second','spriteMonsterHeadIdle_third'];
        const bodiesIdle = ['spriteMonsterBodyIdle_first', 'spriteMonsterBodyIdle_second','spriteMonsterBodyIdle_third'];
        const legsIdle = ['spriteMonsterLegsIdle_first', 'spriteMonsterLegsIdle_second','spriteMonsterLegsIdle_third'];
        const headsFire = ['spriteMonsterHeadFire_first', 'spriteMonsterHeadFire_second','spriteMonsterHeadFire_third'];
        const bodiesFire = ['spriteMonsterBodyFire_first', 'spriteMonsterBodyFire_second','spriteMonsterBodyFire_third'];
        const legsFire = ['spriteMonsterLegsFire_first', 'spriteMonsterLegsFire_second','spriteMonsterLegsFire_third'];

        document.querySelector('.spriteMonster').children[0].classList.remove('spriteMonsterHeadFire');
        document.querySelector('.spriteMonster').children[0].classList.remove(headsFire[this.head]);
        document.querySelector('.spriteMonster').children[1].classList.remove('spriteMonsterBodyFire');
        document.querySelector('.spriteMonster').children[1].classList.remove(bodiesFire[this.body]);
        document.querySelector('.spriteMonster').children[2].classList.remove('spriteMonsterLegsFire');
        document.querySelector('.spriteMonster').children[2].classList.remove(legsFire[this.legs]);
        document.querySelector('.spriteMonster').children[0].classList.add('spriteMonsterHeadIdle');
        document.querySelector('.spriteMonster').children[0].classList.add(headsIdle[this.head]);
        document.querySelector('.spriteMonster').children[1].classList.add('spriteMonsterBodyIdle');
        document.querySelector('.spriteMonster').children[1].classList.add(bodiesIdle[this.body]);
        document.querySelector('.spriteMonster').children[2].classList.add('spriteMonsterLegsIdle');
        document.querySelector('.spriteMonster').children[2].classList.add(legsIdle[this.legs]);
    }

    isAlive(){
        return this.health > 0;
    }



    static generateName(){
        const firstNames = ["Kazimir", "Voiclah", "Magamed", "Ludovik", "Genrich", "Sigizmund", "Aslanbek", "Bzdashek"];
        const secondNames = ["\"Hriply\"", "\"Shavka\"", "\"Bambula\"", "\"Baklan\"", "\"Brodyaga\"", "\"Vertuhai\""];
        const thirdNames = ["Vonuchkin", "Svininsky", "Zhirnidze", "Kakulko", "Soplivkin", "Gryaznulenko", "Potnyakovich"];
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