$(document).ready(function() {

//set up word bank
var xmen = [
	["C","Y","C","L","O","P","S"],
	["B","E","A","S","T"],
	["I","C","E","M","A","N"],
	["A","N","G","E","L"],
	["M","A","R","V","E","L","G","I","R","L"]
];

//letters
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

        $.each(letters, function(index, letter) {
        	var $button = $("<button/>")
        		.addClass("letter-button letter letter-button-color")
        		.data("letter", letter)
        		.text(letter)
        		$("#buttons").append($button);
        })

wordSelect();

//get random word from work bank
function wordSelect (array) { 
	var rand = xmen[Math.floor(Math.random() * xmen.length)];
	console.log ("random word: " + rand);
	convertWord();

	//set word to underscores
	function convertWord () {
		var guessWord = rand;
		console.log("guessWord: " + guessWord);
		$.each(guessWord, function(index) {
			var $guessWord = $("<col-sm-2/>")
			.addClass("blank")
			.text("_ ")
			$("#targetWord").append($guessWord);			
		})
	}
}
//take user input
function userGuess () {
	var keyPress = event.keyCode;
	
}

//compare user guess to word
function compareLetter () {
	if ()
}

});