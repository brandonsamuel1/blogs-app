const express = require('express');
const router = express.Router();

const User = require('../models/users')

// CREATE A USER
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()

        res.status(201).send(user)
    } catch (e) {
        res.send(e)
    }
})

// GET ALL USERS
router.get('/users', async (req, res) => {
    try {
        const user = await User.find()

        if (!user) {
            return res.status(500).send('No users found')
        }

        res.status(200).send(user)
    } catch (e) {
        res.send(e)
    }
})

// FETCH A USER
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id)

        if (!user) {
            res.send('No user found')
        }

        res.status(200).send(user)
    } catch (e) {
        res.send(e)
    }
})

module.exports = router;