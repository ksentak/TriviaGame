$(document).ready(function() {

//Define global variables
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var timeLeft = 15;
    var intervalId;
    var questionCount = 0;

    $("#trivia").hide();
    $("#results").hide();

    var question = document.getElementById("question");
    var choice1 = document.getElementById("A");
    var choice2 = document.getElementById("B");
    var choice3 = document.getElementById("C");
    var choice4 = document.getElementById("D");

//===================================================================================================

// Create my array of questions
    var triviaQuestions = [
        {
        question: "California is home to how many pro football teams?",
        choice1: "One",
        choice2: "Two",
        choice3: "Three",
        choice4: "Four",
        answer: "4",
        },

        {
        question: "Which NFL team plays their home games at Ford Field?",
        choice1: "Detroit Lions",
        choice2: "Chicago Bears",
        choice3: "Indianapolis Colts",
        choice4: "New York Giants",
        answer: "1",
        },

        {
        question: "What city did the Los Angeles Rams play in before moving back to Los Angeles in 2016?",
        choice1: "Oklahoma City",
        choice2: "Memphis",
        choice3: "St. Louis",
        choice4: "San Antonio",
        answer: "3",
        },

        {
        question: "What number did Peyton Manning wear during his career?",
        choice1: "12",
        choice2: "3",
        choice3: "10",
        choice4: "18",
        answer: "4",
        },

        {
        question: "What team is planning to move to Las Vegas for the 2020 season?",
        choice1: "Tennessee Titans",
        choice2: "Oakland Raiders",
        choice3: "Jacksonville Jaguars",
        choice4: "Arizona Cardinals",
        answer: "2",
        },

        {  
        question: "What team has Tom Brady played his entire career for?",
        choice1: "New England Patriots",
        choice2: "Pittsburgh Steelers",
        choice3: "Denver Broncos",
        choice4: "New York Jets",
        answer: "1",
        },

        {
        question: "Which team is the only team to go undefeated in a season?",
        choice1: "Dallas Cowboys",
        choice2: "Miami Dolphins",
        choice3: "New England Patriots",
        choice4: "Kansas City Chiefs",
        answer: "2",
        },

        {
        question: "Where do the Philadelphia Eagles play their home games at?",
        choice1: "U.S. Bank Stadium",
        choice2: "MetLife Stadium",
        choice3: "AT&T Stadium",
        choice4: "Lincoln Financial Field",
        answer: "4",
        },

        {
        question: "What city do the Browns play in?",
        choice1: "Buffalo",
        choice2: "Baltimore",
        choice3: "Cleveland",
        choice4: "Cincinnati",
        answer: "3",
        },

        {
        question: "Where is the Pro Football Hall of Fame located?",
        choice1: "Canton, OH",
        choice2: "New York City, NY",
        choice3: "Washington D.C.",
        choice4: "Miami, FL",
        answer: "1",
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

//=====================================================================================================

//Functions

//Resets everything and brings you back to start menu
    function reset() {
        $("#startbtn").show();
        $("#letsplay").show();
        $("#trivia").hide();
        $("#results").hide();
        resetTimer();
        questionCount = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        unansweredQuestions = 0;
        timeLeft = 15;
    }

//New Game function that starts the quiz
    function newGame() {
        $("#startbtn").hide();
        $("#letsplay").hide();
        $("#timer").show();
        $("#trivia").show();
        $("#results").hide();
    }

//Functions used to create the countdown timer
    function resetTimer() {
        timeLeft = 15;
        $("#timer").html("<h2>Time Left: " + timeLeft + "</h2>");
        countDown();
    }

    function countDown() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);    
    }
    
    function stopTimer () {
        clearInterval(intervalId);
    }

    function decrement() {
        timeLeft--;
        $("#timer").html("<h2>Time Left: " + timeLeft + "</h2>");

//When timer = 0, an unanswered question is tallied and the next question appears
        if (timeLeft == 0) {
            unansweredQuestions++;
            console.log(unansweredQuestions);
            console.log("You ran out of time!");
            resetTimer();
            questionCount++;
            displayQuestions();
        } 
    }

//This function will work to display qustions to the screen
    function displayQuestions() {
            let q = triviaQuestions[questionCount];
            
            question.innerHTML = "<p>"+ q.question +"</p>";
            choice1.innerHTML = q.choice1;
            choice2.innerHTML = q.choice2;
            choice3.innerHTML = q.choice3;
            choice4.innerHTML = q.choice4;

            //Ends the quiz after the questions are finished and displays results
            if (questionCount > 9) {
                alert("The quiz is now over. Let's see your results.");
                stopTimer();
                $("#timer").hide();
                $("#trivia").hide();
                showResults();            
            }        
    }

//Displays results when called upon 
    function showResults() {
        $("#results").show();
        $("#correctanswers").html("<h3> Correct Answers: "+correctAnswers+"</h3>");
        $("#incorrectanswers").html("<h3> Incorrect Answers: "+incorrectAnswers+"</h3>");
        $("#unansweredquestions").html("<h3> Unanswered Questions: "+unansweredQuestions+"</h3>");
    }

//=======================================================================================================
//On-clicks

//When start is clicked, the quiz begins 
    $("#startbtn").on("click", function() {
        newGame(); 
        resetTimer(); 
        countDown();
        displayQuestions();
    });

//When answer button is clicked calculates whether answer was correct or incorrect
    $(".answerbutton").on("click", function() {
        var userAnswer = $(this).val();
        console.log(userAnswer);
        console.log(triviaQuestions[questionCount].answer);
        resetTimer();
        
        if (userAnswer == triviaQuestions[questionCount].answer) {
             correctAnswers++;
             console.log(correctAnswers);
             console.log("Correct!");

        }

        else {
            incorrectAnswers++;
            console.log(incorrectAnswers);
            console.log("Wrong!");
        }

        questionCount++;
        displayQuestions();
    
    });
    
    //Restarts the quiz without refreshing
    $("#reset").on("click", function() {
        reset();

    });

});
