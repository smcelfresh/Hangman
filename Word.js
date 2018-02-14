//console.log('Word file reached');

//check the letters guessed by using Letters file
var letterHolder = require("./Letter");
//variable to hold the words that can be selected for game
var randomWord = {
wordlist: ["happy", "success", "money", "warm", "winter", "spring", "summer", "fall"]
};

function word(value) {
	this.value = value;
	this.letters = [];
	this.guessesMade = "";
	
	for (var i = 0; i < this.value.length; i++) {
		this.letters.push(new letterHolder.letters(this.value[i]));
		}
	};

word.prototype.isDone = function() {
	for (var i = 0; i < this.letters.length; i++) {
		if(!this.letters[i].show)
			return false;
		}
		return true;
}
word.prototype.toString = function() {
	var output = "";
	for (var i = 0; this.letters.length; i++) {
		output += this.letters[i].printInfo();
	}
	return output;
}
//export code to be used by index file (user interface)
module.exports = word;