const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const triviaRouter = require('./routes/triviaRoutes');

const port = process.env.PORT || 3000;
const app = express();

//parse responses to json
app.use(express.json());

//root directory
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
})

//trivia router
app.use('/trivia', triviaRouter);

//static assets
app.use(express.static('client'));

app.listen(port, () => console.log(`Server listening on port ${port}`));