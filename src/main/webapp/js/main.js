// Variables
var topFiveToggle = document.querySelector(".top5");
var saveScoreToggle = document.querySelector(".saveScore");
var guessBtn = document.getElementById("guessBtn");


// Event Listeners
topFiveToggle.addEventListener('click', function(){
	var scoreDetails = document.getElementsByTagName('ul')[0];

	// removes the class name if present else add it
	if(scoreDetails.classList.contains("show-highscores")){
		scoreDetails.classList.remove("show-highscores");
		console.log(scoreDetails.classList);
	}else{
		scoreDetails.classList.add("show-highscores");
		console.log(scoreDetails.classList);
	}
});

saveScoreToggle.addEventListener('click', function(){
	console.log("saving score...");
	var scoreToggle = document.getElementsByTagName('form')[0];
	console.log(scoreToggle.innerHTML);

	if(scoreToggle.classList.contains("score-input")){
		scoreToggle.classList.remove("score-input");
		console.log(scoreToggle.classList)
	}else{
		scoreToggle.classList.add("score-input");
		console.log(scoreToggle.classList);
	}
});

guessBtn.addEventListener('click', function(){
	console.log("guess button clicked!!")
});
