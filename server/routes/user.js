const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/getAllUsers', async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.send(users);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.post('/login', async (req, res) => {
    try {
        const user = await User.login(req.body)
        res.send({...user, userPassword: undefined})
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})

.post('/register', async (req, res) => {
    try {
        const user = await User.register(req.body)
        res.send({...user, userPassword: undefined})
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})
  
.put('/editUser', async (req, res) => {
    try {
        let user = await User.editUserName(req.body)
        res.send({...user, userPassword: undefined})
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})
  
.delete('/deleteUser', async (req, res) => {
    try {
        await User.deleteUser(req.body)
        res.send({success: "Account deleted: Red card for your presence! Your footprints in our blogging turf were truly one of a kind. Farewell, blogging champion. May your future endeavors be as entertaining as your comment sections! #GoalPostsMissYou"});
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})

module.exports = router;