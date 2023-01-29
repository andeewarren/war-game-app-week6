class Card {
    constructor(faceValue, suit, rank){
        this.faceValue = faceValue;
        this.suit = suit;
        this.rank = rank;
    }
}

class Player {
    constructor(name, hand){
        this.name = name;
        this.score = 0;
        this.hand = hand;
    }
}
//create deck
let deck = [];
let hand1 = [];
let hand2 = [];
let player1 = new Player("Player 1", hand1);
let player2 = new Player("Player 2", hand2);

function nameGame(x, y){
    if (typeof x != "string"){
        throw new Error("the name needs to be a string");
    }
    return x + y;
}

class Game {
    constructor(){
        this.deck = deck;
        this.hand1 = hand1;
        this.hand2 = hand2;
        this.player1 = player1;
        this.player2 = player2;
    }

    start (){
function createDeck(){
    let faceValue = [2,3,4,5,6,7,8,9,10,"Jack","Queen","King","Ace"];
    let suit = ["♥️","♦️","♠️","♣️"];
    let rank = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    
    for(let i = 0; i < faceValue.length; i++){
                    // console.log(faceValue[i]);
                    for(let s = 0; s < suit.length; s++){
                        deck.push(new Card(faceValue[i], suit[s], rank[i]));
                        // let faceValue = this.faceValues[i]
                        // let suit = this.suits[s];
                        // this.deck.push({faceValue, suit});
                    }
                }
// console.log(deck);
}  




// shuffle deck

function shuffleDeck(){
            // currentCard = 0;
            for (let i = deck.length - 1; i > 0; i--){
                let j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
            // console.log(deck);
}



// deal deck - split in two


function dealDeck(){
        for (let i = 0; i < deck.length; i++){
            hand1.push(deck[i]);
            i++;
            hand2.push(deck[i]);
        }
        // console.log(hand1);
        // console.log(hand2);
}

//use this in place of a deck class
// function setDeck () { //condensed create, shuffle and deal into one function
//     let faceValue = [2,3,4,5,6,7,8,9,10,"Jack","Queen","King","Ace"];
//     let suit = ["♥️","♦️","♠️","♣️"];
//     let rank = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    
//     for(let i = 0; i < faceValue.length; i++){
//                     // console.log(faceValue[i]);
//         for(let s = 0; s < suit.length; s++){
//             deck.push(new Card(faceValue[i], suit[s], rank[i]));
//                         // let faceValue = this.faceValues[i]
//                         // let suit = this.suits[s];
//                         // this.deck.push({faceValue, suit});
//         }
//         // console.log(deck);
//     }
//     for (let i = deck.length - 1; i > 0; i--){
//         let j = Math.floor(Math.random() * (i + 1));
//         [deck[i], deck[j]] = [deck[j], deck[i]];
//     }
//     for (let i = 0; i < deck.length; i++){
//         hand1.push(deck[i]);
//         i++;
//         hand2.push(deck[i]);
//     }
//     // console.log(hand1);
//     // console.log(hand2);
// }

//create players



// console.log(player1);


//play game
// 1 point for higher card, 0 points for a tie

// function compareCard() {
//     for (let i = 0; i < hand1.length; i++){
//         if (hand1[i].rank === hand2[i].rank){}
//         else if (hand1[i].rank > hand2[i].rank){
//             player1.score++;
//         } else if (hand1[i].rank < hand2[i].rank){
//             player2.score++;
//         }
//     }
//     // console.log(player1);
//     // console.log(player2);
// }



// function declareScore(){
//     return `
//     Final Score
//     ------------
//     Player 1: ${player1.score}
//     Player 2: ${player2. score}`
// }

// function declareWinner() {
//     if (player1.score > player2.score){
//         alert( `Player 1 wins!`);
//     } else if (player1.score < player2.score){
//         alert( `Player 2 wins!`);
//     } else {
//         alert (`It's a tie!`);
//     }
// }

// function endGame() {
// if (player1.score > player2.score) {
//     alert (`Final Score
//     Player 1: ${player1.score}
//     Player 2: ${player2.score}
//     Player 1 wins!`)
// } else if (player1.score < player2.score) {
//     alert (`Final Score
//     Player 1: ${player1.score}
//     Player 2: ${player2.score}
//     Player 2 wins!`)
// } else {
//     alert (`Final Score
//     Player 1: ${player1.score}
//     Player 2: ${player2.score}
//     It's a tie!`)
// }
// }

function playGame () { //condensed game play and alerting the score into one function
    for (let i = 0; i < hand1.length; i++){
        if (hand1[i].rank === hand2[i].rank){}
        else if (hand1[i].rank > hand2[i].rank){
            player1.score++;
        } else if (hand1[i].rank < hand2[i].rank){
            player2.score++;
        }
    }
    if (player1.score > player2.score) {
        alert (`Final Score
        Player 1: ${player1.score}
        Player 2: ${player2.score}
        Player 1 wins!`)
    } else if (player1.score < player2.score) {
        alert (`Final Score
        Player 1: ${player1.score}
        Player 2: ${player2.score}
        Player 2 wins!`)
    } else {
        alert (`Final Score
        Player 1: ${player1.score}
        Player 2: ${player2.score}
        It's a tie!`)
    }
}

// declareScore();
// declareWinner();   
createDeck();
shuffleDeck();
dealDeck();
// compareCard();
// endGame(); 

// setDeck();
playGame();
}
}

let newGame = new Game();
newGame.start();