const category = document.getElementById('category')
const answerBox = document.getElementById('answer-box');
const questionBox = document.getElementById('question-box');
const showQuestion = document.getElementById('question-button');
const nextAnswer = document.getElementById('answer-button');
const sportsTrivia = document.getElementById('sports-link');

let i = 0;
let triviaArray = [];

document.addEventListener('DOMContentLoaded', function() {
    sportsTrivia.addEventListener('click', () => {
        fetch('/trivia/Sports')
        .then(res => res.json())
        .then((trivia) => {
            console.log(trivia);
            triviaArray = trivia;
            category.innerHTML = triviaArray[i].category;
            answerBox.innerHTML = triviaArray[i].answer;
        })
    })

    function displayNextAnswer() {
        // console.log('clicked!');
        questionBox.innerHTML = '';
        if(i >= triviaArray.length) i = -1;
        i++;
        answerBox.innerHTML = triviaArray[i].answer;
    }
 
    nextAnswer.addEventListener('click', displayNextAnswer, { once: false }); 

    showQuestion.addEventListener('click', () => {
        questionBox.innerHTML = triviaArray[i].question;
    })

    // nextAnswer.removeEventListener('click', displayNextAnswer); 

})



