//set up word bank and attempts allowed
var xmen = [
	["C","Y","C","L","O","P","S"],
	["B","E","A","S","T"],
	["I","C","E","M","A","N"],
	["A","N","G","E","L"],
	["M","A","R","V","E","L","G","I","R","L"]
];

//get random word from work bank
var rand = xmen[Math.floor(Math.random() * xmen.length)];
console.log ("random index " + rand);

//assign random word to array
var guess = [rand];
console.log("guess[]= " + guess);

//assign underscore for word to be guessed
for (i = 0; i < guess.length; i++) {
	guess[i] = "_ ";
}
console.log(guess);

function displayGuess() {
	for (var i = 0; i < guess.length; i++){
		var targetWord = document.getElementById("targetWord");
		var letter = document.createTextNode(guess[i]);
		targetWord.appendChild(letter);
	}
}