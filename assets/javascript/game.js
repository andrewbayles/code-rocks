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

	var randomTargetScore = Math.floor( Math.random() * 100 ) + 20;


	// Should the game allow gems to be clicked repeatedly to add to the user's total score?
	// The random total value of the gems (48) is too low to warrant the highest possible target number (120).

}

newGame();