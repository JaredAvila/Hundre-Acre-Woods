class Card {
    constructor(suit, strVal, numVal) {
        this.suit = suit;
        this.strVal = strVal;
        this.numVal = numVal;
    }
    show() {
        console.log(`This is the ${this.strVal} of ${this.suit}`);
    }
}

class Deck {
    constructor(cards) {
        this._cards = cards;
    }
    setCards(cards) {
        this._cards = cards;
    }
    getCards(){
        return this._cards;
    }
    selectionSort(arr){
        var minIdx, temp, 
            len = arr.length;
        for(var i = 0; i < len; i++){
          minIdx = i;
          for(var  j = i+1; j<len; j++){
             if(arr[j].numVal<arr[minIdx].numVal){
                minIdx = j;
             }
          }
          temp = arr[i];
          arr[i] = arr[minIdx];
          arr[minIdx] = temp;
        }
        return arr
      }
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    reset(){
        let hearts = [];
        let spades = [];
        let clubs = [];
        let diamonds = [];
        for(var i = 0; i < this.getCards().length; i++){
            switch(this.getCards()[i].suit){
                case "Hearts":
                    hearts.push(this.getCards()[i]);
                    break;
                case "Diamonds":
                    diamonds.push(this.getCards()[i]);
                    break;
                case "Clubs":
                    clubs.push(this.getCards()[i]);
                    break;
                case "Spades":
                    spades.push(this.getCards()[i]);
                    break;
            }
        }
        hearts = this.selectionSort(hearts);
        spades = this.selectionSort(spades);
        clubs = this.selectionSort(clubs);
        diamonds = this.selectionSort(diamonds);
        console.log(hearts, spades, clubs, diamonds);
        this.setCards(this.newDeck(hearts, spades, clubs, diamonds));
    }
    newDeck(heart, spade, club, diamond) {
        var newDeck = [];
        for(var h = 0; h < heart.length; h++){
            newDeck.push(heart[h]);
        }
        for(var s = 0; s < spade.length; s++){
            newDeck.push(spade[s]);
        }
        for(var c = 0; c < club.length; c++){
            newDeck.push(club[c]);
        }
        for(var d = 0; d < diamond.length; d++){
            newDeck.push(diamond[d]);
        }
        return newDeck;
    }
}

var heartCard1 = new Card("Hearts", "Ace", 1);
var heartCard2 = new Card("Hearts", "Two", 2);
var heartCard3 = new Card("Hearts", "Three", 3);
var heartCard4 = new Card("Hearts", "Four", 4);
var heartCard5 = new Card("Hearts", "Five", 5);
var heartCard6 = new Card("Hearts", "Six", 6);
var heartCard7 = new Card("Hearts", "Seven", 7);
var heartCard8 = new Card("Hearts", "Eight", 8);
var heartCard9 = new Card("Hearts", "Nine", 9);
var heartCard10 = new Card("Hearts", "Ten", 10);
var heartCard11 = new Card("Hearts", "Jack", 11);
var heartCard12 = new Card("Hearts", "Queen", 12);
var heartCard13 = new Card("Hearts", "King", 13);

var spadeCard1 = new Card("Spades", "Ace", 1);
var spadeCard2 = new Card("Spades", "Two", 2);
var spadeCard3 = new Card("Spades", "Three", 3);
var spadeCard4 = new Card("Spades", "Four", 4);
var spadeCard5 = new Card("Spades", "Five", 5);
var spadeCard6 = new Card("Spades", "Six", 6);
var spadeCard7 = new Card("Spades", "Seven", 7);
var spadeCard8 = new Card("Spades", "Eight", 8);
var spadeCard9 = new Card("Spades", "Nine", 9);
var spadeCard10 = new Card("Spades", "Ten", 10);
var spadeCard11 = new Card("Spades", "Jack", 11);
var spadeCard12 = new Card("Spades", "Queen", 12);
var spadeCard13 = new Card("Spades", "King", 13);

var diamondCard1 = new Card("Diamonds", "Ace", 1);
var diamondCard2 = new Card("Diamonds", "Two", 2);
var diamondCard3 = new Card("Diamonds", "Three", 3);
var diamondCard4 = new Card("Diamonds", "Four", 4);
var diamondCard5 = new Card("Diamonds", "Five", 5);
var diamondCard6 = new Card("Diamonds", "Six", 6);
var diamondCard7 = new Card("Diamonds", "Seven", 7);
var diamondCard8 = new Card("Diamonds", "Eight", 8);
var diamondCard9 = new Card("Diamonds", "Nine", 9);
var diamondCard10 = new Card("Diamonds", "Ten", 10);
var diamondCard11 = new Card("Diamonds", "Jack", 11);
var diamondCard12 = new Card("Diamonds", "Queen", 12);
var diamondCard13 = new Card("Diamonds", "King", 13);

var clubCard1 = new Card("Clubs", "Ace", 1);
var clubCard2 = new Card("Clubs", "Two", 2);
var clubCard3 = new Card("Clubs", "Three", 3);
var clubCard4 = new Card("Clubs", "Four", 4);
var clubCard5 = new Card("Clubs", "Five", 5);
var clubCard6 = new Card("Clubs", "Six", 6);
var clubCard7 = new Card("Clubs", "Seven", 7);
var clubCard8 = new Card("Clubs", "Eight", 8);
var clubCard9 = new Card("Clubs", "Nine", 9);
var clubCard10 = new Card("Clubs", "Ten", 10);
var clubCard11 = new Card("Clubs", "Jack", 11);
var clubCard12 = new Card("Clubs", "Queen", 12);
var clubCard13 = new Card("Clubs", "King", 13);

var deck_O_cards = [
    heartCard1, heartCard2, heartCard3, heartCard4, heartCard5, heartCard6, heartCard7, heartCard8, heartCard9, heartCard10, heartCard11, heartCard12, heartCard13,
    spadeCard1, spadeCard2, spadeCard3, spadeCard4, spadeCard5, spadeCard6, spadeCard7, spadeCard8, spadeCard9, spadeCard10, spadeCard11, spadeCard12, spadeCard13,
    diamondCard1, diamondCard2, diamondCard3, diamondCard4, diamondCard5, diamondCard6, diamondCard7, diamondCard8, diamondCard9, diamondCard10, diamondCard11, diamondCard12, diamondCard13,
    clubCard1, clubCard2, clubCard3, clubCard4, clubCard5, clubCard6, clubCard7, clubCard8, clubCard9, clubCard10, clubCard11, clubCard12, clubCard13
]