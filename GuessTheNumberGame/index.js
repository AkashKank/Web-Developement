let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");

const init = () => {
    computerGuess =Math.floor(Math.random() *100);
    //console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}

const startGame = () => {
    document.getElementById("WelcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

//reload the game

const newGameBegin = () => {
    window.location.reload();
}

//start new game
const startNewGame = () => {
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled",true);
}

//main Logic for our App
const compareGuess = () => {
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;


    // check the value is low or high
    if(userGuess.length < maxGuess) {
    if(userNumber > computerGuess) {
        userGuessUpdate.innerHTML = "Your Guess is High";
        userNumberUpdate.value = "";
    }else if(userNumber < computerGuess) {
        userGuessUpdate.innerHTML = "Your Guess is Low";
        userNumberUpdate.value = "";
    }else {
        userGuessUpdate.innerHTML = "*** Correct Answer ***";
        userNumberUpdate.value = "";
        startNewGame();
    }
}else {
    if(userNumber > computerGuess) {
        userGuessUpdate.innerHTML = `You Loose!! correct number was ${computerGuess}`;
        userNumberUpdate.value = "";
        startNewGame();
    }else if(userNumber < computerGuess) {
        userGuessUpdate.innerHTML = `You Loose!! correct number was ${computerGuess}`;
        userNumberUpdate.value = "";
        startNewGame();
    }else {
        userGuessUpdate.innerHTML = "*** Correct Answer ***";
        userNumberUpdate.value = "";
        startNewGame();
    }
}

    document.getElementById("attempts").innerHTML = userGuess.length;
}

const easyMode = () => {
    maxGuess = 10;
    startGame();
}

const hardMode = () => {
    maxGuess = 5;
    startGame();
}