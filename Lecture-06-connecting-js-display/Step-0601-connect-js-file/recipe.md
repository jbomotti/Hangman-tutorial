# Let's start building!

Recipe for changes to this code base
[Previous build is linked here] ("https://github.com/NeuTrix/Hangman-tutorial/tree/master/Lecture-04-Buttons-and-Display-area/Step-0402-make-display-area")

## Connecting JS to HTML

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

