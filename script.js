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
    // while loop until player picks a valid spot
    let validMove = false;
    while (!validMove) {
        let input = prompt("Pick a spot; e.g. 'i,j'");

        let i = parseInt(input[0]);
        let j = parseInt(input[2]);
    
        // gameController checks if spot is available
        if (board[i][j] !== null) {
            alert("Spot already taken. Please choose another.");
            continue;
        }

        // valid move
        board[i][j] = currentPlayer.symbol;
        validMove = true;
    }
}

function checkWinner() {
    if ((board[0][0] === board[0][1] && board[0][1] === board[0][2]) ||
        (board[1][0] === board[1][1] && board[1][1] === board[1][2]) ||
        (board[2][0] === board[2][1] && board[2][1] === board[2][2]) ||
        (board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
        (board[2][0] === board[1][1] && board[1][1] === board[0][2])) {
            return true;
        }
        return false;
}

function playTurn(turn) {
    pickSpot();
    currentPlayer = swapTurn(currentPlayer);
    turn++;
}
            // check for winner or tie

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
