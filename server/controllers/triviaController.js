const asyncHandler = require('express-async-handler');

const Trivia = require('../models/triviaModel');

// @desc Get trivia questions and answers by type selected
// @route GET /trivia/:type
// @access Public
const getTrivia = asyncHandler(async (req, res, next) => {
    //get the trivia question and answer and pass to the server on the locals
    const trivia = await Trivia.find({type: req.params.type});
    res.status(200).json(trivia);
});

const setTrivia = asyncHandler(async (req, res) => {
    if(!req.body.type) {
        res.status(400)
        throw new Error('Please add a type field');
    }
    
    const trivia = await Trivia.create({
        type: req.body.type,
        category: req.body.category,
        answer: req.body.answer,
        question: req.body.question
    })
    
    res.status(200).json(trivia);
})

const updateTrivia = asyncHandler(async (req, res) => {
    const trivia = await Trivia.findById(req.params.id);
    if(!trivia) {
        res.status(400);
        throw new Error('Trivia not found');
    }
    const updatedTrivia = await Trivia.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedTrivia);
})

const deleteTrivia = asyncHandler(async (req, res) => {
    const trivia = await Trivia.findByIdAndDelete(req.params.id);
    if(!trivia) {
        res.status(400);
        throw new Error('Trivia not found');
    }
    res.status(200).json({ message: `Deleted trivia id ${req.params.id}` });
})

//add function for quiz functionality
// console.log(req.body);
// if(!req.body.text) {
//     res.status(400).json({message: 'Please add a text field'})
// }

module.exports = {
    getTrivia, setTrivia, updateTrivia, deleteTrivia,
}