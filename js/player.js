class Player{
    constructor(name){
        this.name = name;
        this.startHealth = 100;
        this.health = this.startHealth;
        this.score = 0;
    }

    drawPlayer(){
        document.querySelector('.playerName').innerHTML = this.name;
        this.setHealth();
    }

    setHealth(){
        document.querySelector('.playerHealthRemain').style.width = this.health/this.startHealth*100 + "%";
        document.querySelector('.playerHealthRemain').innerHTML = this.health;
    }

    fire(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerIdle');
        document.querySelector('.spritePlayer').classList.add('spritePlayerFire');
    }

    stopFire(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerFire');
        document.querySelector('.spritePlayer').classList.add('spritePlayerIdle');
    }

    healing(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerIdle');
        document.querySelector('.spritePlayer').classList.add('spritePlayerHeal');
    }

    stopHealing(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerHeal');
        document.querySelector('.spritePlayer').classList.add('spritePlayerIdle');
    }

    isAlive(){
        return this.health > 0;
    }


}

export default Player;