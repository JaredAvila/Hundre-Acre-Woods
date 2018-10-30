class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`This Ninja is named ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name}\n Strength: ${this.strength}\n Speed: ${this.speed}`)
    }
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    speakWisom() {
        this.drinkSake();
        console.log(`Thats some good sake! My health is now ${this.health}`);
    }
}