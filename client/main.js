const BASE_URL = `http://localhost:4000`;
const PLAYER_CHARACTER = 'X';
const COMPUTER_CHARACTER = 'O';

//these status constants need to match those in server/classes/GameSuccessStatus.js
const STATUS_PLAYER_WINS = 1;
const STATUS_COMPUTER_WINS = 2;
const STATUS_DRAW_GAME = 3;
const STATUS_GAME_ONGOING = 4;

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const ticTacToeBtns = document.querySelectorAll('.ttt-board-space');


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const disableAllSpaces = () => {
    ticTacToeBtns.forEach(btn => {
        btn.disabled = true;
    });
};
const enableAllSpaces = () => {
    ticTacToeBtns.forEach(btn => {
        btn.disabled = false;
    })
}

ticTacToeBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        let cellReference = e.target.parentNode.getAttribute('data-cell-ref');

        let cell = e.target.parentNode;
        cell.textContent = PLAYER_CHARACTER;

        let move = {
            'cell': cellReference,
            'character': PLAYER_CHARACTER
        }

        //makes a post call to the server to save the player's move
        //in response, the server should send back the computer's move
        axios.post(`${BASE_URL}/api/tictactoe`, move)
        .then(res => {
            switch(res.data.status)
            {
                case STATUS_COMPUTER_WINS:
                    alert(res.data.message);
                case STATUS_PLAYER_WINS:
                    alert(res.data.message);
                case STATUS_DRAW_GAME:
                    alert(res.data.message);
                case STATUS_GAME_ONGOING:
                    console.log('STATUS ACCEPTED');
                    let { row, col } = res.data.lastMove;
                    let computerMove = document.querySelector(`div[data-cell-ref='${row}-${col}']`);
                    computerMove.textContent = COMPUTER_CHARACTER;
                    break;
            }
        })
        .catch(error => {
            //alert(error.response.data);
            console.log(error);
        });
        
    })
})

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);