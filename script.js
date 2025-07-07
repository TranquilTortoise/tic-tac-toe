// Global Constants
const ROWS = 3;
const COLUMNS = 3;


// Functions and Objects

    // create gameboard as an IIFE
const gameboard = (function () {
    let boardArr = [];

    const buildBoard = (rows, cols) => {
        boardArr = [];  // reset array
        for (let i = 0; i < rows; i++) {
            boardArr[i] = [];   // inner arr for each row
            for (let j = 0; j < cols; j++) {
                boardArr[i][j] = "empty";
            }
        }
        return boardArr;
    }
    return { boardArr, buildBoard };
})();

    // create player factory function
function createPlayer (name, symbol) {
    return { name, symbol };
}

// Execute
    // create a board to play on
let ticTacToeBoard = gameboard.buildBoard(ROWS, COLUMNS);

const player1 = createPlayer('Lephos', 'X');
const player2 = createPlayer('Melissa', 'O');