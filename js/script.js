var response = document.querySelector(".response");
var showGuess = document.querySelector(".show-guess");
var name = prompt("Hello friend, What's your name?");
var numChoice = Number(prompt("Guess a number between 1-25. :)"));

function guessNumber(name, numChoice) {
  var randomNumber = Math.floor(Math.random() * 26); // This will produce a number between 1 and 100 - this line is error free :)

  if (numChoice > 25) {
    response.innerText = "We need a number between 1 and 25.";
    return;
  } else if (numChoice < 1) {
    response.innerText = "We need a number between 1 and 25.";
    return;
  }

  // We've got a number between 1 and 25, let's do this.
  showGuess.innerText = numChoice;

  if (numChoice === randomNumber) {
    response.innerText = `Hey, ${name}, you totally guessed the number! Must be your lucky day.`;
  } else if (numChoice < randomNumber) {
    response.innerText = `Hey, ${name}, your guess was too low. The number was ${randomNumber}.`;
  } else if (numChoice > randomNumber) {
    response.innerText = `Hey, ${name}, your guess was too high. The number was ${randomNumber}.`;
  } else {
    response.innerText = `That's not a number, {name}!`;
  }
}

guessNumber(name, numChoice);
