#!/usr/bin/env jsc
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    //let target = Math.floor( Math.random() * 10 );
    //console.log(Math.floor( Math.random() * 10 ));
    return Math.floor(Math.random() * 10 );
};



//function difference(a, b) {
//    return Math.abs(a - b);
//  }

const getAbsoluteDistance = (x, y) => {
    return Math.abs(x - y);
};

const alert = humanGuess => {
    if (humanGuess < 0 || humanGuess > 9) {
        console.log('It’s not possible to set a number outside the range 0-9.');
    }
};


const compareGuesses = (humanGuess, computerGuess, secretTarget) => { 
    if (getAbsoluteDistance(humanGuess, secretTarget) > getAbsoluteDistance(computerGuess, secretTarget)) {
        return false; //computer wins
    } 
    else if (getAbsoluteDistance(computerGuess, secretTarget) >= getAbsoluteDistance(humanGuess, secretTarget)) {
        return true; //human wins
    }
    else {
        console.log('Something is wrong!');
    }   
  }; 

const updateScore = winnerScore => {
    if (winnerScore === 'human') {
        humanScore += 1;
    }
    else if (winnerScore === 'computer') {
        computerScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
}





  