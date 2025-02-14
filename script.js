function askNumberPlayerOne() {
    let numberToGuess = parseInt(prompt("Player 1 : Choose a number between 0-50:"));
    if (numberToGuess >= 0 && numberToGuess <= 50) {
        return numberToGuess;
    } else {
        askNumberPlayerOne()
    }
}

function didIWin(givenNumber, numberToGuess) {
    if (givenNumber === numberToGuess) {
        alert("Congrats ! You guessed right!✨");
        return true;
    } else if (givenNumber > numberToGuess) {
        alert("The number is smaller.");
        return false;
    } else if (givenNumber < numberToGuess) {
        alert("The number is bigger.");
        return false;
    }
}

function gamePlay() {
    let givenNumber = parseInt(prompt("Player 2 : Guess the number chosen by player 1 :"));
    if (didIWin(givenNumber, numberToGuess) === false) {
        gamePlay()
    }
}

let numberToGuess = askNumberPlayerOne();

gamePlay();