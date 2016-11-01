/*
 * app.js, code for Trumphouse game.
 * module pattern
 * MVC patterns
 * "Fart in the elevator" pattern
 *
 *NOTE: this object assumes that the 'animate'
 *library has already been loaded!
 */

var game = ( function () {

//model stuff


	var animate = null; //default is nothing.

	var trump = {}; //object, trump character

	var bricks = []; //array of objects

	var arena = {}; // object, entire game canvas

	var whiteHouse = {}; // the right side of the arena, the win zone

	function initModel () {
		console.log('in initModel');

		// init trump
		trump.dom = document.getElementById('trump');
		trump.name = trump.dom.id;
		trump.dx = 1; // speed of movement along x axis
		trump.dy = 1; // speed of movement along y axis

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

function checkForWin () {
	
	console.log('in checkForWin()');

	return false;
};


//view stuff
// make a local reference to the animate library.


function initView () {
	console.log('in initView');

	if (window.animate) {
	animate = window.animate;

} else{

	console.error('animate library not present. game cannot run');

}

};


/**
// stack overflow
// http://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
*/

/**
* see if trump has entered the "whitehouse" zone.
* if so stop the game, and declare a 'win' for trump.
* (if not for us). Otherwise, keep going...
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
* TODO: animate (move) trump onscreen.
* TODO: check for trump-brick collisions.
* TODO: bounce trump if trump runs into arena walls, or a brick
* TODO: destroy bricks on collision with trump.
* TODO: detect if Trump has 'broken through' and wins
*/

function gameLoop() {
	//console.log('in gameLoop');

	// since we called this with .requestAnimationFram, we have to
	// explicitly name the 'game' object. Trust me for now.

	//console.log( 'game.animate.move:' + game.animate.move )

	// trump is called 'gameObj' in the animate
	game.animate.move( trump );

	if ( checkForWin() === true ) {
		stop();
		alert( 'trump as won the White House' );
	}

	if ( game.animate.checkForCollision( trump, arena ) === true ) {
		game.animate.bounce( trump );
	}

	for ( var i = 0; i < bricks.length; i++ ) {

	if (game.animate.checkForCollision( trump, bricks[i] ) === true) {
		game.animate.destroy( bricks[i] );
		game.animate.bounce( trump );
}
}

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

	var startButton = document.getElementById('start-game');

	

	startButton.addEventListener('click', function( e ) {
		console.log('clicked start button');
		start();
		e.preventDefault();
		e.stopPropagation();
	}, false );

	var stopButton = document.getElementById('stop-game');
	stopButton.addEventListener('click', function ( e ) {
		console.log('clicked stop button');
		stop();
		e.preventDefault();
		e.stopPropagation();

	}, false );

}; //end of init Controller

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
	//start(); //start the game
//need to run init for the Ui to work!
};

init();
//expose some properties (variables) and methods (functions)

	return{
		animate: animate,
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