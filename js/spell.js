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

    atack(obj){
        obj.health -= mylib.getRandomFromTo(20, 25+obj.score*5);
        obj.setHealth();
    }

    heal(obj){
        obj.health = Math.min(obj.health+mylib.getRandomFromTo(20, 25+obj.score*5), obj.startHealth);
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

export default Spell;