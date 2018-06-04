class Player{
    constructor(name){
        this.name = name;
        this.startHealth = 100;
        this.health = this.startHealth;
        this.score = 0;
    }

    drawPlayer(){
        document.querySelector('.playerImage').style.display = 'block';
        document.querySelector('.playerName').innerHTML = this.name;
        this.setHealth();
    }

    setHealth(){
        document.querySelector('.playerHealthRemain').style.width = this.health/this.startHealth*100 + "%";
        document.querySelector('.playerHealthRemain').innerHTML = this.health;
    }

    isAlive(){
        return this.health > 0;
    }


}

export default Player;