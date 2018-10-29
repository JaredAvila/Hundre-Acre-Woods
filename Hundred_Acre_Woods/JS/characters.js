
var winnie = {
    character: "Winnie the Pooh"
}

var chrisR = {
    character: "Christopher Robin"
}
var rabbit = {
    character: "Rabbit"
}
var tigger = {
    character: "Tigger",
    north: winnie
}
var piglet = {
    character: "Piglet",
    east: winnie
}
var owl = {
    character: "Owl",
    east: chrisR,
    south: piglet
}
var bees = {
    character: "Bees",
    north: rabbit,
    west: winnie
}
var gopher = {
    character: "Gopher",
    west: rabbit
}
var kanga = {
    character: "Kanga",
    south: chrisR
}
var eeyore = {
    character: "Eeyore",
    south: kanga
}
var heffalumps = {
    character: "Heffalumps",
    west: eeyore
}
winnie.north = chrisR
winnie.south = tigger
winnie.west = piglet
winnie.east = bees
chrisR.north =  kanga
chrisR.south =  winnie
chrisR.west = owl
chrisR.east = rabbit
rabbit.south = bees
rabbit.west = chrisR
rabbit.east = gopher
piglet.north = owl
kanga.north = eeyore
eeyore.east = heffalumps
var player = {
}

player.location = eeyore;
function move(dirr) {

    if (dirr === "South") {
        if (player.location.south != undefined) {
            player.location = player.location.south;
            alert("You have arrived at " + player.location.character + "'s house.");
        } else {
            alert("You can't go that way!");
        }
    }
    if (dirr === "North") {
        if (player.location.north != undefined) {
            player.location = player.location.north;
            alert("You have arrived at " + player.location.character + "'s house.");
        } else {
            alert("You can't go that way!");
        }
    }
    if (dirr === "West") {
        if (player.location.west != undefined) {
            player.location = player.location.west;
            alert("You have arrived at " + player.location.character + "'s house.");
        } else {
            alert("You can't go that way!");
        }
    }
    if (dirr === "East") {
        if (player.location.east != undefined) {
            player.location = player.location.east;
            alert("You have arrived at " + player.location.character + "'s house.");
        } else {
            alert("You can't go that way!");
        }
    }
}