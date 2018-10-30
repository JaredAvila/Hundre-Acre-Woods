
var winnie = {
    character: "Winnie the Pooh",
    greet: function () {
        console.log("Oh bother!");
    }
}
var chrisR = {
    character: "Christopher Robin",
    greet: function () {
        console.log("I'm a sociopath!");
    }
}
var rabbit = {
    character: "Rabbit",
    greet: function () {
        console.log("Oh my!");
    }
}
var tigger = {
    character: "Tigger",
    north: winnie,
    greet: function () {
        console.log("The wonderful thing about Tiggers!");
    }
}
var piglet = {
    character: "Piglet",
    east: winnie,
    greet: function () {
        console.log("Where's pooh?");
    }
}
var owl = {
    character: "Owl",
    east: chrisR,
    south: piglet,
    greet: function () {
        console.log("Who?!");
    }
}
var bees = {
    character: "Bees",
    north: rabbit,
    west: winnie,
    greet: function () {
        console.log("Buzzzzzzzzzzzzzzzzzzz!");
    }
}
var gopher = {
    character: "Gopher",
    west: rabbit,
    greet: function () {
        console.log("I don't know what I'm even doing here!");
    }
}
var kanga = {
    character: "Kanga",
    south: chrisR,
    greet: function () {
        console.log("Hip hip the hippy to the hippy to the hip hip hop you don't stop!");
    }
}
var eeyore = {
    character: "Eeyore",
    south: kanga,
    greet: function () {
        console.log("I'm depress and its funny?!?! How rude!");
    }
}
var heffalumps = {
    character: "Heffalumps",
    west: eeyore,
    greet: function () {
        console.log("I'm a what now?");
    }
}
winnie.north = chrisR
winnie.south = tigger
winnie.west = piglet
winnie.east = bees
chrisR.north = kanga
chrisR.south = winnie
chrisR.west = owl
chrisR.east = rabbit
rabbit.south = bees
rabbit.west = chrisR
rabbit.east = gopher
piglet.north = owl
kanga.north = eeyore
eeyore.east = heffalumps
var player = {
    location: tigger,
    honey: false,
    pickup : function() {
        if(player.location.character !== "Bees"){
            console.log("No honey here!");
        } else{
            player.honey = true;
            console.log("First you get they honey, then you get the power, then you get the women!");
            mission();
        }
    },
    drop : function(){
        if(player.location === delivery){
            alert("You devliered the honey to " + player.location.character);
            player.honey = false;
        } else {
            alert("Uhmmm. I dont need any honey, thanks.");
        }
    }
}
var delivery = 0;
function mission() {
    var houseNum = Math.floor(Math.random() * 10 + 1);
    var houses = {
        1: winnie,
        2: chrisR,
        3: tigger,
        4: rabbit,
        5: piglet,
        6: kanga, 
        8: owl,
        9: gopher,
        10: eeyore,
        7: heffalumps
    }
    delivery = houses[houseNum];
    console.log("Deliver the honey to " + delivery.character + "'s house");
}
function move(dirr) {
    if (dirr === "South") {
        if (player.location.south != undefined) {
            player.location = player.location.south;
            console.log("You have arrived at " + player.location.character + "'s house.");
            console.log(player.location.greet());
        } else {
            console.log("You can't go that way!");
        }
    }
    if (dirr === "North") {
        if (player.location.north != undefined) {
            player.location = player.location.north;
            console.log("You have arrived at " + player.location.character + "'s house.");
            console.log(player.location.greet());
        } else {
            console.log("You can't go that way!");
        }
    }
    if (dirr === "West") {
        if (player.location.west != undefined) {
            player.location = player.location.west;
            console.log("You have arrived at " + player.location.character + "'s house.");
            console.log(player.location.greet());
        } else {
            console.log("You can't go that way!");
        }
    }
    if (dirr === "East") {
        if (player.location.east != undefined) {
            player.location = player.location.east;
            console.log("You have arrived at " + player.location.character + "'s house.");
            console.log(player.location.greet());
        } else {
            console.log("You can't go that way!");
        }
    }
}