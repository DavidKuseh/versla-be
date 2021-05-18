const router = require('express').Router();

const Users = require("../data/models/authmodel");
const { errorMessage } = require('../helpers/variables'); 

router.get('/all', async (req,res) => {
    try {
        const profiles = await Users.findUsers();
        res.status(200).json(profiles)
    } catch(err){
        console.log(err)
    }
}) 

router.get('/', async (req, res) => {
    try{
        const profile = await Users.findUserById(req.decodedToken.sub);
        console.log("req.decodedToken.sub: ", req.decodedToken.sub, profile);
        res.status(200).json(profile);
    } catch(error){
        res.status(500).json({ message: errorMessage, error: error.message });
    } 
});


module.exports = router;