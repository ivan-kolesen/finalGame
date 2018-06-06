import Player from "./player";
import Monster from "./monster";
import Spell from "./spell";
import mylib from "./mylib";

class Game{
    constructor(){
        this.player;
        this.monster;
        this.spell;
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
        btnChooseSpell.addEventListener('click', () => {this.spell.open()});
        btnAnswer.addEventListener('click', () => {this.setAnswer()});

    }

    setAnswer(){
        this.spell.task.answer = answer.value;
        answer.value = '';
        document.querySelector('.taskPage').style.display = "none";
        this.spell.cast(this.player, this.monster);
        if(!this.monster.isAlive()){
            setTimeout(()=>this.monsterKilled(), 5000);
        }
        if(!this.player.isAlive()){
            this.player.die();
            setTimeout(()=>this.playerKilled(), 5000);
        }

    }

    monsterKilled(){
        this.player.score +=1;
        this.monster = new Monster(this.player.score);
        this.monster.drawMonster(this.player);
        this.player.health = Math.min(this.player.health+mylib.getRandomFromTo(20, 25+this.player.score*5), this.player.startHealth);
        this.player.setHealth();
    }

    playerKilled(){
        document.querySelector('.gamePage').style.display = "none";
        document.querySelector('.scoresPage').style.display = "block";
        localStorage.setItem('game' + Date.now(), this.player.name + ',' + this.player.score);
        mylib.createHighscoresTable();
    }

}

export default Game;