const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../data/models/authmodel');
const { generateToken } = require('../helpers/tokenize');
const { errorMessage, registerWelcome, loginWelcome } = require('../helpers/variables'); 

router.post('/register', async (req,res) => {
    const { password } = req.body;
    const hash = bcrypt.hashSync(password, 14);
    req.body.password = hash;
    try {
        const user = await Users.addNewUser(req.body);
        const token = await generateToken(user);
        delete user.password; 
        res.status(201).json({user, message: registerWelcome(user.firstName), token })
    } catch (error) {
        res.status(500).json({ message: errorMessage, error: error.message });
    }
});

router.post('/login', async (req,res) => {
    try {
        const token = generateToken(req.user);
        const {email, password} = req.body;
        const login = await Users.findUserById(email, password);
        res.status(200).json({login, message: loginWelcome(user.firstName), token })
    } catch (error) {
        res.status(500).json({ message: errorMessage, error: error.message });
    }
})

module.exports = router;