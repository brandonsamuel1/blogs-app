const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port, (req, res) => {
    console.log(`Server started on port ${port}`);
});