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
    this.punch = function(ninja){
        if(ninja instanceof Ninja){
            ninja.health -= 5;
            console.log(this.name + " punched " + ninja.name + ". " + ninja.name + " loses 5 health. Bummer.");
        } else{
            console.log("thank aint a Ninja foo! Do not punch the innocent!");
        }
    } 
    this.kick = function(ninja){
        if(ninja instanceof Ninja){
            ninja.health -= (strength*15);
        console.log(this.name + " kicked " + ninja.name + ". " + ninja.name + " loses a lot of health (if "+ this.name +" is super strong). Bummer.");
        } else{
            console.log("thank aint a Ninja foo! Do not kick the innocent!");
        }
    }
}