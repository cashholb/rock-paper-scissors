/*
1. prompt user for input being
2. if not rock, paper, or scissors, then alert user to retry with correct input
3. get the computer's choice 
4. compare them, if they are equal, alert a tie, if player wins declare the winner as player like so,
    "You Win! 'Rock' beats 'Scissors'"
*/

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    if(randomChoice === 0)
        return "rock";
    if(randomChoice === 1)
        return "paper";
    if(randomChoice === 2)
        return "scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if(playerSelection == computerSelection)
        return "tie";
    
    
    let handWon = "";

    if((playerSelection == "rock" || computerSelection == "rock") && (playerSelection == "paper" || computerSelection == "paper"))
    {
        handWon = "paper";
    }else {
        if((playerSelection == "rock" || computerSelection == "rock") && (playerSelection == "scissors" || computerSelection == "scissors"))
        {
            handWon = "rock";
        }else {
            if((playerSelection == "paper" || computerSelection == "paper") && (playerSelection == "scissors" || computerSelection == "scissors"))
            {
                handWon = "scissors";
            }
        }
    }

    if(playerSelection == handWon)
    {
        return "player won";
    }
    return "computer won";
}

function game()
{
    let playerWins = 0;

    for(let i = 0; i < 5; i++){

        let playerSelection = prompt(`Playing Rock, Paper, Scissors. Let's go, this is round ${i+1}`);

        playerSelection = playerSelection.toLowerCase();

        while(!(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors')) {
            alert("Invalid input! Try again");
            playerSelection = prompt(`Playing Rock, Paper, Scissors. Let's go, this is round ${i+1}`);

            playerSelection = playerSelection.toLowerCase();
        }

        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if(result == "tie")
        {
            i -= 1;
            alert(`Tie! ${playerSelection} clashes with ${computerSelection}`);
        }else if(result == "player won"){
            playerWins++;
            alert(`You win! ${playerSelection} beats ${computerSelection}`);
        }else{
            playerWins--;
            alert(`You lose! ${computerSelection} beats ${playerSelection}`);
        }
    }

    if(playerWins > 0)
    {
        return `You *beep* won this one, I'll *beep* get you next game!`;
    }

    return `Silly human *beep* you never stood a chance. You lose.`;
}
//console.log(game());

function simpleGame(){
    let scorePlayer = 0;
    let scoreComp = 0;

    let playerChoice = '';
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) =>
    {
        button.addEventListener('click', (e) => {
            playerChoice = e.target.id;
            console.log("playerChoice=" + playerChoice);
        });
    });

    if(playRound(playerChoice, getComputerChoice()) != 'tie')
    {
        if(playRound(playerChoice, getComputerChoice()) == 'player won')
        {
            document.getElementById('playerScore').textContent = `Player Score: `
        }
    }
}

simpleGame();