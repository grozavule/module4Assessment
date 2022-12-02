const COMPUTER_CHARACTER = 'O';
const PLAYER_CHARACTER = 'X';

// let gameboard = {
//     a1: null,
//     a2: null,
//     a3: null,
//     b1: null,
//     b2: null,
//     b3: null
// }

let gameboard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

const parseCellReference = reference => { 
    return { 
        row: reference.charAt(0),
        column: reference.charAt(2)
    }
}

const findWinner = character => {
    return findVerticalWinner(character) || findHorizontalWinner(character) || findDiagonalWinner(character);
}
//object matrix winner functions
// const findVerticalWinner = (character) => {
//     return (gameboard.a1 === character && gameboard.b1 === character && gameboard.c1 === character)
//     || (gameboard.a2 === character && gameboard.b2 === character && gameboard.c2 === character)
//     || (gameboard.a3 === character && gameboard.b3 === character && gameboard.c3 === character)
    
// }

// const findHorizontalWinner = (character) => {
//     return (gameboard.a1 === character && gameboard.a2 === character && gameboard.a3 === character)
//     || (gameboard.b1 === character && gameboard.b2 === character && gameboard.b3 === character)
//     || (gameboard.c1 === character && gameboard.c2 === character && gameboard.c3 === character)
// }

// const findDiagonalWinner = (character) => {
//     return (gameboard.a1 === character && gameboard.b2 === character && gameboard.c3 === character)
//     || (gameboard.a3 === character && gameboard.b2 === character && gameboard.c1 === character);
// }

//multi-dimensional array winner functions
const findVerticalWinner = (character) => {
    return (gameboard[0][0] === character && gameboard[1][0] === character && gameboard[2][0] === character)
    || (gameboard[0][1] === character && gameboard[1][1] === character && gameboard[2][1] === character)
    || (gameboard[0][2] === character && gameboard[1][2] === character && gameboard[2][2] === character)
    
}

const findHorizontalWinner = (character) => {
    return (gameboard[0][0] === character && gameboard[0][1] === character && gameboard[0][2] === character)
    || (gameboard[1][0] === character && gameboard[1][1] === character && gameboard[1][2] === character)
    || (gameboard[2][0] === character && gameboard[2][1] === character && gameboard[2][2] === character)
}

const findDiagonalWinner = (character) => {
    return (gameboard[0][0] === character && gameboard[1][1] === character && gameboard[2][2] === character)
    || (gameboard[0][2] === character && gameboard[1][1] === character && gameboard[2][0] === character);
}

const makeComputerMove = () => {
    
}

module.exports = {
    savePlayerMove: (req, res) => {
        let { cell, character } = req.body;
        let ref = parseCellReference;
        gameboard[ref.row][ref.column] = character;
        
        if(findWinner(PLAYER_CHARACTER))
        {
            res.status(200).send(`You won!`);
            return;
        }
        else
        {
            makeComputerMove();
        }
    }
}