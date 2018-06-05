import Task from "./task";
import mylib from "./mylib";

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

    atack(atacking, atacked){
        atacked.health = Math.max(atacked.health - mylib.getRandomFromTo(20, 25+atacked.score*5), 0);
        atacked.setHealth();
        atacking.fire();
        setTimeout(atacking.stopFire, 2000);
    }

    heal(player){
        player.health = Math.min(player.health+mylib.getRandomFromTo(20, 25+player.score*5), player.startHealth);
        player.setHealth();
        player.healing();
        setTimeout(player.stopHealing, 2000);
    }

    cast(player, monster){
        switch (this.kind){
            case 'swordSpell':
                this.task.isSolved() ? this.atack(player, monster) : this.atack(monster, player);
                break;
            case 'medicineSpell':
                this.task.isSolved() ? this.heal(player) : this.atack(monster, player);
                break;
            default:
                null;
        }

    }
}

export default Spell;