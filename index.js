const items = ['rock', 'paper', 'scissors']

// Function that randomly assigns either rock paper or scissors for the computer
function getComputerChoice(items) {
    // this line returns random from the items array by passing a random number (* 3 gives a random number from 0 to 2)
    return items[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert(`You won! ${playerSelection} beats ${computerSelection}!`)
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert(`You won! ${playerSelection} beats ${computerSelection}!`)
    } else  if (playerSelection === 'paper' && computerSelection === 'rock'){
        alert(`You won! ${playerSelection} beats ${computerSelection}!`)
    } else if (playerSelection === computerSelection) {
        alert(`Tie!`)
    } else {
        alert(`You lose! ${computerSelection} beats ${playerSelection}`)
    }
  }
   
  const playerSelection = prompt("Choose rock, paper or scissors!").toLowerCase();
  const computerSelection = getComputerChoice(items);
  playRound(playerSelection, computerSelection);