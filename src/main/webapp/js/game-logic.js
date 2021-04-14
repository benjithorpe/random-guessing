var guessBtn = document.getElementById("guessBtn");
var level = document.querySelector(".level");
var levelCount = 1;
var levelRange = 5;
var outputMessage = document.querySelector(".output");
var secretNumber = Math.round(Math.random() * levelRange);
var guessRangeInfo = document.querySelector(".msg");
guessRangeInfo.innerText += ` ${levelRange}`;


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
	level.innerText = `Level: ${++levelCount}`;
	outputMessage.innerText = "Congratulations!! You won: Next Level";
	changeSecretNumber();
	guessRangeInfo.innerText = `Guess a number between 1 and ${levelRange += 5}`;
}
