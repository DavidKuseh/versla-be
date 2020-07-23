const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../data/models/authmodel');

router.post('/register', async (req,res) => {
    const {firstName, lastName, email, password} = req.body;
    const hash = bcrypt.hashSync(password, 14);
    req.body.password = hash;
    try {
        const user =  await Users.addNewUser(req.body);
        res.status(201).json({user, message: `Welcome ${user.firstName} !`})
    } catch (error) {
        res.status(500).json({ error: 'User could not be created'})
    }
})

router.post('/login', async (req,res) => {
    try {
        const {email, password} = req.body;
        const login = await Users.findUserById(email, password);
        res.status(200).json({login, message: `Welcome back!`})
    } catch (error) {
        res.status(500).json({ error: 'Cannot log in'})
    }
})

module.exports = router;