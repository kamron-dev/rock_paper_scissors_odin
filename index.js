const items = ['rock', 'paper', 'scissors']

// Function that randomly assigns either rock paper or scissors for the computer
function getComputerChoice(items) {
    // this line returns random from the items array by passing a random number (* 3 gives a random number from 0 to 2)
    return items[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You won! ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You won! ${playerSelection} beats ${computerSelection}!`
    } else  if (playerSelection === 'paper' && computerSelection === 'rock'){
        return `You won! ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection === computerSelection) {
       return `Tie!`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
  }
   
  const playerSelection = prompt("Choose rock, paper or scissors!").toLowerCase();
  const computerSelection = getComputerChoice(items);
  playRound(playerSelection, computerSelection);

  function game() {
    let playerScore;
    let computerScore;
    
    for (let i = 1; i < 5; i++) {
        playRound(playerSelection, computerSelection)
        if 
    }
    
  }