var playerChoiceNumber;
var computerChoiceNumber;
var playerChoice;
var computerChoice;
var playerScore = 0;
var computerScore = 0;
var result;

const header = document.querySelector("h3");
const buttons = document.querySelector(".buttons");
header.appendChild(buttons);

const rockButton = document.createElement("button");
rockButton.textContent = "ROCK";
buttons.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent = "PAPER";
buttons.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "SCISSORS";
buttons.appendChild(scissorsButton);

const score = document.querySelector(".score");
const tablePlayerScore = document.createElement("td");
const tableComputerScore = document.createElement("td");

rockButton.addEventListener("click", rockFunction);
function rockFunction()
{
    playerChoice = "rock";
    playerChoiceNumber = 0;
    getComputerChoice();
    getResults(playerChoiceNumber, playerChoice, computerChoiceNumber, computerChoice);
    tablePlayerScore.textContent = playerScore;
    tableComputerScore.textContent = computerScore;
    score.appendChild(tablePlayerScore);
    score.appendChild(tableComputerScore);
    const selectionsLog = document.querySelector(".selections");
    const newSelection = document.createElement("tr");
    const playerSelection = document.createElement("td");
    const computerSelection = document.createElement("td");
    playerSelection.textContent = playerChoice;
    computerSelection.textContent = computerChoice;
    newSelection.appendChild(playerSelection);
    newSelection.appendChild(computerSelection);
    selectionsLog.appendChild(newSelection);
}

paperButton.addEventListener("click", paperFunction);
function paperFunction()
{
    playerChoice = "paper";
    playerChoiceNumber = 1;
    getComputerChoice();
    getResults(playerChoiceNumber, playerChoice, computerChoiceNumber, computerChoice);
    tablePlayerScore.textContent = playerScore;
    tableComputerScore.textContent = computerScore;
    score.appendChild(tablePlayerScore);
    score.appendChild(tableComputerScore);
    const selectionsLog = document.querySelector(".selections");
    const newSelection = document.createElement("tr");
    const playerSelection = document.createElement("td");
    const computerSelection = document.createElement("td");
    playerSelection.textContent = playerChoice;
    computerSelection.textContent = computerChoice;
    newSelection.appendChild(playerSelection);
    newSelection.appendChild(computerSelection);
    selectionsLog.appendChild(newSelection);
}

scissorsButton.addEventListener("click", scissorsFunction);
function scissorsFunction()
{
    playerChoice = "scissors";
    playerChoiceNumber = 2;
    getComputerChoice();
    getResults(playerChoiceNumber, playerChoice, computerChoiceNumber, computerChoice);
    tablePlayerScore.textContent = playerScore;
    tableComputerScore.textContent = computerScore;
    score.appendChild(tablePlayerScore);
    score.appendChild(tableComputerScore);
    const selectionsLog = document.querySelector(".selections");
    const newSelection = document.createElement("tr");
    const playerSelection = document.createElement("td");
    const computerSelection = document.createElement("td");
    playerSelection.textContent = playerChoice;
    computerSelection.textContent = computerChoice;
    newSelection.appendChild(playerSelection);
    newSelection.appendChild(computerSelection);
    selectionsLog.appendChild(newSelection);
}

function getComputerChoice(){
    computerChoiceNumber = Math.floor(Math.random() * 3);
    computerChoice;
    if(computerChoiceNumber == 0){
        computerChoice = "rock";
    }
    if(computerChoiceNumber == 1){
        computerChoice = "paper";
    }
    if(computerChoiceNumber == 2){
        computerChoice = "scissors";
    }
    return computerChoiceNumber, computerChoice;
}

function getResults(playerChoiceNumber, playerChoice, computerChoiceNumber, computerChoice){
    if(Math.abs(computerChoiceNumber - playerChoiceNumber) == 2){
        if(computerChoiceNumber > playerChoiceNumber){
            playerScore++;
        }
        if(playerChoiceNumber > computerChoiceNumber){
            computerScore++;
        }
    }

    if(Math.abs(computerChoiceNumber - playerChoiceNumber) == 1){
        if(playerChoiceNumber > computerChoiceNumber){
            playerScore++;
        }
        if(computerChoiceNumber > playerChoiceNumber){
            computerScore++;
        }
    }

    if(Math.abs(computerChoiceNumber - playerChoiceNumber) == 0){
        
    }

    if(playerScore == 3){
        console.log(`YOU WIN \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`);
        alert(`YOU WIN \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`);
        location.reload();
    }
    
    if(computerScore == 3){
        console.log(`You Lose. Try again. \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`);
        alert(`You Lose. Try again. \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`);
        location.reload();
    }
    return computerScore, playerScore;

}