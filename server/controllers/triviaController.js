// @desc Get trivia questions and answers by category selected
// @route GET /trivia
// @access Public
const getTrivia = (req, res) => {
    //get the trivia question and answer and pass to the server on the locals
    res.status(200).send({message : `Triva time!! ${req.params.category}`});
}

//add function for quiz functionality

module.exports = {
    getTrivia,
}