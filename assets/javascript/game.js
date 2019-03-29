//Alert - After pressing a key, does user want to play//


//If yes pick a random word//
//If no, do nothing//
//on document key up, and lowercase, check that the letter matches//
//display the users guess//
// var wins = 0;
// var remaining = 15;
// var guesses = 0;
window.onload=function(){

	var words = [
		"alhambra",
		"lourve",
		"parthenon"];

	var building = words[Math.floor(Math.random() * words.length)];

	console.log(building);

	var answerArray = [];


		for (i = 0; i < building.length; i++){
			answerArray[i] = "_";}

		var answer = answerArray.join(" ");
		var wordgame = document.getElementById("wordgame");
		wordgame.textContent = answer;
		// console.log(wordgame);
		// alert(answer);
		// console.log(wordgame);
		// wordgame.textContent = answer;
				
		// var meow = document.getElementById("wins");		
			

	

		document.onkeyup = function(event) {
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase()
			console.log(userGuess);

	// var pastGuesses = [];
		
	// 		pastGuesses[j] = userGuess.push();
	

	var userChoiceText = document.getElementById("userGuess");
	console.log(userChoiceText);
	userChoiceText.textContent =  "Your Guesses: " + userGuess;}

	// var pastGuesses = [];
	// for (j = 0; i < 5; i++){
	// 	pastGuesses[j] = userGuess;
	// 	console.log(pastGuesses);
	// }


// var wordgame = document.getElementById("wordgame");



}