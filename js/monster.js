class Monster{
    constructor(person){
        this.name = Monster.generateName();
        this.health = Monster.generateHealth(person.score);
    }

    static generateName(){
        const firstNames = ["Kazimir", "Voiclah", "Magamed", "Ludovik", "Genrich", "Sigizmund", "Aslanbek", "Bzdashek"];
        const secondNames = ["\"Hriply\"", "\"Shavka\"", "\"Bambula\"", "\"Baklan\"", "\"Brodyaga\"", "\"Vertuhai\""];
        const thirdNames = ["Vonuchkin", "Svininsky", "Zhirnidze", "Kakulka", "Soplivyan", "Gryaznulenko", "Potnyakovich"];
        const chosenFirstName = Monster.getRandomArrayElement(firstNames);
        const chosenSecondName = Monster.getRandomArrayElement(secondNames);
        const chosenThirdName = Monster.getRandomArrayElement(thirdNames);
        return chosenFirstName + ' ' + chosenSecondName + ' ' + chosenThirdName;
    }

    static getRandomArrayElement(array){
        return array[Math.floor(Math.random() * array.length)];
    }

    static generateHealth(level){
        return Math.floor(30 + level*10 + Math.random() * 10);
    }

}