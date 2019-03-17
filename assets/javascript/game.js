// Should the game allow gems to be clicked repeatedly to add to the user's total score? YES.
	
// Each gem represents a new random value every new game. The item's random value is never explicitly revealed to the user.

// The user's score is reset to zero every new game, as is the user's randomly generated target value.

var totalWins = 0;
var totalLosses = 0;

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
	$("#playerScore span").text( 0 );
	var gemImageSrcNum;

	$("#targetNumber span").text( randomTargetScore ); // Update the displayed target score.
	$("#gemstones").empty(); // Clear any existing displayed gemstones.


	for ( var i = 0; i < gemImages.length; i++ ) { // Generate four random gemstone images.
		gemImageSrcNum = Math.floor( Math.random() * gemImages.length );
		var gemImageSource = "assets/images/" + gemImages[gemImageSrcNum];

		
		// gemImages.splice( gemImageSrcNum, 1 ); // DEFINITE BUG. Trying to remove the image from the gemImages array by its index.


		$("#gemstones").append( '<img class="gemstone" src="' + gemImageSource + '" alt="' + gemImageSrcNum + '" style="width:25%; height:25%;" />' );
	}


	var gemValues = [];
	for ( var i = 3; i > 0; i-- ) { // Generate random values for each gem, between 1 and 12.
		gemValues[i] = Math.floor( Math.random() * 11 ) + 1;
	}
	gemValues[0] = Math.floor( Math.random() * 11 ) + 1; // Workaround. Should be included in above loop.


	$(".gemstone").on( 'click', function(){ 

		var gemValueNum = gemValues[$(this).attr( "alt" )];
		userScore += gemValueNum; // Add the gem's value to the user's score for this game.
		$("#playerScore span").text( userScore ); // Update the user's score display.

		if ( userScore === randomTargetScore ) {
			gameWin();
		} else if ( userScore > randomTargetScore ) {
			gameLose();
		}

	});

}

newGame(); // Functions declared - load the game!