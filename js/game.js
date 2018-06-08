import Player from "./player";
import Monster from "./monster";
import Spell from "./spell";
import mylib from "./mylib";
import {dictMonster} from "./dict";

class Game{
    constructor(){
        this.player;
        this.monster;
        this.spell;
        this.btnChooseSpell;
    }


    create(){
        document.querySelector('.regPage').style.display = "none";
        document.querySelector('.gamePage').style.display = "block";
        const playerName = document.querySelector('input').value;

        this.player = new Player(playerName);
        this.player.drawPlayer();

        this.monster = new Monster(this.player.score);
        this.monster.drawMonster(this.player);

        this.spell = new Spell();
        this.btnChooseSpell = this.spell.open.bind(this.spell);
        btnChooseSpell.addEventListener('click', this.btnChooseSpell);
        btnAnswer.addEventListener('click', () => {this.setAnswer()});

    }

    setAnswer(){
        this.spell.task.answer = answer.value.toString();
        document.getElementById('answer').value = '';
        document.querySelector('.taskPage').style.display = "none";
        btnChooseSpell.removeEventListener('click', this.btnChooseSpell);
        this.spell.cast(this.player, this.monster);
        setTimeout(this.isAlive.bind(this), 2000);
    }

    isAlive(){
        if(!this.monster.isAlive()){
            this.monster.die();
            setTimeout(()=>this.monster.stopDie(), 1999);
            setTimeout(()=>this.nextMonster(), 2000);
        }
        else if(!this.player.isAlive()){
            this.player.die();
            setTimeout(()=>this.finish(), 3000);
        }
        else{
            btnChooseSpell.addEventListener('click', this.btnChooseSpell);
        }
    }

    nextMonster(){
        const spriteMonster = document.querySelector('.spriteMonster');
        spriteMonster.children[0].classList.remove(dictMonster.headsIdle[this.monster.head]);
        spriteMonster.children[1].classList.remove(dictMonster.bodiesIdle[this.monster.body]);
        spriteMonster.children[2].classList.remove(dictMonster.legsIdle[this.monster.legs]);
        btnChooseSpell.addEventListener('click', this.btnChooseSpell);

        this.player.score +=1;
        this.monster = new Monster(this.player.score);
        this.monster.drawMonster(this.player);
        this.player.health = Math.min(this.player.health+mylib.getRandomFromTo(20, 25+this.player.score*5), this.player.startHealth);
        this.player.drawHealth();
    }

    finish(){
        document.querySelector('.gamePage').style.display = "none";
        document.querySelector('.scoresPage').style.display = "block";
        localStorage.setItem('game' + Date.now(), this.player.name + ',' + (this.player.score+1));
        mylib.createHighscoresTable();
    }

}

export default Game;