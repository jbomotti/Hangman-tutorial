Today, we are going to walk through my "brute force" code.


## Some new files...

Let's start with the `index.html` file

- Line 222:  Linking 2 different js files. Why? What happens when turned off?

```html
  <script type="text/javascript" src="hangman.js"></script>
  <script type="text/javascript" src="hangman-tiler.js"></script>
</body>

```

- Do I need that `hangman-word-reveal.js` file? Where was that going?
- What about the `letterObject.js` file?  Linked? nope.  Doing what?

## How do those buttons work?  Getting some inputs:

We are using some very simple js command for gathering and managing user input: `prompt()` and `alert`.   Prompt is triggered by clicking on the button:



