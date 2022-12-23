const items = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;

// Function that randomly assigns either rock paper or scissors for the computer
function getComputerChoice(items) {
    // this line returns random from the items array by passing a random number (* 3 gives a random number from 0 to 2)
    return items[Math.floor(Math.random() * items.length)]
}


const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultsDiv = document.querySelector(".resultsDiv");

const youScore = document.querySelector(".youScore")
const compScore = document.querySelector(".compScore")

youScore.textContent += `You: ${playerScore}`
compScore.innerHTML += `Computer: ${computerScore}`

rockBtn.addEventListener('click', () => {playRound(items[0], getComputerChoice(items))});
paperBtn.addEventListener('click', () => {playRound(items[1], getComputerChoice(items))});
scissorsBtn.addEventListener('click', () => {playRound(items[2], getComputerChoice(items))}); 



function playRound(playerSelection, computerSelection) {
    // your code here!
    

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        resultsDiv.innerHTML += "<br>" + `You won! ${playerSelection} beats ${computerSelection}!` + "</br>"
        playerScore += 1;
        youScore.textContent = `You: ${playerScore}`
        compScore.textContent = `Computer: ${computerScore}`
        whoWon() 
        
        
        
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        resultsDiv.innerHTML += "<br>" + `You won! ${playerSelection} beats ${computerSelection}!` + "</br>"
        playerScore += 1;
        youScore.textContent = `You: ${playerScore}`
        compScore.textContent = `Computer: ${computerScore}`
        whoWon()
        

    } else  if (playerSelection === 'paper' && computerSelection === 'rock'){
        resultsDiv.innerHTML += "<br>" + `You won! ${playerSelection} beats ${computerSelection}!` + "</br>"
        playerScore += 1;
        youScore.textContent = `You: ${playerScore}`
        compScore.textContent = `Computer: ${computerScore}`
        whoWon()
        

    } else if (playerSelection === computerSelection) {
        resultsDiv.innerHTML += "<br>" + `Tie!` + "</br>"
        youScore.textContent = `You: ${playerScore}`
        compScore.textContent = `Computer: ${computerScore}`
        
    } else {
        resultsDiv.innerHTML += "<br>" + `You lose! ${computerSelection} beats ${playerSelection}` + "</br>"
        computerScore += 1;
        youScore.textContent = `You: ${playerScore}`
        compScore.textContent = `Computer: ${computerScore}`
        whoWon()
        
    }
    
  }

  function whoWon() {
    if (playerScore === 5) {
        resultsDiv.innerHTML = `You reached 5 points! You won!`
        youScore.textContent = `You: 0`
        compScore.textContent = `Computer: 0`
        playerScore = 0;
        computerScore = 0;
    } 
    if (computerScore === 5) {
        resultsDiv.innerHTML = `Computer reached 5 points! You lost.`
        youScore.textContent = `You: 0`
        compScore.textContent = `Computer: 0`
        playerScore = 0;
        computerScore = 0;
    }
  }







