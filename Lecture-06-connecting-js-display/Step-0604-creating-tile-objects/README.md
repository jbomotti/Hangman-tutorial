# Step-by-Step build process for this section

### Starting from the base of [Previous build:`Step-0603-setting-up-the-display.js-folder`](https://github.com/NeuTrix/Hangman-tutorial/tree/master/Lecture-06-connecting-js-display/Step-0603-setting-up-the-display.js-folder)

## Our Goal
The object of this step is create the tile objects in js.

## Why this matters
By creating these objects, we will be able to manipulate their behavior and appearance base on rules or interaction with the js code

## What you'll need to know

JavaScript
- [Object basics] (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics);
- [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

HTML
- [document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [element.setAttribute])(https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)


### In your `dispaly.js` folder:

#### 0x. Create a Tile object constructor that takes an html id name as an argument
```javascript
function Tile (hmtlId) {
	// Add some properties of tiles here
};
```
#### 0x. Add a property inside of this function called `gameTile` and set it to the corresponding html element using document.getElementById
```javascript
function Tile (htmlId) {
	// Add some properties of tiles here
	this.gameTile = document.getElementById(htmlId)
};
```


#### 0x. Make a new variable called testTile
#### 0x. Add console.log(testTile.tileId) to our test button object
	- Click the test button to see what happens
	- We should see this printed in the console(or alert if you chose that instead)
#### 0x. Add a state change test to the test button
	- by setting the varible to point to an hmtl element, we can apply hmtl methods to it
	- try changing the style of the testTile with #setAttributes method

#### 0x.
#### 0x.
#### 0x.



### In your file folder
#### 0x.
#### 0x.
#### 0x.

### In your file folder
#### 0x.
#### 0x.