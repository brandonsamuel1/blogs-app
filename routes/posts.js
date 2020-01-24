const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts');

const Post = require('../models/post');

router.get('/:id', postController.getSinglePost)

router.get('/create', (req, res, next) => {
    res.send('CREATE A POST');
});

router.post('/create', postController.postBlogPost);


module.exports = router;