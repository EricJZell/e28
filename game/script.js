// Initialize the game
let board = [["-", "-","-"],["-","-","-"],["-", "-","-"]];
let turns = 0;

// Allow the player to refresh the game to start over
var refreshButton = document.getElementById("refresh");
refreshButton.onclick = function() {
  refresh();
}

// select all the square elements on board
let squares = document.getElementsByClassName('grid-item');

// add an onclick event for each square on the board
for (var square of squares) {
  square.onclick = function() {
    if (!this.classList.contains("unplayed")) {
      console.log("this square has been played");
      return;
    }
    this.innerText = "X";
    this.classList.remove("unplayed");

    // The row and column number of squares are stored in the elements' ID's
    // Such as 'item-1-2' is for row 1, column 2
    // Here we split the id to parse the row and column
    var splitID = this.id.split("-");
    var row = parseInt(splitID[1]);
    var column = parseInt(splitID[2]);
    board[row][column] = "X"
    turns++;

    if (checkForWinner("X")) {
      document.getElementById('info').innerText = "Congratulations, you win!";
      document.getElementById('info').classList.add("success");
      return;
    }

    if (checkForGameOver()){
      document.getElementById('info').innerText = "The game has ended in a tie!";
      return;
    }

    document.getElementById('info').innerText = "The computer is picking...";
    document.getElementById('info').classList.add("alert");

    // Display 'The computer is picking...' for half a second
    setTimeout(computerTurn, 500);;
  };
}

// This function selects an unplayed square at random for the computer
var computerTurn = function() {
  var unplayed = document.getElementsByClassName('unplayed');
  var randomIndex = Math.floor(Math.random() * unplayed.length);
  var computerPick = unplayed[randomIndex];
  computerPick.innerText = "O";
  computerPick.classList.remove("unplayed");
  // Make the computer's pick the alert color
  computerPick.classList.add("alert");
  var splitID = computerPick.id.split("-");
  row = parseInt(splitID[1]);
  column = parseInt(splitID[2]);
  board[row][column] = "O"
  turns++;
  if (checkForWinner("O")) {
    document.getElementById('info').innerText = "Sorry, the computer wins!";
    document.getElementById('info').classList.add("alert");
    return;
  }
  // We don't need to check for tie if user always goes first
  document.getElementById('info').innerText = "It's your turn, please make a selection...";
  document.getElementById('info').classList.toggle("alert");
}

// If there have been 9 turns, and no winner, the game has ended in a tie
var checkForGameOver = function() {
  if (turns >= 9) {
    return true;
  }
}

// Check all possible winning scenarios for the player that just went
var checkForWinner = function (player) {
  // Check all three rows and all three columns for a winner
  for (var i = 0; i < 3; i++) {
    if(rowWinner(player, i) || columnWinner(player, i)) {
      return true;
    }
  }
  // Check the diaganols for a winner
  if (diaganolWinner(player)) {
    return true;
  }
}

// Checks a single row to see if a player has won
var rowWinner = function(player, row) {
  return board[row][0] == player && board[row][1] == player && board[row][2] == player;
}

// Checks a single column to see if a player has won
var columnWinner = function(player, column) {
  return board[0][column] == player && board[1][column] == player && board[2][column] == player;
}

// Checks the diaganols to see if a player has won
var diaganolWinner = function(player) {
  return ((board[0][0] == player && board[1][1] == player && board[2][2] == player) ||
    (board[0][2] == player && board[1][1] == player && board[2][0] == player));
}

// Resets the board, the number of turns, and the instructions for a new game
var refresh = function() {
  board = [["-", "-","-"],["-","-","-"],["-", "-","-"]];
  turns = 0;
  for (var square of squares) {
    square.innerText = "-";
    square.classList.add("unplayed");
    square.classList.remove("alert");
  }
  document.getElementById('info').innerText = "It's your turn, please make a selection...";
  document.getElementById('info').classList.remove("alert");
  document.getElementById('info').classList.remove("success");
}
