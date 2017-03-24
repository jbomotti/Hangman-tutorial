# Let's start building!

Recipe for changes to this code base

## Small changes to set the stage

- Clean up the CSS file
	- getting rid of extra lines and unused sections for readability

- Clean up the HTML file
	- [html] Change the title tag content to 'hangPic'
	-	get rid of the second .container (bootstrap class) in the buttons area.  Not necessary. formerly lines 36 and 50.


## Connecting JS to HTML

	xx. Create a new JS file

	xx. Link the JS file to the html page
		- research 'how to link a js file to html' (Google it)
		- add 'use strict' to top of .js file

	xx. Build a varible for the Guess button
		- [html] add id for the 3 button (e.g #guess-button)
		- [js] create a variable in .js called guessButton for the guess-button
		- [js] assign the html element to this button using using the getELementById method

	xx. Create a simple "test" function for my link
		- [js] create a js function called "testClick"
		- add a simple alert() function inside

	xx. Tie the function to an event
			-[js] assign the testClick function to your guessButton using the .onclick() method





