
// ************************ WORD REVEAL ************************


// ---- VARIABLES ----

  // ==> Create accessibly scoped variables
    var secretWord = '';

    var secretWordArray = [];

// ===========>>> Create js objects from the html 
  var wordTable = document.getElementById("word-table"); 

  var startButton = document.getElementById("start-button"); 

  var guessButton = document.getElementById("guess-button"); 

  var resetButton = document.getElementById("reset-button");


// ---- FUNCTIONS ----

// ===========>>> Create fn to INITIALIZE the game
  var initializeGame = function () {

    // Set the word and array variables:
    secretWord = "";
    secretWordArray = [];

    // Set the initial table row that will hold the secret letters

    var row = wordTable.insertRow(0);
    row.setAttribute("class","letters");

    //+++ verify the changes in console

    console.log(wordTable)
    console.log(wordTable.count)
    return console.log ("The secret word is " + "'" + secretWord+"'"); 
    
  };

  //  *** RESET *** ==> Create a function to reset game data
  var resetGame = function () {
    // set variables
    var tableRows = document.getElementsByClassName("letters");
    var tableLength = tableRows.length;
    
     // delete all of  word row(s) from the table
    if (tableLength > 0) {
      // important that 'i <', and not '<=' to avoid null value
      for (var i = 0; i < tableLength; i++) {
      document.getElementById("word-table").deleteRow(tableRows[i]);  
      }; // end for
    }; // end if

    // ++ Log the data
    console.log(secretWord, secretWordArray)
  };// end resetGame

// ===========>>> Create a fn to PROMPT for user input
  var getSecretWord = function () {
    // establish new game variables
    var spaces = /\s+/gi
    secretWord = prompt("Enter a secret word").replace(spaces, "-");
    secretWordArray = secretWord.toUpperCase().split("");
    
    return secretWordArray
  };
    
// ===========>>> Create a fn SHOW letters- via background color
  var revealLetter = function(myGuess) {
    var elms = document.getElementsByClassName("letter-"+ myGuess);
    // match and change letters
    for(i=0; i<elms.length; i++) {
      elms[i].style.color="steelblue";
    } // end for
  }; // end revealLetter

// ===========>>> Create a fn to SETUP the board
  var setBoard = function (array) {
    // Create the board based on secret word length
      var wordLength = array.length;
      // should only be one row but needed classes to eliminate excess
      // !!! set an id and a class for clearing rows
      var tableSet = document.getElementsByClassName("letters");
      var tableRow = tableSet[0];
    
      // set loop to build the html game board (word only)
      for(i=0; i < wordLength; i++) {
        var newLetter = array[i]
        var dash = /[-]+/i

        var letterBox = document.createElement("td");
        // establish class vs id in case duplicate letters in the word
        // set a general class for all letters
        letterBox.setAttribute("class","single-letter letter-"+ newLetter);

        // set the letter value for the table item (td)
        letterBox.innerHTML= newLetter;

        // add the item to the table row
        tableRow.appendChild(letterBox);

      }; // end for loop
      
      return
  };

// ===========>>> Create a fn to check STATUS of revealed word

  // var wordRevealStatus = function (array) {
   // use the 'every' method on the word array to see if all are yet revealed (boolean)

   // if this is true, then delcare the game is over and reset the game
  // };



// ---- BUTTONS ----

// ===========>>> Set action of "START" button:initialize 

  // !!! Refactor to pull additional functionality out of start button
  startButton.onclick = function () {

    // run the initializing function to clear the board
    initializeGame();

    // start game with prompt and setting up board
    var word = getSecretWord ();
    setBoard(word);
   
    // ++ test logging to verify word entry
    var nodesArray = wordTable.childNodes;
    console.log (nodesArray.length);
    return console.log ("The secret word is " + "'" + secretWord+"'");  
  };

// ===========>>> Set action of "GUESS" button- guess a letter

  guessButton.onclick = function(){
    // take an input from player and make all caps to match case in the word array

    var guessLetter = prompt("guess a letter").toUpperCase();
    // reveal if part of secret word
    revealLetter(guessLetter);
    // check status to see if all of the letters have been revealed
  };

// ===========>>> Set the action for the "RESET" button 

  resetButton.onclick = function(){
   
    resetGame();
    return initializeGame();
    // return alert('rest works!!!');
  };

// ===========>>> Set the action for the "WORD" button 
  // Button to select when ready to guess a word- connect to a form




