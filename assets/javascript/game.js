//Alert - After pressing a key, does user want to play//


//If yes pick a random word//
//If no, do nothing//
//on document key up, and lowercase, check that the letter matches//
//display the users guess//
// var wins = 0;
// var remaining = 15;
// var guesses = 0;
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
		//guesses--;
			if (guesses === 0){
				checkWin();
			} 
			else{
				compare(userGuess);
			}  
}


function checkWin(){

}

function compare(userGuess){
	console.log("random word: ",building);
	console.log("userGuess: ", userGuess);
	for(var i=0; i<building.length; i++){
		console.log("inside the loop")
		if(building[i] === userGuess){
			console.log("inside the if");
			answerArray[i] = userGuess;
			document.getElementById("wordDashes").innerHTML = answerArray[i];
		}
		else{
			guesses--;
		}
	}

}
