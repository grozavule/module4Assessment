const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const controller = require('./controller')
const tictactoeController = require('./tictactoeController');

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);

app.post('/api/tictactoe', tictactoeController.savePlayerMove);

app.listen(4000, () => console.log("Server running on 4000"));
