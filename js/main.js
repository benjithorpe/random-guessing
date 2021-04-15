// Variables
var saveScoreBtn = document.getElementById("saveBtn");
var guessBtn = document.getElementById("guessBtn");
var initialScore = document.querySelector(".score");
var initialLevel = document.querySelector(".level");
var initialRange = document.querySelector(".range");
var outputMessage = document.querySelector(".output");
var textareaOutput = document.getElementById("scores");
var guessRange = 5;
var secretNumber = Math.round(Math.random() * guessRange);


// Event Listeners
saveScoreBtn.addEventListener('click', function(){
	var currentScore = document.querySelector(".score").innerText;
	var username = document.getElementById("username").value.trim();

	if(username === ""){
		return;
	}

	localStorage.setItem(username, currentScore);
	textareaOutput.value = ""; 
	document.getElementById("username").value = "";	
	displayScores();
});


guessBtn.addEventListener('click', function(){
	var userGuess = document.getElementById("guessNumber");

	// return back input box is empty
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


// Functions
function displayScores(){
	for (var i = 0; i < localStorage.length; i++) {
		var currentKey = localStorage.key(i);
		var currentValue = localStorage.getItem(currentKey);

		textareaOutput.value += `${currentKey} --> ${currentValue} points\n`; 
	}
	// localStorage.clear();
}

function changeSecretNumber(){
	secretNumber = Math.round(Math.random() * guessRange);
	console.log(secretNumber);
}

function updateGame(){
	// increase score points at different levels
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

displayScores();
