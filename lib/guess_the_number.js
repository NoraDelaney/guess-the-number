// * Generate a random number
var randomNumber = Math.floor((Math.random() * 10) + 1);

// * Get the user's name
var name = prompt("Doge Asks:
           What is your name?");

// * Ask the user to enter a number
var guess = prompt("Doge Says:
            Guess a number between 1 and 10.");
// * If the number equals the random number let
// the user know that they've won, other wise let
// them know that they lost
if (guess == randomNumber) {
  alert("Doge Says: " + name +
  ", you guessed " + guess +
  ", and the answer was " + randomNumber +
  ". Wow! Such win!");
} else {
  alert("Doge Says: Sorry, " + name +
  ". You guessed " + guess +
  ", and the answer was " + randomNumber +
  ". So incorrect. Much lost.");
};
