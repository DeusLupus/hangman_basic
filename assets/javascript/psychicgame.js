$(document).ready(function() {

	var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
				"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

	var cpuChoice = letters[Math.floor(Math.random() * letters.length)];
	console.log("cpuChoice: " + cpuChoice);

	var letter;
	switch (new Letter().getLetter()) {
		case a:
		letter = "A";
		break;
	}

	if (letter == cpuChoice) {
		
	}

});