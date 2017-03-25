# Step-by-Step build process for this section

### Starting from the base of: [Previous build](https://github.com/NeuTrix/Hangman-tutorial/tree/master/Lecture-06-connecting-js-display/Step-0601-connect-js-file)

# Startbuilding!

#### 0x. Activating the "Test" button
- [hmtl] Change the content of the "Guess" button div to "Test"
	```<button class="outline col-md-4 btn-block btn-default" id="guess-button">	TEST
							</button>```
- Just so we don't forget where this test is linked (in Browser)
- Can change the content back at a later step

#### 0x. Build a varible for the Guess button
		
- [js] create a variable in .js called `testButton` 
- [js] assign target html button to this var with `getELementById()`
	```var testButton = document.getElementById("guess-button");```

#### 01. Create a simple testing function 
- [js] Comment out [line 5] alert
- [js] Create a js function called `testClick`
- [js] move the simple alert()function [line 5] inside of `testClick`
- [js] Change the `alert()` message to something new

#### 02. Tie the function to an event
-[js] assign the testClick function to your guessButton using the .onclick() method
