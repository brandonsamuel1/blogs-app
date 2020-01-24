const Post = require('../models/post');

exports.getAllPosts = (req, res, next) => {
    Post.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err))
};

exports.postBlogPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const date = new Date;

    const post = new Post({
        title: title,
        content: content,
        date: date
    });

    post.save()
        .then(result => {
            console.log(result);
            res.redirect('/');
        })
        .catch(err => console.log(err));
};