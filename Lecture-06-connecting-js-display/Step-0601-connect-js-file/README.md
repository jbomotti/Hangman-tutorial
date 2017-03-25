# Step-by-Step build process for this section

### Starting from the base of: [Previous build](https://github.com/NeuTrix/Hangman-tutorial/tree/master/Lecture-04-Buttons-and-Display-area/Step-0402-make-display-area)

## Tweaks

	### Folded `recipe.md` into the `README.md` for the subsections
	- Clean up the CSS file
		- Get rid of extra lines and unused sections for readability
		- Wipe out the `.dead-space` stying
		- Comment out the `opacity:` in `.table-tile` to hide the image

	### Clean up the HTML file
		- Change the title tag content to `Hangman-0601`
		- Wipe out the `.dead-space` class from the "Rows" 
			[near line 84]
		- [html] add id for the 3 button (e.g #guess-button)
		-	Wipe the 2nd `.container`(bootstrap class) in the buttons area
			- Add a comment about the grid system [ near line 26]
			[formerly lines 36 and 50.]
		- Reformat the code for layout for "tiles"
			- Added `<h3>` tags to each tile div
			[start at line 53, display area, in the `table` tag]

## Startbuilding!

### Connecting JS to HTML

	01. Create a new JS file
		- create a new file in this folder named base.js
		- add `"use strict";` to 1st line of base.js file
			- ensures that we can throw better error messages

	02. Link the JS file to the html page
		- Research 'how to link a js file to html' (Google it)
		- Add `<script>` tag to last line before closing `</body>` tag
		- Make certain to add `src=base.js` into this `<script>` tag

	03. Create a simple "test" for my link
		- Add a simple alert()function inside of the base.js file
		- Add a message inside of it(e.g. alert(`"test message")`)
		- Refresh your page.  You should get an alert message.
