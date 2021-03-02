let options = ["ROCK", "PAPER", "SCISSORS"];

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
        return `${playerSelection} vs ${computerSelection} Player wins!`;
    }
    // Computer wins
    else if ((playerSelection == "SCISSORS" && computerSelection == "ROCK") || 
             (playerSelection == "ROCK" && computerSelection == "PAPER") || 
             (playerSelection == "PAPER" && computerSelection == "SCISSORS")) {
        return `${playerSelection} vs ${computerSelection} Computer wins!`;
    }
    // Tie
    else {
        return `${playerSelection} vs ${computerSelection} It's a tie!`;
    }
}

function wordInArray(arr, word) {
    return (arr.indexOf(word.toUpperCase()) > -1);
}

function game(){
    let score = 0;
    const container = document.querySelector('#container');
    const results = document.createElement('div');
    results.classList.add('results');
    results.textContent = 'This is the glorious text-content!';
    container.appendChild(results);

    for (let i=1; i <= 5; i++) {
        let result = prompt(`Round ${i}!`, "Rock, Paper or Scissors!");
        results.textContent = playRound(result, computerPlay());
    }

}

document.getElementById("play").addEventListener("click", game);

/** 
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
*/
//game();