////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == computerMove)
	winner = "tie";
    else if (computerMove == "rock")
	{ 
	if (playerMove == "scissors")
		winner = "computer";
	else
		winner = "player";
	}
    else if (computerMove == "paper")
        { 
        if (playerMove == "rock")
                winner = "computer";
        else
                winner = "player";
        }
    else if (computerMove == "scissors")
        {
        if (playerMove == "paper")
                winner = "computer";
        else
                winner = "player";
        }	
		
    return winner;
}

function playOneGame() {
    var player = getPlayerMove(player);
    var computer = getComputerMove(computer);
    console.log("Player:" + player);
    console.log("Computer:" + computer);
    var winner = getWinner(player,computer);
    console.log("The Winner is: " + winner);
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while ((playerWins < 5) && (computerWins < 5)) {
	var winner = playOneGame();
	if (winner == "computer")
	    ++computerWins;
	else if (winner == "player")
	    ++playerWins;

	console.log("Score card player: " + playerWins + " computer: " + computerWins);
	console.log(" ");
    }
   
    return [playerWins, computerWins];
}


playToFive();
