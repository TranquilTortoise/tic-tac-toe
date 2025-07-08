function createPlayer (stamp) {
    getName: function () =>{
        prompt("What is your name?")
    }

}


// Gameboard represents the state of the board
// Each square holds a Cell which starts as "empty" but is
// replaced with "X" or "O"

/* function Gameboard() {
    const rows = 3;
    const columns = 3;
    let board = [];

    // 2d array that represents the state of the game board
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }

        
    }

    // get board for UI to render it
        const getBoard = () => board;

    return {
        getBoard
    };
}

function Cell() {
    let value = 'empty';

    // a player stamps 'X' or 'O' in an empty cell
    const stampCell = (player) => { 
        value = player.symbol;
    }

    const getStamp = () => value;

    return {
        stampCell,
        getStamp
    };
}

var game = {
    turn: 1,    // turns count up each time a player makes a choice; 9 turns total
    // draw board
    // get player names from console
    // determine first player ('X')
    // ask player1 for coordinates
    // set cell from "empty" to "X" or "O"
    // check for winner if round > 5
    // ask player2 for coordinates
    // set cell from "empty" to "X" or "O"
    // check for winner if round > 5
};

var player = {
    // player name
}

