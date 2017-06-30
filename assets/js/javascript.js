var questions = new Array();
questions[0] = ["What does Honolulu translate to in English?"];
questions[1] = ["What is the capital of Hungary?"];

var choices = new Array();
choices[0] = ["Monkeys", "Hello", "Welcome", "Sheltered Harbor"];
choices[1] = ["Tanzania", "Budapest", "Israel", "Cantha"];

var answers = new Array();
answers[0] = ["Sheltered Harbor"];
answers[1] = ["Budapest"];

$("#titleDiv").html("TRIVIA");

   //  Interval Demonstration
    //  Set our number counter to 100.
    var number = 10;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
    $("#timeRemainingDiv").html("Time Remaining: " + number);
    

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();

//    load the questions
    window.onload = askQuestion;
    var askQuestion = function() {
     var randomQuestion = questions[Math.floor(Math.random() *questions.length)];
        $("#questionsDiv").html(randomQuestion);
    var i = questions.indexOf(randomQuestion);
    console.log(i);    
    console.log(randomQuestion)      

 // show the answer buttons   
    var answerButton = choices[i];
     for (var j = 0; j < choices[i].length; j++) {
        var answerBtn = $("<button>");
        answerBtn.addClass("btn btn-primary");
        answerBtn.attr("data-answers", "choices[i][j]");
        answerBtn.text(choices[i][j]);
        $("#choicesDiv").append(answerBtn);
     }
   // make the buttons save the answer to a variable 
    $(".btn").on("click", function(event) {
        var userChoice = $(this)[0].innerText;
        console.log(userChoice)
        

    
    })  
// check if button click == correct answer
function check() {
//         check(userChoice);
//         if (userChoice === correctAnswer[i]) {
//             console.log("yes");
//         }
//         else {
//             console.log("wrong")
//         }
//         console.log(answerButton)    
}
       
    askQuestion();  
   