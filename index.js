//Load the required npm packages

var word = require("./Word");
var inquirer = require("inquirer");

function hangman(letters) {
	this.letters = letters;
}

var guessedLetters = [];
var maxGuesses = 0;

// Create a basic prompt asking for  user to enter a letter if they have not exceeded the 6 guesses.
var getLetter = function(maxGuesses) {

	console.log(guessedLetters);
	console.log(maxGuesses);
	if (maxGuesses < 6) {
		inquirer.prompt({
	      name: "letter",
	      type: "text",
	      message: "Enter a letter between A-Z?",
		}).then(function(answers) {
			letter.push(answers.letter);
			maxGuesses++;
			getLetter(maxGuesses);
		})
	}
}
getLetter(maxGuesses);
