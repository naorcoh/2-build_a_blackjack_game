// 1. Create two variables, firstCard and secondCard.
let firstCard = 0;
let secondCard = 0;
// Set their values to a random number between 2-11
firstCard = 10
secondCard = 12

// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card 🙂!")

} else if (sum === 21) {
    console.log("Wohoo! You've got BlackJack!🥳")
} else {
    console.log("You've out of the game!😭")
}