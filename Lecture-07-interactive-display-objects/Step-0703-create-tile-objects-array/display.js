"use strict";

// A simple test function to ensure the file is linked
// alert("testing the display page");

function Tile (htmlId) {
	// Add some properties of tiles here
	this.gameTile = document.getElementById(htmlId);
	this.name = htmlId
};

// Creat a new tile object
var testTile = new Tile("tile-03")



