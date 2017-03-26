# Step-by-Step build process for this section

### Starting from the base of: [Previous build:`Step-0602-activate-a-test-button`](https://github.com/NeuTrix/Hangman-tutorial/tree/master/Lecture-06-connecting-js-display/Step-0602-activate-a-test-button)

## Our Goal
The object of this step is to capture the tile elements in our js file as variables in an array. From there, we'll want to manipulate their 'state' in the browser (e.g. Change their color or visibility) 

## Why this matters
By making this connection, we'll be able to see how to tie specific
elements from the user facing web page to actions and logic in our
.js file. 


## What you'll need to know

#### Javascript
	- creating variables
	- creating, traversing, and mutating *arrays*
	- #document.getElementById()
	- 
#### HTML
#### CSS


# Startbuilding!
## Grabbing the "tile" variables

In your HTML files

#### 0x. Make sure each of the tile elements has a unique id
```hmtl
<td class="outline table-tile" id="tile-03">
	<h3>tile 3</h3>
</td>
```