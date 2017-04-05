"use strict";


// =====>>> Create a random number generator: 

var randNum = function (min, max) {
  // --> Returns a random integer between min (included) and max (included)
// --> Using Math.round() will give you a non-uniform distribution!
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min )) + min;
} 




function Tile (htmlId) {
	// Add some properties of tiles here
	this.gameTile = document.getElementById(htmlId);
	this.name = htmlId
};

// Create an array of tile divs
var tileDivs = document.getElementsByClassName("table-tile");




