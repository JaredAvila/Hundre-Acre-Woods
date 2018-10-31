var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function(request, response){
    response.render('heros');
})
var characters = [{name: "Carnage", trueName: "Cletus Kasady", pic: "images/carnage.png", bio: "Carnage is a fictional character, a supervillain appearing in American comic books published by Marvel Comics. The character first appeared in The Amazing Spider-Man #360.[2] Carnage was created by writer David Michelinie and artists Erik Larsen and Mark Bagley. The character belongs to a race of amorphous extraterrestrial parasites known as the Symbiotes. He is usually depicted as an adversary to Spider-Man, as well as serving as the archenemy of Venom. The symbiote has taken many hosts. The original and most notable host from Earth-616 is Cletus Kasady, a serial killer from the Marvel Universe. Norman Osborn and his grandson Normie Osborn have also used the symbiote and have been referred to as the Red Goblin."},
    {name: "Iron Man", pic: "images/ironman.png", trueName: "Tony Stark", bio: "Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics. The character was created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968). A wealthy American business magnate, playboy, and ingenious scientist, Anthony Edward 'Tony' Stark suffers a severe chest injury during a kidnapping. When his captors attempt to force him to build a weapon of mass destruction, he instead creates a powered suit of armor to save his life and escape captivity. Later, Stark develops his suit, adding weapons and other technological devices he designed through his company, Stark Industries. He uses the suit and successive versions to protect the world as Iron Man. Although at first concealing his true identity, Stark eventually declared that he was, in fact, Iron Man in a public announcement. Initially, Iron Man was a vehicle for Stan Lee to explore Cold War themes, particularly the role of American technology and industry in the fight against communism.[1] Subsequent re-imaginings of Iron Man have transitioned from Cold War motifs to contemporary matters of the time.[1]"},
    {name: "Wolverine", pic: "images/wolverine.png", trueName: "Logan", bio:"Unknown."},
    {name: "Venom", pic: "images/venom.png", trueName: "Eddie Brock", bio: "Venom is a fictional character appearing in American comic books published by Marvel Comics, commonly in association with Spider-Man. The character is a sentient alien Symbiote with an amorphous, liquid-like form, who requires a host, usually human, to bond with for its survival. After bonding with a human host, the Symbiote bestows its enhanced powers upon the host. When the Venom Symbiote bonds with a human, that new dual-life form usually refers to itself as 'Venom'. The Symbiote was originally introduced as a living alien costume in The Amazing Spider-Man #252 (May 1984), with a full first appearance as Venom in The Amazing Spider-Man #300 (May 1988). The Venom Symbiotes first human host was Spider-Man, who eventually separated himself from the creature in The Amazing Spider-Man #258 (November 1984)[1] (with a brief rejoining in Web of Spider-Man #1, five months later),[2] when he discovered its true nefarious nature. The Symbiote went on to merge with other hosts, most notably Eddie Brock, its second and most infamous host, with whom it first became Venom and one of Spider-Mans archenemies."}];
app.get('/carnage', function(request, response){   
    response.render('info', {character: characters[0]});
})
app.get('/ironman', function(request, response){    
    response.render('info', {character: characters[1]});
})
app.get('/wolverine', function(request, response){
    response.render('info', {character: characters[2]});
})
app.get('/venom', function(request, response){
    response.render('info', {character: characters[3]});
})
app.listen(8000, function() {
    console.log("listening on port 8000");
  })