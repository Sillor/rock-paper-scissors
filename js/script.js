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
    let returnValue;
    if (computerSelection === playerSelection) {
        returnValue = 'tie';
    }
    else if (computerSelection === "Rock" && playerSelection === "scissors" || computerSelection === "Scissors" && playerSelection === "paper" || computerSelection === "Paper" && playerSelection === "rock") {
        returnValue = 'computer';
    }
    else {
        returnValue = 'player';
    }
    return returnValue;
}

let buttons = document.querySelectorAll('button.choice');
let result = document.querySelector('#result');
let score = document.querySelector('#score');
let playerScore = 0, computerScore = 0;
const WIN_SCORE = 5;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let comChoice = getComputerChoice();

        switch (playRound(comChoice, button.id)) {
            case 'tie':
                result.textContent = "It's a tie!";
                break;
            case 'computer':
                result.textContent = `You lost! ${comChoice} beats ${button.id.charAt(0).toUpperCase() + button.id.slice(1)}!`;
                computerScore++;
                break;
            case 'player':
                result.textContent = `You win! ${button.id.charAt(0).toUpperCase() + button.id.slice(1)} beats ${comChoice}!`;
                playerScore++;
                break;
        }
        score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        if (playerScore === WIN_SCORE || computerScore === WIN_SCORE) {
            if (playerScore === WIN_SCORE) {
                resetGame();
                score.textContent = 'You won the game!';
            }
            else {
                resetGame();
                score.textContent = 'You lost the game!';
            }
        }
    });
});

let reset = document.querySelector('#reset');
reset.addEventListener('click', resetGame);

function resetGame () {
    playerScore = 0;
    computerScore = 0;
    result.textContent = 'NEW GAME! Make your choice!';
    score.textContent = '';
}