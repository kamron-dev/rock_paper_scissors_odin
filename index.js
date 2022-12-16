const items = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;

// Function that randomly assigns either rock paper or scissors for the computer
function getComputerChoice(items) {
    // this line returns random from the items array by passing a random number (* 3 gives a random number from 0 to 2)
    return items[Math.floor(Math.random() * items.length)]
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert(`You won! ${playerSelection} beats ${computerSelection}!`)
        return playerScore += 1; 
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert(`You won! ${playerSelection} beats ${computerSelection}!`)
        return playerScore += 1;
    } else  if (playerSelection === 'paper' && computerSelection === 'rock'){
        alert(`You won! ${playerSelection} beats ${computerSelection}!`)
        return playerScore += 1;
    } else if (playerSelection === computerSelection) {
        alert(`Tie!`)
        
    } else {
        alert(`You lose! ${computerSelection} beats ${playerSelection}`)
        return computerScore += 1;
    }
  }
   
//   const playerSelection = prompt("Choose rock, paper or scissors!").toLowerCase();
//   const computerSelection = getComputerChoice(items);
//   playRound(playerSelection, computerSelection);
//   alert(playerScore);
//   alert(computerScore);

function game() {
    for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose rock, paper or scissors!").toLowerCase();
    let computerSelection = getComputerChoice(items);
    playRound(playerSelection, computerSelection)      
    }
    
    if (playerScore > computerScore) {
        alert(`You won! You score is ${playerScore}!`)
    } else if (playerScore < computerScore) {
        alert(`You lost! Computer score is ${computerScore}`)
    } else {
        alert(`It's a tie! ${playerScore} : ${computerScore}`)
    }
}
game();
// alert(playerScore);
// alert(computerScore);