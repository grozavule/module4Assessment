const BASE_URL = `http://localhost:4000`;
const PLAYER_CHARACTER = 'X';

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const ticTacToeBtns = document.querySelectorAll('.ttt-board-space');
ticTacToeBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        let cellReference = e.target.parentNode.data-cell-ref;
        console.log(cellReference);

        let cell = e.target.parentNode;
        cell.textContent = PLAYER_CHARACTER;

        let move = {
            'cell': cellReference,
            'character': 'x'
        }

        //this functionality could all be done on the client side, but I included the HTTP requests
        //to fulfill the requirements of this assignment
        axios.post(`${BASE_URL}/api/tictactoe`, move)
        .then(res => {

        })
        .catch(error => {

        });
        
    })
})


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

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);