import Task from "./task";
import mylib from "./mylib";

class Spell{
    constructor(){
        this.kind;
        this.task;
    }

    /*opens window with choise of spell type*/
    open(){
        document.querySelector('.spellPage').style.display = "block";
    }

    /*sets the chosen spell type into object's property and creates a task*/
    chooseSpell(event){
        this.kind = event.target.getAttribute('id');
        document.querySelector('.spellPage').style.display = "none";
        document.querySelector('.taskPage').style.display = "block";
        this.task = new Task();
        this.task.generate();
    }

    /*if the chosen type of spell was "atack", the player atacks the monster or the monster atacks the player */
    atack(atacking, atacked){
        atacked.health = Math.max(atacked.health - mylib.getRandomFromTo(20, 25+atacked.score), 0);
        atacked.drawHealth();
        atacking.fire();
        atacked.hurt();
        setTimeout(atacking.stopFire.bind(atacking), 2000);
        setTimeout(atacked.stopHurt.bind(atacked), 2000);
    }

    /*if the chosen type of spell was "heal" the player healing himself*/
    heal(player){
        player.health = Math.min(player.health+mylib.getRandomFromTo(20, 25+player.score*5), player.startHealth);
        player.drawHealth();
        player.healing();
        setTimeout(player.stopHealing, 2000);
    }

    cast(player, monster){
        switch (this.kind){
            case 'atackSpell':
                this.task.isSolved() ? this.atack(player, monster) : this.atack(monster, player);
                break;
            case 'healSpell':
                this.task.isSolved() ? this.heal(player) : this.atack(monster, player);
                break;
            default:
                null;
        }

    }
}

export default Spell;