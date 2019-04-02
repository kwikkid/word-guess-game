var building;
var words = [
		"alhambra",
		"lourve",
		"parthenon"];

var pastGuesses = [];
var guesses = 10;
var userGuess;
var answer;
var answerArray = [];
var guessesText = document.getElementById("guessesText");

function start()
{
	
	building = words[Math.floor(Math.random() * words.length)];

	console.log(building);



	for (i = 0; i < building.length; i++)
	{
		answerArray[i] = "_";
	}

		answer = answerArray.join(" ");
		console.log("answer:", answer)
		//var wordgame = document.getElementById("wordgame");
		//wordgame.textContent = answer;
		document.getElementById("wordDashes").innerHTML = answer;

}

start();

document.onkeyup = function(event) {
		userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		pastGuesses.push(userGuess);
		console.log(pastGuesses);
		console.log(userGuess);

	
		var userChoiceText = document.getElementById("userGuess");
		console.log(userChoiceText);
		userChoiceText.textContent =  "Your Guesses: " + pastGuesses;
		
// 			if (guesses === 0){
// 				checkWin();
// 			} 
// 			else{
// 				compare(userGuess);
// 			}  
// }


// function checkWin(){


// }
compare();



};


function compare(){
	var isFound = false;
	console.log('guesses within compare function ',guesses);
	guessesText.textContent = ("numer of guesses remaining:" + guesses);
	console.log("random word: ",building);
	console.log("userGuess: ", userGuess);
	for (var i = 0; i < building.length; i++){
		if(building[i] === userGuess){
			isFound = true;
			answerArray[i] = userGuess;
			console.log('inside my for loop', guesses);
			document.getElementById("wordDashes").innerHTML = answerArray;
		}
	}
	if (isFound === false) {
		guesses--
	}
		// else{
		// 	guesses--;
		// }
	
}