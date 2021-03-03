let options = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let round = 1;

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
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
    
    /*const container = document.querySelector('#container');
    const results = document.createElement('div');
    results.classList.add('results');
    results.textContent = 'This is the glorious text-content!';
    container.appendChild(results);
    */
    const results = document.querySelector('#results');
    //results.classList.add('results');
    results.textContent = playRound(playerSelection, computerPlay());

    for (let i=1; i <= 5; i++) {
        //let result = prompt(`Round ${i}!`, "Rock, Paper or Scissors!");
    }

}

function reset() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    const results = document.querySelector('#results');
    results.textContent = "Clear!";
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