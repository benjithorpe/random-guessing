// Variables
var saveScoreBtn = document.getElementById("saveBtn");
var guessBtn = document.getElementById("guessBtn");
// var level = document.querySelector(".level");
var currentLevel = 1;
var levelRange = 5;
var outputMessage = document.querySelector(".output");
var secretNumber = Math.round(Math.random() * levelRange);
// guessRangeInfo.innerText += ` ${levelRange}`;


saveScoreBtn.addEventListener('click', function(){
	console.log("saving score...");
	var currentLevel = document.querySelector(".level").innerText;
	var currentScore = document.querySelector(".score").innerText;

	console.log("Level = " + currentLevel);
	console.log("Score = " + currentScore);
});

guessBtn.addEventListener('click', function(){
	var userGuess = document.getElementById("guessNumber");

	if(userGuess.value > secretNumber){
		outputMessage.innerText = `${userGuess.value} is too high!! Try again`;
	}else if(userGuess.value < secretNumber){
		outputMessage.innerText = `${userGuess.value} is too low!! Try again`;
	}else{
		updateGame();
		userGuess.value = 0;
	}
	/*
	console.log("Secret Number: " + secretNumber);
	console.log("Number: " + userGuess.value);
	console.log("LevelRange: " + levelRange);
	*/
});

function changeSecretNumber(){
	secretNumber = Math.round(Math.random() * levelRange) + 1;	
}

function updateGame(){
	level.innerText = `Level: ${++currentLevel}`;
	outputMessage.innerText = "Congratulations!! You won: Next Level";
	changeSecretNumber();
	// guessRangeInfo.innerText = `Guess a number between 1 and ${levelRange += 5}`;
}

