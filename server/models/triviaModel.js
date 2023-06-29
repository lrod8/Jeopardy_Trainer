const mongoose = require('mongoose');

const triviaSchema = mongoose.Schema({
    type: String,
    category: String,
    answer: String,
    question: String
});

module.exports = mongoose.model('Trivia', triviaSchema);