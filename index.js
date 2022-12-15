const items = ['Rock', 'Paper', 'Scissors']

// Function that randomly assigns either rock paper or scissors for the computer
function getComputerChoice(items) {
    // this line returns random from the items array by passing a random number (* 3 gives a random number from 0 to 2)
    return items[Math.floor(Math.random() * 3)]
}
console.log(getComputerChoice(items))