function getComputerChoice() {
    let returnValue;
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            returnValue = 'Rock';
            break;
        case 1:
            returnValue = 'Paper';
            break;
        case 2:
            returnValue = 'Scissors';
            break;
    }
    return returnValue;
}

function getPlayerChoice() {
    do {
        choice = prompt("Choose Rock, Paper or Scissors:");
        choice = choice.toLowerCase();
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    return choice;
}

function playRound(computerSelection, playerSelection) {
    let returnValue;
    if (computerSelection === playerSelection) {
        returnValue = "It's a tie!";
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissors" || computerSelection === "Scissors" && playerSelection === "Paper" || computerSelection === "Paper" && playerSelection === "Rock") {
        returnValue = `You lost! ${computerSelection} beats ${playerSelection}!`;
    }
    else {
        returnValue = `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    return returnValue;
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice(), getPlayerChoice()));
    }
}

game();