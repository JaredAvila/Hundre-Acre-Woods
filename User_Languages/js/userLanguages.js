var users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]
function userLanguages(list) {
    let sentence = "";
    for (var i = 0; i < list.length; i++) {
        sentence += list[i]["fname"] + " " + list[i]["lname"] + " knows";
        for (var j = 0; j < list[i]["languages"].length; j++) {
            if (j === list[i]["languages"].length - 1) {
                sentence += " and " + list[i]["languages"][j];
            } else {
                sentence += ", " + list[i]["languages"][j];
            }
        }
        sentence += ".\n" + list[i]["fname"] + " is also interested in ";
        for (var k = 0; k < Object.values(list[i]["interests"]).length; k++) {
            console.log(Object.values(list[i]["interests"])[k]);
            for (var l = 0; l < Object.values(list[i]["interests"])[k].length; l++) {
                if (l === 0) {
                    sentence += Object.values(list[i]["interests"])[k][l];
                } else {
                    sentence += ", " + Object.values(list[i]["interests"])[k][l];
                }
            }
            if(k === Object.values(list[i]["interests"]).length - 1){
                sentence += ".";
            } else {
                sentence += ", ";
            }
        }
        sentence += "\n";
    }
    alert(sentence);
    return sentence;
}