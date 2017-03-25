// adding use strict to get more error messages from JS
"use strict";

// create a guess button variable
var testButton = document.getElementById("guess-button");

// create a function to test for a button action

var testClick = function() {
	alert("Now inside of the testClick function!");
}

//Make a test button

testButton.onclick = testClick;

