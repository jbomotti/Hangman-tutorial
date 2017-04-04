//6. create an array to select the tiles from, randomly generated numbers
// THIS could be a very simple game of 'guess what this is'...

// =====>>> Generate a random number for an array index: 

  var randNum = function (min, max) {
    // --> Returns a random integer between min (included) and max (included)
  // --> Using Math.round() will give you a non-uniform distribution!
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min )) + min;
  } 

// =====>>> Set an array equivalent to the number of tiles (e.g. 9)

  var picArray = ['tile01','tile02','tile03','tile04','tile05','tile06','tile07','tile08','tile09']

  var tileArray = document.getElementsByClassName("board-cells")


  var removeTile = function() {

    // Determine the current length of the array
    var picArrayLength = picArray.length;
    // Set button function to update the grid

    // index range of random number depends on array length
      var picIndex = randNum(0,picArrayLength);

    // print information to let the coder know what's working...
      console.log("We started with " + picArray.length +" tiles in the array : ");

    console.log(picArray)

    console.log("We are randomly picking the item at position "+picIndex + " in the array" )

    console.log("Look at the picture.  We should have removed " + picArray[picIndex]);

    // Make that tile 'invisible' in the table based on result of that index:
    switch(picArray[picIndex]) {
    // BUG: if you don't take it as an index of picArray, then some tiles won't be chosen

      case "tile01": 
      // go into the document, find this item and hide that tile
        document.getElementById("tile01").style.visibility= "hidden";
      // find that tile in the array and remove it
        picArray.splice(picIndex,1)
      break; // end this case
      
      case "tile02": 
        document.getElementById("tile02").style.visibility= "hidden";
        picArray.splice(picIndex,1)
      break;
    
      case "tile03": 
        document.getElementById("tile03").style.visibility= "hidden";
        picArray.splice(picIndex,1)
      break;
    
      case "tile04": 
        document.getElementById("tile04").style.visibility= "hidden";
        picArray.splice(picIndex,1)
      break;
    
      case "tile05": 
        document.getElementById("tile05").style.visibility= "hidden";
        picArray.splice(picIndex,1)
      break;
    
      case "tile06": 
        document.getElementById("tile06").style.visibility= "hidden";
        picArray.splice(picIndex,1)
      break;
    
      case "tile07": 
        document.getElementById("tile07").style.visibility= "hidden";
        picArray.splice(picIndex,1)
      break;
    
      case "tile08": 
        document.getElementById("tile08").style.visibility= "hidden";
        picArray.splice(picIndex,1)
      break;
      
      case "tile09": 
        document.getElementById("tile09").style.visibility= "hidden";
        picArray.splice(picIndex,1)
      break;
    
      // Default value if nothing matches
      default:
      // announce game over...
       alert("GAME OVER!!! You lost");  

  }; // end of the <switch> function

}; // end of the <button> function

