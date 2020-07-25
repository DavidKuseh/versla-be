require('dotenv').config();

const express =  require("express");
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const authRouter = require('../routes/authRouter');
const { validateBody, validateEmail, validateUser } = require('../helpers/middleware');
const { errorMessage } = require('../helpers/variables');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', validateBody, validateEmail, validateUser, authRouter);

server.get("/", (req,res) => {
    res.send("Up and running")
})

module.exports = server;