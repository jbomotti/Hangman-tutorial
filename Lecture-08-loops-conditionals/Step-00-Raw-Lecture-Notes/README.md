# Step-by-Step build process for this section

### Starting from the base of [Previous build:`to 0702`](#)

## Our Goal
The object of this step is create an array of Tile objects connected to the 3 Tile elements in our html file.

## Why this matters
By creating these objects, we will be able to manipulate their behavior and appearance base on rules or interaction with the js code

## What you'll need to know

JavaScript
- [Object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

HTML
- [document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [JS HTML DOM style methods](https://www.w3schools.com/js/js_htmldom_css.asp)


## Cleaning up..
From our last file, we created a few objects simply intended to test our scripts in the browser (the "TEST" button).  Now let's clean these files up a bit by putting all of the 'test' stuff in the `test.js` file.  This will leave us with a cleaner code file for working on the displays.

### In your `display.js` folder:

#### 0x. Move the `alert()` test function and `testTile` var to the `test.js` file, placing them just after the `testButton` variable on line 6

Mow, let's Fix the code for the "Test" button- Making it as a standalone button (instead of linking it to the "Guess" button)

### In your `index.html` folder:

#### 0x. Make a copy of the "Test" button and move it to 4th position inside your buttons section

#### 0x. Change the inner html of the 2nd button (now called "Test" as well), back to "Guess":

```html
<button class="outline col-md-4 btn-block btn-default" id="guess-button">	Guess
</button>

```

#### 0x. Change the name of the id of the `Test` button (now in the 4th position) from `guess-button` to `test-button`

```html
<button class="outline col-md-4 btn-block btn-default" id="test-button">	TEST
</button>
```

### In your `test.js` folder:

####0x. 



## Building the `Tile` objects array

### In your `index.html` folder:

#### 0x. Make certain you have a common class name for your tiles

- Look up the common class name for your tiles in html (or make one)
- In this case, `table-tile` is the one we'll use (`.outline`) is just for design and will eventually be turned off. 
- Also, the `.outline` class applies to more than just the tile objects

```html
<td class="outline table-tile" id="tile-02">
	<h3>tile 2</h3>
</td>
```
### In your `display.js` folder:
#### 0x. Use getElementsByClassName() to create a variabe that's an array of tiles div objects 


#### 0x.

#### 0x.
#### 0x.




