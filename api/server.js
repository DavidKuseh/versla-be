require('dotenv').config();

const express =  require("express");
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const authRouter = require('../routes/authRouter');
const profileRouter = require('../routes/profileRouter');
const productRouter = require('../routes/productRouter');
const { validateBody, validateEmail, validateUser, restricted, validateProduct } = require('../helpers/middleware');
const { errorMessage } = require('../helpers/variables');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', validateBody, validateEmail, validateUser, authRouter);
server.use('/api/profile', restricted, profileRouter);
server.use('/api/product', validateBody, restricted, validateProduct, productRouter);

server.get("/", (req,res) => {
    res.send("Up and running")
})

module.exports = server;