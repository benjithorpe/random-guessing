// Variables
var saveScoreBtn = document.getElementById("saveBtn");
var guessBtn = document.getElementById("guessBtn");
var initialScore = document.querySelector(".score");
var initialLevel = document.querySelector(".level");
var initialRange = document.querySelector(".range");
var outputMessage = document.querySelector(".output");
var guessRange = 5;
var secretNumber = Math.round(Math.random() * guessRange);


// Event Listeners
saveScoreBtn.addEventListener('click', function(){
	console.log("saving score...");
	var currentLevel = document.querySelector(".level").innerText;
	var currentScore = document.querySelector(".score").innerText;

	console.log("Level = " + currentLevel);
	console.log("Score = " + currentScore);
});

guessBtn.addEventListener('click', function(){
	var userGuess = document.getElementById("guessNumber");

	// return back if user does not enter any value
	if(userGuess.value.trim() === ""){
		return;
	}

	if(userGuess.value > secretNumber){
		outputMessage.innerText = `${userGuess.value} is too high!! Try again`;
	}else if(userGuess.value < secretNumber){
		outputMessage.innerText = `${userGuess.value} is too low!! Try again`;
	}else{
		outputMessage.innerText = "Congratulations!! You won: Next Level";
		updateGame();
		userGuess.value = 0;
	}
});

function changeSecretNumber(){
	secretNumber = Math.round(Math.random() * guessRange);
	console.log(secretNumber);
}

function updateGame(){
	// increase score points at level 10
	if(Number(initialLevel.innerText) >= 10){
		increaseScore(10);
	}else if(Number(initialLevel.innerText) >= 25){
		increaseScore(20);
	}else{
		increaseScore(5);
	}
	guessRange += 5;
	changeSecretNumber();
}

function increaseScore(score){
	initialScore.innerText = Number(initialScore.innerText) + score;	
	initialRange.innerText = Number(initialRange.innerText) + 5;
	initialLevel.innerText = Number(initialLevel.innerText) + 1;
}
