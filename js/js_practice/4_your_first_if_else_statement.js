// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 21
let message = ""

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"
if (age < 21) {
    message = "You can not enter the club!"
    console.log(message)
} else {
    message = "Welcome!"
    console.log(message)
}
