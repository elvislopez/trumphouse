/*
 * app.js, code for Trumphouse game.
 * module pattern
 * MVC patterns
 * "Fart in the elevator" pattern
 */

var game = ( function () {

//model stuff



	var trump = {}; //object, trump character

	var bricks = []; //array of objects

	var arena = {}; // object, entire game canvas

	var whiteHouse = {}; // the right side of the arena, the win zone

	function initModel () {
		console.log('in initModel');

		// init trump
		trump.dom = document.getElementById('trump');
		trump.name = trump.dom.id;

		// init arena
		arena.dom = document.getElementById('game-canvas');
		arena.name = arena.dom.id;

		// init bricks

		var list = document.getElementsByClassName('bricks');
		// make the brick objects by creating objects, and assigning
		// the DOM elements we got from getElementsByClassName()

		for ( var i = 0; i < list.length; i++) {

			bricks.push( 

			{
				dom: list[i],

				name: list[i].id
			}

			); //end of 'push'
		}
}; // end of initModel

//view stuff
function initView () {
	console.log('in initView');
};


/**
// stack overflow
// http://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
*/

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        console.log('up arrow pressed');
    }
    else if (e.keyCode == '40') {
        // down arrow
        console.log('down arrow pressed');
    }
    else if (e.keyCode == '37') {
       // left arrow
       console.log('left arrow pressed');
    }
    else if (e.keyCode == '39') {
       // right arrow
       console.log('right arrow pressed');
    }

}; //end of checkKey

/**
* the main animation loop
*/

function gameLoop() {
	console.log('in gameLoop');
}; // end of gameLoop

// save a 'process' id for starting and stopping setInterval()
var animateId = null; //starts without animating



/**
* initialize the controller
*-------------------------------------------------------------------------
*/
function initController (){ 
	console.log('in initController');

	document.onkeydown = checkKey;

};

//main program

function start () {

	if ( animateId === null) {
	animateId = setInterval(
	function () {
		gameLoop();
	}, 100
	);

	console.log('starting game...');
}
};

function stop () {
	clearInterval(animateId);
	animateId = null;
	console.log('stopping game');
};
/**
*-----------------------------------------
*/
function isStarted () {
	if ( animateId !== null ) {
		return true;
	} else {
		return false;
	}
};


/**
* Initialize model with DOM elements,
* Initialize controller with keyboard commands.
*/

function init () {
	console.log('in init');
	initModel();
	initView();
	initController();
	start(); //start the game

};

//expose some properties (variables) and methods (functions)

	return{
		trump: trump,
		bricks: bricks,
		arena: arena, 
		whiteHouse: whiteHouse,
		init: init,
		start: start,
		stop: stop
	};

} ) ();

console.log('in app.js'); //debugging line