$(document).ready(function() {

//Define global variables
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var timeLeft = 120;
    var intervalId;


//-------------------------------------------------------------------------------------------------

//Create my array of questions
    var triviaQuestions = [
        {
        question: "California is home to how many pro football teams?",
        choice1: "One",
        choice2: "Two",
        choice3: "Three",
        choice4: "Four",
        answer: "Four",
        },

        {
        question: "Which NFL team plays their home games at Ford Field?",
        choice1: "Detroit Lions",
        choice2: "Chicago Bears",
        choice3: "Indianapolis Colts",
        choice4: "New York Giants",
        answer: "Detriot Lions",
        },

        {
        question: "What city did the Los Angeles Rams play in before moving back to Los Angeles in 2016?",
        choice1: "Oklahoma City",
        choice2: "Memphis",
        choice3: "St. Louis",
        choice4: "San Antonio",
        answer: "St. Louis",
        },

        {
        question: "What number did Peyton Manning wear during his career?",
        choice1: "12",
        choice2: "3",
        choice3: "10",
        choice4: "18",
        answer: "18",
        },

        {
        question: "What team is planning to move to Las Vegas for the 2020 season?",
        choice1: "Tennessee Titans",
        choice2: "Oakland Raiders",
        choice3: "Jacksonville Jaguars",
        choice4: "Arizona Cardinals",
        answer: "Oakland Raiders",
        },

        {  
        question: "What team has Tom Brady played his entire career for?",
        choice1: "New England Patriots",
        choice2: "Pittsburgh Steelers",
        choice3: "Denver Broncos",
        choice4: "New York Jets",
        answer: "New England Patriots",
        },

        {
        question: "Which team is the only team to go undefeated in a season?",
        choice1: "Dallas Cowboys",
        choice2: "Miami Dolphins",
        choice3: "New England Patriots",
        choice4: "Kansas City Chiefs",
        answer: "Miami Dolphins",
        },

        {
        question: "Where do the Philadelphia Eagles play their home games at?",
        choice1: "U.S. Bank Stadium",
        choice2: "MetLife Stadium",
        choice3: "AT&T Stadium",
        choice4: "Lincoln Financial Field",
        answer: "Lincoln Financial Field",
        },

        {
        question: "What city do the Browns play in?",
        choice1: "Buffalo",
        choice2: "Baltimore",
        choice3: "Cleveland",
        choice4: "Cincinnati",
        answer: "Cleveland",
        },

        {
        question: "Where is the Pro Football Hall of Fame located?",
        choice1: "Canton, OH",
        choice2: "New York City, NY",
        choice3: "Washington D.C.",
        choice4: "Miami, FL",
        answer: "Canton, OH",
        },
    ]      

//=====================================================================================================

//Functions

//New Game function that hides timer/# of correct & incorrect answers
    // function replayQuiz() {
    //     $("#timer").hide();
    //     $("#questions").hide();
    //     $("#results").hide();

// }

//Functions used to createe the countdown timer
    function countDown() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);    
    }

    function decrement() {
        timeLeft--;
        $("#timer").html("<h2>Time Left: " + timeLeft + "</h2>");
    }

  //Have to write an if statement when timer = 0 to hide time/questions and display results

    function displayQuestions() {
        //This function will work to display qustions to the screen
    }


//When start is clicked, the button disappears and trivia game begins 
    $("#startbtn").on("click", function() {
        $("#startbtn").hide();
        $("#letsplay").hide();
        $("#timer").show();
        $("#questions").show(); //still have to create a div to display them on the screen
        countDown();

    //Make a function to now display questions displayQuestions();
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
