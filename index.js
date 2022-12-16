const items = ['rock', 'paper', 'scissors']

let playerScore = 0;
let computerScore = 0;

// Function that randomly assigns either rock paper or scissors for the computer
function getComputerChoice(items) {
    // this line returns random from the items array by passing a random number (* items.length gives a random number from 0 to 3)
    return items[Math.floor(Math.random() * items.length)]
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
<<<<<<< Updated upstream
        return `You won! ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You won! ${playerSelection} beats ${computerSelection}!`
    } else  if (playerSelection === 'paper' && computerSelection === 'rock'){
        return `You won! ${playerSelection} beats ${computerSelection}!`
=======
        alert(`You won! ${playerSelection} beats ${computerSelection}!`)
        return playerScore += 1;

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert(`You won! ${playerSelection} beats ${computerSelection}!`)
        return playerScore += 1;

    } else  if (playerSelection === 'paper' && computerSelection === 'rock'){
        alert(`You won! ${playerSelection} beats ${computerSelection}!`)
        return playerScore += 1;

>>>>>>> Stashed changes
    } else if (playerSelection === computerSelection) {
       return `Tie!`
    } else {
<<<<<<< Updated upstream
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
=======
        alert(`You lose! ${computerSelection} beats ${playerSelection}`)
        return computerScore += 1;
    }
  }
   
  //const playerSelection = prompt("Choose rock, paper or scissors!").toLowerCase();
//   const computerSelection = getComputerChoice(items);
  //playRound(playerSelection, computerSelection);
  
  function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose rock, paper or scissors!").toLowerCase();
        const computerSelection = getComputerChoice(items);
        playRound(playerSelection, computerSelection)
    }
    if (playerScore > computerScore) {
        alert(`You won! Your score is ${playerScore}`)
    } else if ( playerScore < computerScore) {
        alert(`You lost! Computer's score is ${computerScore}`)
    }
  }
  game()
>>>>>>> Stashed changes
