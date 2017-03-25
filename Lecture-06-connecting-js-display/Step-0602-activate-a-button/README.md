# Step-by-Step build process for this section

### Starting from the base of: [Previous build:`Step-0601-connect-js-file`](https://github.com/NeuTrix/Hangman-tutorial/tree/master/Lecture-06-connecting-js-display/Step-0601-connect-js-file)

## Our Goal
The object of this step is to establish a link between an action in 
the document (the user view of the game) to some behavior in the js
file (our code).  We'd like to be able to click a button and see 
something change on the page as a result

## Why this matters
By making this connection, we'll be able to see how to tie specific
elements from the user facing web page to actions and logic in our
.js file.  This is the first step toward making the web game interactive

# Startbuilding!
## Activating a "TEST" Button

#### 00. Renaming the "Test" button
```html
<button class="outline col-md-4 btn-block btn-default" id="guess-button">	
	TEST
</button>
```
- [hmtl] Change the content of the "Guess" button div to "Test"

- Just so we don't forget where this test is linked (in Browser)


#### 01. Build a varible for the Guess button
Inside of the js file:
		
```javascript
var testButton = document.getElementById("guess-button");
```
- Create a variable in base.js called `testButton` 
- Assign target html button to this var with `getELementById()`


#### 02. Create a simple testing function 

- Delte the alert() message on line 5 

- Create a js function called `testClick`
- Allow it to take a single String argument called `message`

```javascript
var testClick = function(message) {

}
```
- Insert a simple alert()function the `testClick` function
- Include the `message` variable as an argument for `alert()` 

```javascript
var testClick = function(message) {
	alert(message)
}
```
- *** This allows us to pass messages into our test


#### 03. Tie the function to an event

- Assign and event to your testButton using the .onclick() method

```javascript
testButton.onclick = function () { 

};
```
Add the `testClick();` function into this new event handler
- Remember to pass a message onto the `testClick()` function
```javascript
testButton.onclick = function () { 
	testClick('My new Message goes Here!');
};
```
- Refresh the page and hit your "Test" button
- Did you get an alert with your message

## What's Next

In our next step, we will work on connecting the display tiles variables in our js file and get them to 'change their state' when we click the `TEST` button. 

