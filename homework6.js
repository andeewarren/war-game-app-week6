//war card game

//class card
//card has a suit
//card has faceValue
//card has a rank eg Jack would be a string but ranks higher than a 10 or a 5


class Card {
    constructor(faceValue, suit, rank){
        this.faceValue = faceValue;
        this.suit = suit;
        this.rank = rank;
    }
}

class Deck {
    constructor() {
        this.deck = [];
        this.faceValues = [2,3,4,5,6,7,8,9,10,"Jack","Queen","King","Ace"];
        this.suits = ["♥️","♦️","♠️","♣️"];
        this.ranks = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    }
//create deck of 52 cards
//     createDeck() {
//         for(let i = 0; i < this.faceValues.length; i++){
//             // console.log(this.faceValues[i]);
//             for(let s = 0; s < this.suits.length; s++){
//                 this.deck.push(new Card(this.faceValues[i], this.suits[s], this.ranks[i]));
//                 // let faceValue = this.faceValues[i]
//                 // let suit = this.suits[s];
//                 // this.deck.push({faceValue, suit});
//             }
//         }
//         console.log(this.deck);
//     }
// //shuffle 52 cards (look up fischer yates javascript)

//     shuffleDeck () {
//         // currentCard = 0;
//         for (let i = this.deck.length - 1; i > 0; i--){
//             let j = Math.floor(Math.random() * (i + 1));
//             [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
//         }
//         console.log(this.deck);
//     }

//deal - interacts with players the most

    // dealDeck(){
    //     player1.hand = this.deck.slice(0, 26);
    //     player2.hand = this.deck.slice(26, 52);
    //     console.log(player1.hand);
    //     console.log(player2.hand);
    // }
    // return (hand1);
    // return (hand2);
    // createDeck() {
    //     for(let i = 0; i < this.faceValues.length; i++){
    //         // console.log(this.faceValues[i]);
    //         for(let s = 0; s < this.suits.length; s++){
    //             this.deck.push(new Card(this.faceValues[i], this.suits[s], this.ranks[i]));
    //             // let faceValue = this.faceValues[i]
    //             // let suit = this.suits[s];
    //             // this.deck.push({faceValue, suit});
    //         }
    //     }
    //     console.log(this.deck);
    // } 
    // shuffleDeck () {
    //     // currentCard = 0;
    //     for (let i = this.deck.length - 1; i > 0; i--){
    //         let j = Math.floor(Math.random() * (i + 1));
    //         [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    //     }
    //     console.log(this.deck);
    // }

    // dealDeck(){
    //     let hand1 = [];
    //     let hand2 = [];
    //     for (let i = 0; i < this.deck.length; i++){
    //         hand1.push(this.deck[i]);
    //         i++;
    //         hand2.push(this.deck[i]);
    //     }
    //     console.log(hand1);
    //     console.log(hand2);
    // }
}

class Player {
    constructor(name, hand){
        this.name = name;
        this.score = 0;
        this.hand = hand;
    }


}
    let player1 = new Player("Sam" );
    let player2 = new Player("Tom");
    console.log(player1);

// let gameDeck = new Deck();

//class Game

class Game {
    constructor(){
        this.deck = [];
        this.players = player1, player2;
    }

    // instantiate deck in here


start () {
    let deck = new Deck();



    // createDeck() {
        for(let i = 0; i < this.faceValues.length; i++){
            console.log(this.faceValues[i]);
            for(let s = 0; s < this.suits.length; s++){
                deck.push(new Card(this.faceValues[i], this.suits[s], this.ranks[i]));
                // let faceValue = this.faceValues[i]
                // let suit = this.suits[s];
                // this.deck.push({faceValue, suit});
            }
    //     }
        console.log(deck);
    // } 
    // shuffleDeck () {
    //     // currentCard = 0;
    //     for (let i = this.deck.length - 1; i > 0; i--){
    //         let j = Math.floor(Math.random() * (i + 1));
    //         [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    //     }
    //     console.log(this.deck);
    // }
    // dealDeck() {
    //     let hand1 = [];
    //     let hand2 = [];
    //     for (let i = 0; i < this.deck.length; i++){
    //         hand1.push(this.deck[i]);
    //         i++;
    //         hand2.push(this.deck[i]);
    //     }
    //     console.log(hand1);
    //     console.log(hand2);
    // }
}

// play


}

//starting game
//track points
// for loop with if statements; iterate 26 times
//if p1.rank > p2.rank, p1 + 1 point
//if p1.rank > p2.rank, p2 + 1 point
// p1.rank === p2.rank, no one gets a point

// let gameDeck = new Deck();
// gameDeck.createDeck();
// gameDeck.shuffleDeck();
// gameDeck.dealDeck();




//output statements for each round of the game?
//just make the deck a variable instead of a class?
}
let gamePlay = new Game();
gamePlay.start();