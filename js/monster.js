import mylib from "./mylib";
import {dictMonster} from "./dict";

class Monster{
    constructor(score){
        this.score = score;
        this.name = Monster.generateName();
        this.startHealth = Monster.generateHealth(this.score);
        this.health = this.startHealth;
        this.head;
        this.body;
        this.legs;
        this.audioFire = new Audio();
        this.audioGrenadePin = new Audio();
        this.audioGrenade = new Audio();
    }

    drawMonster(){
        document.querySelector('.monsterName').innerHTML = this.name;
        document.querySelector('.round').innerHTML = "round " + (this.score+1);
        this.drawHealth();
        this.createSounds();

        /*add new background and clear the previous*/
        document.querySelector('.gamePage').classList.add(dictMonster.backgroundImages[this.score % dictMonster.backgroundImages.length]);
        document.querySelector('.gamePage').classList.remove(dictMonster.backgroundImages[(this.score-1) % dictMonster.backgroundImages.length]);

        /*get random numbers to take head, body, legs from dictionary by these numbers */
        this.head = mylib.getRandomFromTo(0, dictMonster.headsIdle.length-1);
        this.body = mylib.getRandomFromTo(0, dictMonster.bodiesIdle.length-1);
        this.legs = mylib.getRandomFromTo(0, dictMonster.legsIdle.length-1);

        /*draw the monster from taken head, body and legs*/
        document.querySelector('.spriteMonsterHeadIdle').classList.add(dictMonster.headsIdle[this.head]);
        document.querySelector('.spriteMonsterBodyIdle').classList.add(dictMonster.bodiesIdle[this.body]);
        document.querySelector('.spriteMonsterLegsIdle').classList.add(dictMonster.legsIdle[this.legs]);
    }

    /*sets the green line of health and puts a number of health in html*/
    drawHealth(){
        document.querySelector('.monsterHealthRemain').style.width = this.health/this.startHealth*100 + "%";
        document.querySelector('.monsterHealthRemain').innerHTML = this.health;
    }

    createSounds(){
        this.audioFire.preload = 'auto';
        this.audioFire.volume = 1;
        this.audioFire.src = './audio/monsterFire.mp3';
        this.audioGrenade.preload = 'auto';
        this.audioGrenade.volume = 1;
        this.audioGrenade.src = './audio/grenade.mp3';
        this.audioGrenadePin.preload = 'auto';
        this.audioGrenadePin.volume = 1;
        this.audioGrenadePin.src = './audio/grenade0.mp3';
    }

    /*removes classes of idle parts of the monster and sets classes of fire parts of the monster*/
    fire(){
        this.audioFire.play();
        const spriteMonster = document.querySelector('.spriteMonster');
        spriteMonster.children[0].classList.remove('spriteMonsterHeadIdle');
        spriteMonster.children[0].classList.remove(dictMonster.headsIdle[this.head]);
        spriteMonster.children[1].classList.remove('spriteMonsterBodyIdle');
        spriteMonster.children[1].classList.remove(dictMonster.bodiesIdle[this.body]);
        spriteMonster.children[2].classList.remove('spriteMonsterLegsIdle');
        spriteMonster.children[2].classList.remove(dictMonster.legsIdle[this.legs]);
        spriteMonster.children[0].classList.add('spriteMonsterHeadFire');
        spriteMonster.children[0].classList.add(dictMonster.headsFire[this.head]);
        spriteMonster.children[1].classList.add('spriteMonsterBodyFire');
        spriteMonster.children[1].classList.add(dictMonster.bodiesFire[this.body]);
        spriteMonster.children[2].classList.add('spriteMonsterLegsFire');
        spriteMonster.children[2].classList.add(dictMonster.legsFire[this.legs]);

    }

    /*removes classes of fire parts of the monster and sets classes of idle parts of the monster*/
    stopFire(){
        const spriteMonster = document.querySelector('.spriteMonster');
        spriteMonster.children[0].classList.remove('spriteMonsterHeadFire');
        spriteMonster.children[0].classList.remove(dictMonster.headsFire[this.head]);
        spriteMonster.children[1].classList.remove('spriteMonsterBodyFire');
        spriteMonster.children[1].classList.remove(dictMonster.bodiesFire[this.body]);
        spriteMonster.children[2].classList.remove('spriteMonsterLegsFire');
        spriteMonster.children[2].classList.remove(dictMonster.legsFire[this.legs]);
        spriteMonster.children[0].classList.add('spriteMonsterHeadIdle');
        spriteMonster.children[0].classList.add(dictMonster.headsIdle[this.head]);
        spriteMonster.children[1].classList.add('spriteMonsterBodyIdle');
        spriteMonster.children[1].classList.add(dictMonster.bodiesIdle[this.body]);
        spriteMonster.children[2].classList.add('spriteMonsterLegsIdle');
        spriteMonster.children[2].classList.add(dictMonster.legsIdle[this.legs]);
    }

    /*removes classes of idle parts of the monster and sets classes of hurt parts of the monster*/
    hurt(){
        const spriteMonster = document.querySelector('.spriteMonster');
        spriteMonster.children[0].classList.remove('spriteMonsterHeadIdle');
        spriteMonster.children[0].classList.remove(dictMonster.headsIdle[this.head]);
        spriteMonster.children[1].classList.remove('spriteMonsterBodyIdle');
        spriteMonster.children[1].classList.remove(dictMonster.bodiesIdle[this.body]);
        spriteMonster.children[2].classList.remove('spriteMonsterLegsIdle');
        spriteMonster.children[2].classList.remove(dictMonster.legsIdle[this.legs]);
        spriteMonster.children[0].classList.add('spriteMonsterHeadHurt');
        spriteMonster.children[0].classList.add(dictMonster.headsHurt[this.head]);
        spriteMonster.children[1].classList.add('spriteMonsterBodyHurt');
        spriteMonster.children[1].classList.add(dictMonster.bodiesHurt[this.body]);
        spriteMonster.children[2].classList.add('spriteMonsterLegsHurt');
        spriteMonster.children[2].classList.add(dictMonster.legsHurt[this.legs]);
    }

    /*removes classes of hurt parts of the monster and sets classes of idle parts of the monster*/
    stopHurt(){
        const spriteMonster = document.querySelector('.spriteMonster');
        spriteMonster.children[0].classList.remove('spriteMonsterHeadHurt');
        spriteMonster.children[0].classList.remove(dictMonster.headsHurt[this.head]);
        spriteMonster.children[1].classList.remove('spriteMonsterBodyHurt');
        spriteMonster.children[1].classList.remove(dictMonster.bodiesHurt[this.body]);
        spriteMonster.children[2].classList.remove('spriteMonsterLegsHurt');
        spriteMonster.children[2].classList.remove(dictMonster.legsHurt[this.legs]);
        spriteMonster.children[0].classList.add('spriteMonsterHeadIdle');
        spriteMonster.children[0].classList.add(dictMonster.headsIdle[this.head]);
        spriteMonster.children[1].classList.add('spriteMonsterBodyIdle');
        spriteMonster.children[1].classList.add(dictMonster.bodiesIdle[this.body]);
        spriteMonster.children[2].classList.add('spriteMonsterLegsIdle');
        spriteMonster.children[2].classList.add(dictMonster.legsIdle[this.legs]);
    }

    die(){
        setTimeout(()=>{this.audioGrenadePin.play()}, 130);
        setTimeout(()=>{this.audioGrenade.play()}, 400);
        const spriteMonster = document.querySelector('.spriteMonster');
        spriteMonster.children[0].classList.remove('spriteMonsterHeadIdle');
        spriteMonster.children[0].classList.remove(dictMonster.headsIdle[this.head]);
        spriteMonster.children[1].classList.remove('spriteMonsterBodyIdle');
        spriteMonster.children[1].classList.remove(dictMonster.bodiesIdle[this.body]);
        spriteMonster.children[2].classList.remove('spriteMonsterLegsIdle');
        spriteMonster.children[2].classList.remove(dictMonster.legsIdle[this.legs]);
        spriteMonster.children[0].classList.add('spriteMonsterHeadDie');
        spriteMonster.children[0].classList.add(dictMonster.headsDie[this.head]);
        spriteMonster.children[1].classList.add('spriteMonsterBodyDie');
        spriteMonster.children[1].classList.add(dictMonster.bodiesDie[this.body]);
        spriteMonster.children[2].classList.add('spriteMonsterLegsDie');
        spriteMonster.children[2].classList.add(dictMonster.legsDie[this.legs]);
    }

    stopDie(){
        const spriteMonster = document.querySelector('.spriteMonster');
        spriteMonster.children[0].classList.remove('spriteMonsterHeadDie');
        spriteMonster.children[0].classList.remove(dictMonster.headsDie[this.head]);
        spriteMonster.children[1].classList.remove('spriteMonsterBodyDie');
        spriteMonster.children[1].classList.remove(dictMonster.bodiesDie[this.body]);
        spriteMonster.children[2].classList.remove('spriteMonsterLegsDie');
        spriteMonster.children[2].classList.remove(dictMonster.legsDie[this.legs]);
        spriteMonster.children[0].classList.add('spriteMonsterHeadIdle');
        spriteMonster.children[0].classList.add(dictMonster.headsIdle[this.head]);
        spriteMonster.children[1].classList.add('spriteMonsterBodyIdle');
        spriteMonster.children[1].classList.add(dictMonster.bodiesIdle[this.body]);
        spriteMonster.children[2].classList.add('spriteMonsterLegsIdle');
        spriteMonster.children[2].classList.add(dictMonster.legsIdle[this.legs]);
    }


    /*checks if the monster is alive*/
    isAlive(){
        return this.health > 0;
    }

    /*generates the monster's name from three parts*/
    static generateName(){
        const chosenFirstName = mylib.getRandomArrayElement(dictMonster.firstNames);
        const chosenSecondName = mylib.getRandomArrayElement(dictMonster.secondNames);
        const chosenThirdName = mylib.getRandomArrayElement(dictMonster.thirdNames);
        return chosenFirstName + ' ' + chosenSecondName + ' ' + chosenThirdName;
    }

    /*generates the monster's health depending on the level*/
    static generateHealth(score){
        return (30 + score*10 + mylib.getRandomFromTo(0, 10));
    }
}

export default Monster;