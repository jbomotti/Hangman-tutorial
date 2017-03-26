# Step-by-Step build process for this section

### Starting from the base of [Previous build:`Step-0603-setting-up-the-display.js-folder`](https://github.com/NeuTrix/Hangman-tutorial/tree/master/Lecture-06-connecting-js-display/Step-0603-setting-up-the-display.js-folder)

## Our Goal
The object of this step is create the tile objects in js.

## Why this matters
By creating these objects, we will be able to manipulate their behavior and appearance base on rules or interaction with the js code

## What you'll need to know

### In your file folder

#### 01. Change the name of the `base.js` file to `test.js`

#### 02. Create a new file called `display.js`

### In your `index.html` file

#### 03. Modify the current `script` tag
- Update the src from `base.js` to `test.js`
```javascript
	  <script type="text/javascript" src="test.js"></script>
```
#### 04. Add a new `script` tag for the new file
```javascript
	  <script type="text/javascript" src="display.js"></script>
```
#### 05. Make sure each of the `tile` elements has a unique id
They should look something like this (e.g. for "tile 3")
```hmtl
<td class="outline table-tile" id="tile-03">
	<h3>tile 3</h3>
</td>
```

### In your `display.js` file

#### 06. add `"use strict";` at the top for better error messages

#### 07. add a small test script
```javascript
	alert("testing the display page");
```
#### 08. Refresh your game in the browser to very that the alert is
working and your js code is linked properly to the html page



