// YOUR CODE HERE

// * Generate a random number

var randomNumber = Math.floor((Math.random() * 10) + 1);
console.log(randomNumber);

// * Get the user's name

var name = prompt("What is your name?");
// * Ask the user to enter a number

var guess = prompt("Guess a number between 1 and 10.");
// * If the number equals the random number let the user know that they've won, other wise let them know that they lost
if (guess == randomNumber) {
  alert(name + ", you've won!");
} else {
  alert("Sorry, " + name + ". You've lost.");
}
