alert('Welcome to a game of rock, paper, scissors. \nOpen the console for game score and results.');
var playerChoiceNumber = 0;
var computerChoiceNumber = 0;
var playerScore = 0;
var computerScore = 0;
var result = "";

function getPlayerChoice(){
    var playerChoice = prompt("Enter \"rock\", \"paper\", or \"scissors\" to choose an option");
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice == "rock")
    {
        playerChoiceNumber = 0;
    }

    else if(playerChoice == "paper")
    {
        playerChoiceNumber = 1;
    }
    
    else if(playerChoice == "scissors")
    {
        playerChoiceNumber = 2;
    }

    else{
        alert("try again");
        getPlayerChoice();
    }

    return playerChoiceNumber, playerChoice;
}

function getComputerChoice(){
    var computerChoiceNumber = Math.round(Math.random() * 2);
    var computerChoice;
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
            result = `You win! You played ${playerChoice} and the computer played ${computerChoice}`;
            playerScore++;
        }
        if(playerChoiceNumber > computerChoiceNumber){
            result = `You lost! You played ${playerChoice} and the computer played ${computerChoice}`;
            computerScore++;
        }
    }

    if(Math.abs(computerChoiceNumber - playerChoiceNumber) == 1){
        if(playerChoiceNumber > computerChoiceNumber){
            result = `You win! You played ${playerChoice} and the computer played ${computerChoice}`;
            playerScore++;
        }
        if(computerChoiceNumber > playerChoiceNumber){
            result = `You lost! You played ${playerChoice} and the computer played ${computerChoice}`;
            computerScore++;
        }
    }

    if(Math.abs(computerChoiceNumber - playerChoiceNumber) == 0){
        result = `You tied! You played ${playerChoice} and the computer played ${computerChoice}`;
    }

    return result;

}

if(playerScore < 3 && computerScore < 3){
    console.log(`Best of five games wins: Score is currently: \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`);

    console.log(getResults(getPlayerChoice(), getComputerChoice()));
}

else if(playerScore == 3){
    alert("YOU WIN");
}

else if(computerScore == 3){
    alert("You lose. Try again.");
}