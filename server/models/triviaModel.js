const mongoose = require('mongoose');

const triviaSchema = mongoose.Schema({
    type: String,
    category: String,
    answer: String,
    question: String,
    value: Number
});

module.exports = mongoose.model('Trivia', triviaSchema);