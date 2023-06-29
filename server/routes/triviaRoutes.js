const express = require('express');
const router = express.Router();
const { getTrivia, setTrivia, updateTrivia, deleteTrivia} = require('../controllers/triviaController');

router.get('/:type', getTrivia);
router.post('/', setTrivia);
router.put('/:id', updateTrivia);
router.delete('/:id', deleteTrivia);

//post route for quiz

module.exports = router;