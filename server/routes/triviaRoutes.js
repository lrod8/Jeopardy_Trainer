const express = require('express');
const router = express.Router();
const { getTrivia } = require('../controllers/triviaController');

router.get('/:category', getTrivia, (req, res) => {
    //send the trivia question and answer to the client
    res.status(200).send({message : `Triva time!! ${req.params.category}`});
})

//post route for quiz

module.exports = router;