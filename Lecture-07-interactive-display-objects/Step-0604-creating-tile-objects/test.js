// adding use strict to get more error messages from JS
"use strict";

// create a guess button variable
var testButton = document.getElementById("guess-button");

// create a function to test for a button action

var testClick = function(message) {
	alert(message);
}

//Make a test button

testButton.onclick = function() {
	// include a simple test function
	// testClick('My new Message goes Here!');

	// Let's look at our new object BEFORE
	console.log(testTile.gameTile);
	
	// Let's change that element's state on the page
	testTile.gameTile.style.visibility = "hidden";

	// Let's look at our new object AFTER
	console.log(testTile.gameTile);

};