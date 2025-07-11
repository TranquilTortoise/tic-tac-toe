


// Gameboard:
//  Store 3x3 grid
const createBoard = (function () {
    const board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    return board;
});
        // cells are named for their row and column; e.g. id="0,0"
        // check if position is available
        // check for winner or tie

// Player:
    // an object with a name and symbol
function createPlayer(name, symbol) {
    return {
        name,
        symbol,
    };
}

// Game Controller
    // track whose turn it is
    function swapTurn(player) {
        if (player === player1) {
            return player2;
        }
        if (player === player2) {
            return player1;
        }
    }
    // handle a turn
        // currentPlayer picks a spot
function pickSpot() {
    let input = prompt("Pick a spot; e.g. 'i,j'");
    let i = input[0];
    let j = input[2];
    board[i][j] = currentPlayer.symbol;
}

function playTurn(turn) {
    pickSpot();
    turn++;
}
        // gameController checks if spot is available
            // if not, prompt player to choose new spot
            // if available, change cell value to player.symbol
            // check for winner or tie
        // if game is not over, change value of currentPlayer

    /*TESTING:
    const game = GameController();
game.playRound(0, 0); // Player 1 plays top-left
game.playRound(1, 1); // Player 2 plays center
console.log(game.getBoard()); // See current state
*/

// Execute
const player1 = createPlayer("Lephos", "X");
const player2 = createPlayer("Melissa", "O");
let currentPlayer = player1;
let turn = 1;
board = createBoard();
pickSpot();
currentPlayer = swapTurn(currentPlayer);
pickSpot();
