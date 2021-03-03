let options = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let round = 1;

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (round > 10){ 
        toggleButton();
        if (playerScore > computerScore) {
            return `Final score: ${playerScore} - ${computerScore} YOU WIN!`
        }
        else if (playerScore < computerScore) {
            return `Final score: ${playerScore} - ${computerScore} YOU LOSE...`
        }
        return `Final score: ${playerScore} - ${computerScore} YOU TIED!`
    }

    document.getElementById("rockComputer").style.filter= "none";
    document.getElementById("paperComputer").style.filter= "none";
    document.getElementById("scissorsComputer").style.filter= "none";

    if (computerSelection == "ROCK") {
        document.getElementById("rockComputer").style.filter= "invert(19%) sepia(100%) saturate(7499%) hue-rotate(360deg) brightness(111%) contrast(114%)";

    }
    else if (computerSelection == "PAPER") {
        document.getElementById("paperComputer").style.filter= "invert(19%) sepia(100%) saturate(7499%) hue-rotate(360deg) brightness(111%) contrast(114%)";

    }
    else {
        document.getElementById("scissorsComputer").style.filter= "invert(19%) sepia(100%) saturate(7499%) hue-rotate(360deg) brightness(111%) contrast(114%)";

    }

    // Invalid option
    if (!wordInArray(options ,playerSelection)) {
        return "Please choose either Rock, Paper or Scissors!";
    }
    // Player wins
    if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || 
         (playerSelection == "PAPER" && computerSelection == "ROCK") || 
         (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
        return `Round ${round++}: ${playerSelection} vs ${computerSelection} Player wins! Score is: ${++playerScore} - ${computerScore}`;
    }
    // Computer wins
    else if ((playerSelection == "SCISSORS" && computerSelection == "ROCK") || 
             (playerSelection == "ROCK" && computerSelection == "PAPER") || 
             (playerSelection == "PAPER" && computerSelection == "SCISSORS")) {
        return `Round ${round++}: ${playerSelection} vs ${computerSelection} Computer wins! Score is: ${playerScore} - ${++computerScore}`;
    }
    // Tie
    else {
        return `Round ${round++}: ${playerSelection} vs ${computerSelection} It's a tie! Score is: ${playerScore} - ${computerScore}`;
    }
}

function wordInArray(arr, word) {
    return (arr.indexOf(word.toUpperCase()) > -1);
}

function game(playerSelection){
    document.getElementById("rock").style.filter= "none";
    document.getElementById("paper").style.filter= "none";
    document.getElementById("scissors").style.filter= "none";

    /*const container = document.querySelector('#container');
    const results = document.createElement('div');
    results.classList.add('results');
    results.textContent = 'This is the glorious text-content!';
    container.appendChild(results);
    */
    const results = document.querySelector('#results');
    //results.classList.add('results');
    results.textContent = playRound(playerSelection, computerPlay());

    document.getElementById(playerSelection).style.filter= "invert(73%) sepia(76%) saturate(5860%) hue-rotate(89deg) brightness(124%) contrast(121%)";

}

function reset() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    const results = document.querySelector('#results');
    results.textContent = "Clear!";
}

function refreshPage() {
    window.location.reload();
}

function toggleButton() {
    document.getElementById("reset").className = 'show'; 
}

//document.getElementById("play").addEventListener("click", game);


/** 
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
*/
//game();