class Player{
    constructor(name){
        this.name = name;
        this.startHealth = 100;
        this.health = this.startHealth;
        this.score = 0;
        this.audioFire = new Audio();
        this.audioHeal = new Audio();
    }

    drawPlayer(){
        document.querySelector('.playerName').innerHTML = this.name;
        this.drawHealth();
        this.createSounds();
    }

    drawHealth(){
        document.querySelector('.playerHealthRemain').style.width = this.health/this.startHealth*100 + "%";
        document.querySelector('.playerHealthRemain').innerHTML = this.health;
    }

    createSounds(){
        this.audioFire.preload = 'auto';
        this.audioFire.volume = 1;
        this.audioFire.src = './audio/playerFire.mp3';
        this.audioHeal.preload = 'auto';
        this.audioHeal.volume = 1;
        this.audioHeal.src = './audio/playerHeal.mp3';
    }

    fire(){
        this.audioFire.play();
        document.querySelector('.spritePlayer').classList.remove('spritePlayerIdle');
        document.querySelector('.spritePlayer').classList.add('spritePlayerFire');
    }

    stopFire(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerFire');
        document.querySelector('.spritePlayer').classList.add('spritePlayerIdle');
    }

    healing(){
        this.audioHeal.play();
        document.querySelector('.spritePlayer').classList.remove('spritePlayerIdle');
        document.querySelector('.spritePlayer').classList.add('spritePlayerHeal');
    }

    stopHealing(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerHeal');
        document.querySelector('.spritePlayer').classList.add('spritePlayerIdle');
    }

    hurt(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerIdle');
        document.querySelector('.spritePlayer').classList.add('spritePlayerHurt');
    }

    stopHurt(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerHurt');
        document.querySelector('.spritePlayer').classList.add('spritePlayerIdle');
    }

    die(){
        document.querySelector('.spritePlayer').classList.remove('spritePlayerIdle');
        document.querySelector('.spritePlayer').classList.add('spritePlayerDie');
    }

    isAlive(){
        return this.health > 0;
    }


}

export default Player;