console.log("hello woreld")

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

function indexOfChoice(arr, word) {
    return arr.indexOf(word.toUpperCase());
}

function game(){
    let score = 0;
    for (let i=1; i <= 5; i++) {
        let result = prompt(`Round ${i}!`, "Rock, Paper or Scissors!");
        console.log(playRound(result, computerPlay()));
    }
}

game();