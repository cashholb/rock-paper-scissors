const WINNING_SCORE = 5;
let scorePlayer = 0;
let scoreComp = 0;
const buttons = document.querySelectorAll('input');
/*
1. prompt user for input being
2. if not rock, paper, or scissors, then alert user to retry with correct input
3. get the computer's choice 
4. compare them, if they are equal, alert a tie, if player wins declare the winner as player like so,
    "You Win! 'Rock' beats 'Scissors'"
*/



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
        return
    }



    // if player wins
    if((choicePlayer === "rock" && choiceComp === "scissors") || (choicePlayer === "paper" && choiceComp === "rock") || (choicePlayer === "scissors" && choiceComp === "paper")){
        scorePlayer += 1;
        let scorePlayerElement = document.querySelector('#scorePlayer')
        scorePlayerElement.textContent = `Player Score: ${scorePlayer}`;
    }else{
        scoreComp += 1;
        let scoreCompElement = document.querySelector('#scoreComputer')
        scoreCompElement.textContent = `Computer Score: ${scoreComp}`;
    }
}

function checkWin(){
    if(scorePlayer >= WINNING_SCORE){
        document.querySelector('#winMessage').textContent = "Player Won!";
        let buttonElem = document.querySelectorAll('input');
        buttonElem.forEach(elem => elem.disabled = true);
        //document.querySelectorAll('input').disabled = true;
    }else{
        if(scoreComp >= WINNING_SCORE){
            document.querySelector('#winMessage').textContent = "Computer Won!";
            let buttonElem = document.querySelectorAll('input');
            buttonElem.forEach(elem => elem.disabled = true);
        }
    }
}



buttons.forEach((button) =>
{
    button.addEventListener('click', function(){
        playRound(button.value, getComputerChoice());
        checkWin();
    });
});
