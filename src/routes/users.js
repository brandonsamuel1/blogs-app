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
        res.status(400).send(e.message)
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
        res.status(400).send(e.message)
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

// DELETE A USER
router.delete('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findByIdAndDelete(_id)

        if (!user) {
            res.send('No user found')
        }

        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// LOGIN USER
router.post('/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try {
        const user = await User.findByCredentials(email, password)

        res.status(200).send(user)
    } catch (e) {
        res.send(e)
    }
})

module.exports = router;