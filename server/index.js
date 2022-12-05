const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const controller = require('./controller')
const tictactoeController = require('./tictactoeController');
const madlibController = require('./madlibController');

//default routes
app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);

//tic-tac-toe routes
app.post('/api/tictactoe', tictactoeController.savePlayerMove);
app.delete('/api/tictactoe', tictactoeController.startGameOver);

//madlib routes
app.get('/api/madlibs/:madlib', madlibController.getMadlib);
app.post('/api/madlibs/:madlib/answers', madlibController.saveAnswers);

app.listen(4000, () => console.log("Server running on 4000"));
