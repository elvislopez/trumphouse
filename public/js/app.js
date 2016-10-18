/*
 * app.js, code for Trumphouse game.
 * module pattern
 * MVC patterns
 * "Fart in the elevator" pattern
 */
console.log('in app.js'); //debugging line

var game = ( function () {

	var trump = {}; //object, trump character

	var bricks = []; //array of objects

	var arena = {}; // object, entire game canvas

	return{
		trump: trump,
		bricks: bricks,
		arena: arena
	};

} ) ();

console.log('in app.js');