// Scratch JS examples

// Functions

// basic function
var sing = function(){
	alert("Yoddle");
};

// function with arguments
 var add = function(num1, num2){
	return	 num1 + num2
 }
 // ..or
 var mutli = function (num) {
	 return num*100;
 }

 //..or
var breed = function(animal) {
	alert(animal.name);
};

// Object literals

var dog = {
	name: "Greg"
};

var newArray = [];

var cat= {
	name:"Tony",
	fleas: [1,2,3],
	speak: function(){
		alert("Bark");
	 },
	gender: "fluid"								 
};

// Object constructors

function Animal(){
	this.species ="mammal",
	// see the sing() function at top of page
	// you can define a function outside of the object 
	// and then set it as a property inside the object
	this.sound = sing
};

// Make an 'instance' of an animal
 var pig = new Animal();
 var duck = new Animal();