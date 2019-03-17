// Should the game allow gems to be clicked repeatedly to add to the user's total score? YES.
	
// Each gem represents a new random value every new game. The item's random value is never explicitly revealed to the user.

// The user's score is reset to zero every new game, as is the user's randomly generated target value.

const totalWins = 0;
const totalLosses = 0;

function gameWin() {
	totalWins++;
	$( "#totalWins span" ).text( totalWins );
	alert( "Game Over: You WON!" );
	newGame();
}


function gameLose() {
	totalLosses++;
	$( "#totalLosses span" ).text( totalLosses );
	alert( "Game Over: You lost..." );
	newGame();
}


function newGame() {

	var gemImages = [ "ruby.jpg", "emerald.jpg", "sapphire.jpg", "diamond.png" ];

	var randomTargetScore = Math.floor( Math.random() * 100 ) + 20;
	var userScore = 0;

	$("#targetNumber span").text( randomTargetScore ); // Update the displayed target score.

	$("#gemstones").empty(); // Clear any existing displayed gemstones.


	for ( var i = 0; i < gemImages.length; ) { // Generate four random gemstone images.

		var gemImageSrcNum = Math.floor( Math.random() * i ); // POSSIBLE BUG.
		var gemImageSource = "assets/images/" + gemImages[gemImageSrcNum]; // POSSIBLE BUG.
		gemImages = gemImages.splice( gemImageSrcNum, 1 ); // POSSIBLE BUG.

		$("#gemstones").append( '<img id="gem-' + gemImageSrcNum + '" class="gemstone" src="' + gemImageSource + '" alt="" />' );

	}

	/*
	var gemValues = [];
	for ( var i = 4; i > 0; i-- ) { // Generate random values for each gem, between 1 and 12.
		gemValues[i] = Math.floor( Math.random() * 11 ) + 1;
	}
	*/

	/*
	for ( var i = 0; i < gemImages.length; i-- ) { // Assign the gems' values to each of the gems' clickable images.

		
	}
	*/

	$(".gemstone").on( 'click', function(){ 

		//userScore +=  ; // Add the gem's value to the user's score for this game.

		$("#playerScore span").text( userScore ); // Update the user's score display.

		if ( userScore === randomTargetScore ) {
			gameWin();
		} else if ( userScore > randomTargetScore ) {
			gameLose();
		}

	});

}

newGame(); // Functions declared - load the game!