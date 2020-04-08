const express = require('express');
require('./db/mongoose')

// Import Routes
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.json())

app.use(postRoutes);
app.use(userRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});