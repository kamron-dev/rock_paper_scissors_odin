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
        
        
        
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        resultsDiv.innerHTML += "<br>" + `You won! ${playerSelection} beats ${computerSelection}!` + "</br>"
        playerScore += 1;
        youScore.textContent = `You: ${playerScore}`
        compScore.textContent = `Computer: ${computerScore}`
        

    } else  if (playerSelection === 'paper' && computerSelection === 'rock'){
        resultsDiv.innerHTML += "<br>" + `You won! ${playerSelection} beats ${computerSelection}!` + "</br>"
        playerScore += 1;
        youScore.textContent = `You: ${playerScore}`
        compScore.textContent = `Computer: ${computerScore}`
        

    } else if (playerSelection === computerSelection) {
        resultsDiv.innerHTML += "<br>" + `Tie!` + "</br>"
        youScore.textContent = `You: ${playerScore}`
        compScore.textContent = `Computer: ${computerScore}`
        
    } else {
        resultsDiv.innerHTML += "<br>" + `You lose! ${computerSelection} beats ${playerSelection}` + "</br>"
        computerScore += 1;
        youScore.textContent = `You: ${playerScore}`
        compScore.textContent = `Computer: ${computerScore}`
        
    }
    
  }

  




// function playRound(playerSelection, computerSelection) {
//     // your code here!
//     if (playerSelection === 'rock' && computerSelection === 'scissors') {
//         alert(`You won! ${playerSelection} beats ${computerSelection}!`)
//         return playerScore += 1; 
//     } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//         alert(`You won! ${playerSelection} beats ${computerSelection}!`)
//         return playerScore += 1;
//     } else  if (playerSelection === 'paper' && computerSelection === 'rock'){
//         alert(`You won! ${playerSelection} beats ${computerSelection}!`)
//         return playerScore += 1;
//     } else if (playerSelection === computerSelection) {
//         alert(`Tie!`)
        
//     } else {
//         alert(`You lose! ${computerSelection} beats ${playerSelection}`)
//         return computerScore += 1;
//     }
//   }
   

  
//   const playerSelection = prompt("Choose rock, paper or scissors!").toLowerCase();
//   const computerSelection = getComputerChoice(items);
//   playRound(playerSelection, computerSelection);
//   alert(playerScore);
//   alert(computerScore);

// function game() {
//     for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt("Choose rock, paper or scissors!").toLowerCase();
//     let computerSelection = getComputerChoice(items);
//     playRound(playerSelection, computerSelection)      
//     }
    
//     if (playerScore > computerScore) {
//         alert(`You won! You score is ${playerScore}!`)
//     } else if (playerScore < computerScore) {
//         alert(`You lost! Computer score is ${computerScore}`)
//     } else {
//         alert(`It's a tie! ${playerScore} : ${computerScore}`)
//     }
// }
// game();
// alert(playerScore);
// alert(computerScore);