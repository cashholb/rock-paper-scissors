const WINNING_SCORE = 5;

// all of these globals could be a class, with an object passed around to the functions
// for this simple project, globals are just fine
let scorePlayer = 0;
let scoreComp = 0;
const choices = document.querySelectorAll('img');
const roundMessage = document.querySelector('.roundOutcome');


function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    switch(randomChoice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(choicePlayer, choiceComp){

    // check for tie
    if(choicePlayer === choiceComp)
    {
        roundMessage.textContent = `You both chose ${choicePlayer}, it's a tie!`;
        return;
    }

    // if player wins
    if((choicePlayer === "rock" && choiceComp === "scissors") || (choicePlayer === "paper" && choiceComp === "rock") || (choicePlayer === "scissors" && choiceComp === "paper")){
        scorePlayer += 1;
        let scorePlayerElement = document.querySelector('#scorePlayer')
        scorePlayerElement.textContent = `Player Score: ${scorePlayer}`;
        roundMessage.textContent = `You won this round with ${choicePlayer}`;

    }else{
        // if comp wins
        scoreComp += 1;
        let scoreCompElement = document.querySelector('#scoreComputer')
        scoreCompElement.textContent = `Computer Score: ${scoreComp}`;
        roundMessage.textContent = `Computer won this round with ${choiceComp}`;
    }

    // check for winner
    if(scorePlayer >= WINNING_SCORE){
        document.querySelector('.winMessage').textContent = "You Win!";
        choices.forEach(elem => elem.removeEventListener('click', onClickHandler));

        let resetElem = document.querySelector('.resetButton');
        resetElem.innerHTML = "<button onclick='resetGame()'>Play Again!</button>";
    }else{
        if(scoreComp >= WINNING_SCORE){
            document.querySelector('.winMessage').textContent = "Computer Won";
            choices.forEach(elem => elem.removeEventListener('click', onClickHandler));

            let resetElem = document.querySelector('.resetButton');
            resetElem.innerHTML = "<button onclick='resetGame()'>Play Again!</button>";
        }
    }
}

function resetGame() {

    // reset scores locally and in DOM
    scorePlayer = 0;
    scoreComp = 0;

    let scorePlayerElement = document.querySelector('#scorePlayer')
    scorePlayerElement.textContent = `Player Score: ${scorePlayer}`;
    
    let scoreCompElement = document.querySelector('#scoreComputer')
    scoreCompElement.textContent = `Computer Score: ${scoreComp}`;

    roundMessage.textContent = "";
    document.querySelector('.winMessage').textContent = ""; 
    document.querySelector('.resetButton').innerHTML = "";

    main();
}

// need this wrapper so I can remove the event listener easily
function onClickHandler(event) {
    const button = event.target;
    
    playRound(button.getAttribute('id'), getComputerChoice());
}

function main() {
    choices.forEach((button) => {
        button.addEventListener('click', onClickHandler);
    });
}

main();