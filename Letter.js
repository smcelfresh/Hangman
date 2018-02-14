
// Create a constructor (Letter) that will display blank placeholder or underscore depending on whether or not user guessed the letter. 
//constructor should define:
// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
function Letter(value) {
	this.value = value;
	this.show = false;
	if (this.value == ' ') 
		this.show = true;
}
// Function that returns underlying character if the letter is guessed, or placeholder (underscore) if letter is not guessed
// Function that takes a character as an argument and checks it against the underlying character, update the stored boolean value to true if guessed correctly
//Control whether or not a letter appears as a "_" or as itself on-screen
Letter.prototype.printInfo = function() {
	if (this.show) {
		//console.log(this.value);
		return this.value;
	}
	return "_ ";
}
//export code to be used by Word.js
module.exports = Letter;
