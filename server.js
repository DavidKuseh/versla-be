const express =  require("express");
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const authRouter = require('./routes/authRouter');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter);

server.get("/", (req,res) => {
    res.send("Up and running")
})

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000")
})

module.exports = server;