const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 8080;

const homeRoutes = require('./routes/home');
const postRoutes = require('./routes/posts');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/blog-post', postRoutes);
app.use(homeRoutes);

app.listen(port, (req, res) => {
    console.log(`Server started on port ${port}`);
});