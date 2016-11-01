var animate = ( function() {
	
	/*
	* animation library for trumphouse.
	*/

	function init () {
		console.log('in animate.init()' );
	};

	/**
	* Move a DOM object
	*/
function move ( gameObj ) {
	console.log('moving:' + gameObj.name );
};
	/**
	* check for collision between DOM objects.
	*/
function checkForCollision ( gameObj1, gameObj2 ) {
	console.log( 'checking for collision:' + gameObj1.name + 'with:' + gameObj2.name);

	return false;
};
	/**
	* change the direction of movement of a DOM object.
	*/
function bounce ( gameObj ) {
	console.log( 'bouncing:' + gameObj.name );
};

/**
* When a 'destroyer' object hits a regular, destroy the rgular object.
*/
function destroy ( gameObj1, gameObj2 ) {
	console.log( 'destroying with:' + gameObj1.name + 'with:' + gameObj2.name );
};



	return {
		init: init,
		move: move,
		checkForCollision: checkForCollision,
		bounce: bounce,
		destroy: destroy


	};

}) ();