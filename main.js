// Global Variables
const saveScoreBtn = document.getElementById("saveBtn");
const guessBtn = document.getElementById("guessBtn");
let initialScore = document.querySelector(".score");
let initialLevel = document.querySelector(".level");
let initialRange = document.querySelector(".range");
let outputMessage = document.querySelector(".output");
let textareaOutput = document.getElementById("scores");
let guessRange = 5;
let secretNumber = Math.round(Math.random() * guessRange);


// Event Listeners
saveScoreBtn.addEventListener('click', function(){
	const currentScore = document.querySelector(".score").innerText;
	const username = document.getElementById("username").value.trim();

	if(!username){
		return;
	}

	localStorage.setItem(username, currentScore);
	textareaOutput.value = "";
	document.getElementById("username").value = "";
	displayScores();
});

guessBtn.addEventListener('click', function(){
	let userGuess = document.getElementById("guessNumber");

	// return back input box is empty
	if(!userGuess.value.trim()){
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
	for (let i = 0; i < localStorage.length; i++) {
		let currentKey = localStorage.key(i);
		let currentValue = localStorage.getItem(currentKey);

		textareaOutput.value += `${currentKey} --> ${currentValue} points\n`;
	}
	// localStorage.clear();
}

function changeSecretNumber(){
	secretNumber = Math.round(Math.random() * guessRange);
	// console.log(secretNumber);
}

// increase score points at different levels
function updateGame(){
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
