const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const triviaRouter = require('./routes/triviaRoutes');

connectDB();

const port = process.env.PORT || 3000;
const app = express();

//parse responses to json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//root directory
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
})

//trivia router
app.use('/trivia', triviaRouter);

//static assets
app.use(express.static('client'));

//global error handler
function globalErrorHandler (err, req, res, next) {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}
app.use(globalErrorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}`));