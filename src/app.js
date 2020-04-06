const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log('Connected to DB'))
    .catch(err => console.log(err));

const port = process.env.PORT || 3000;

const homeRoutes = require('./routes/home');
const postRoutes = require('./routes/posts');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/blog-post', postRoutes);
app.use(homeRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});