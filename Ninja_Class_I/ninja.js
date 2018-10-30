function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.sayName = function(){
        console.log(this.name);
    }
    this.showStats = function(){
        console.log("Name: " + this.name + ". Strength: " + strength + ". Speed: " + speed);
    }
    this.drinkSake = function(){
        this.health += 10;
    }
}