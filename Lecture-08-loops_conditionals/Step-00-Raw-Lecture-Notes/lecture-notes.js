// Hey, let's make a super quick browser game (no graphics) to illustrate
// Conditionals and Loops in game play

// 01. Establish the initial state of the game
var inProgress = true;

// 02. get a secret number from the first player
var answer = parseInt(prompt("Player ONE:  enter a secret number:"));

// 03. Allow Player 2 to keep guessing(playing the game) until they get it right

// Create a `while` loop to run, as long as the game is in progress.
while(inProgress === true){
	
// our game code
	var guess = parseInt(prompt("ENTER A GUESS"));
	
	// Check to see if the guess was right 
	if (guess > answer) {
		alert("Too high! Guess again.");
	} else if (guess < answer){
		alert("Too low! Guess again.");
	} else if (guess === answer){
		alert("You're a Winner!");
	// SUPER important.  Make sure to change the condition (state) of the game
	// Otherwisee.... it will run forever and crash your browser.  Sad.
		inProgress = false;
	};
};
