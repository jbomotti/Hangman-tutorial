# Step-by-Step build process for this section

### Starting from the base of [Previous build:`Step-0701-setting-up-the-display.js-folder`](https://github.com/NeuTrix/Hangman-tutorial/tree/master/Lecture-07-interactive-display-objects/Step-0701-setting-up-the-display.js-folder)

## Our Goal
The object of this step is create the tile objects in js.

## Why this matters
By creating these objects, we will be able to manipulate their behavior and appearance base on rules or interaction with the js code

## What you'll need to know

JavaScript
- [Object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

HTML
- [document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [JS HTML DOM style methods](https://www.w3schools.com/js/js_htmldom_css.asp)


### In your `dispaly.js` folder:

#### 01. Create a Tile object constructor that takes an html id name as an argument
```javascript
function Tile (hmtlId) {
	// Add some properties of tiles here
};
```
#### 02. Add a property inside of this function called `gameTile` and set it to the corresponding html element using document.getElementById
```javascript
function Tile (htmlId) {
	// Add some properties of tiles here
	this.gameTile = document.getElementById(htmlId)
};
```

#### 03. Make a new variable called testTile using any tile id as an argument

```javascript
var testTile = new Tile("tile-03")
```

### In your `test.js` folder:

#### 04. Add console.log(testTile.gameTile) to our test button object
	- Click the test button to see what happens
```javascript
	console.log(testTile.gameTile);
```

#### 05. Use the test button to change the state of that testTile
	- by setting the varible to point to an hmtl element, we can apply hmtl methods to it
	- inside of your test button event handler, try changing the style of the testTile with style method

```javascript
	testTile.gameTile.style.visibility = "hidden";
```

#### 06. Add console.log(testTile.gameTile) to our test button object, AFTER the last command to see what's changed.  The whole thing should look like this:

```javascript
testButton.onclick = function() {
	// include a simple test function
	// testClick('My new Message goes Here!');
	
	// Let's change that element's state on the page
	testTile.gameTile.style.visibility = "hidden";

	// Let's look at our new object 
	console.log(testTile.gameTile);

};

```

#### 07.  Click the `Test` button.  A tile should disappear!
