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

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
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

let buttons = document.querySelectorAll('button');
let result = document.querySelector('#result');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //console.log(playRound(getComputerChoice(), button.id));
        result.textContent = `Result: ${playRound(getComputerChoice(), button.id)}`;
    });
});

console.log(result);
//result.textContent = 'Hi!';

