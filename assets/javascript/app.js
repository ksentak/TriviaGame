$(document).ready(function() {

//Define global variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;

//Create my array of questions

var triviaQuestions = [
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: "",
    },

    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: "",
    },

    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: "",
    },

    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: "",
    },

    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: "",
    },

    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: "",
    },

    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: "",
    },

    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: "",
    },

    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: "",
    },

    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: "",
    },
]

//New Game function that hides timer/# of correct & incorrect answers
function newGame() {
    $("#timer").hide();
    $("#questions").hide();
    $("#results").hide();
}



//When start is clicked, the button disappears and trivia game begins 
$("#startbtn").on("click", function() {
    $("#startbtn").remove();
    $("#letsplay").remove();
    $("#timer").show();
    $("#questions").show();

//Also on click a timer appears at the top and begins to count down until questions are answered or time is up


});


//A question appears with 4 multiple choice selections to choose from

//Answer buttons 1-4 match input from an array?
//on click of one of the four answer buttons move on to the next question
//if timer runs out move to next question

//Reset timer each time a new question appears 


// if statements

//if answer is correct tally a correct answer
//if answer is not correct tally an incorrect answer
//if question is not answered tally an unanswered question

});

