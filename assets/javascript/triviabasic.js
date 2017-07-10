$("#startButton").on("click", function() {
  $("#startButton").remove();
  for (var i=0; i < questions.length; i++) {
    $("#subWrapper").append("<h2>"+questions[i].question+"</h2>");
      for (var j=0; j < questions[i].answers.length; j++) {
        $("#subWrapper").append("<input type='radio' name='question-"+i+"' value='+questions[i].answers[j]+'>"+questions[i].answers[j]);
      }
  }
})

// questions array
var questions = [{
  question: "In which 20th-century decade was Barbie's boyfriend Ken first made?", 
  answers: ["1920s", "1960s", "1930s", "1940s"],
  correctAnswer: "1960s"
  }, {
  question: "In which decade was Madonna born?", 
  answers: ["1920s", "1960s", "1950s", "1940s"],
  correctAnswer: "1950s"
  }, {
  question: "Who plays against the USA in golf's Walker Cup?", 
  answers: ["Germany", "Spain", "Mexico", "Great Britain"], 
  correctAnswer: "Great Britain"
  }, {
  question: "What does the F stand for in FBI?",
  answers: ["French", "Federal", "Fantastic", "Fine"],
  correctAnswer: "Federal"
  }, {
  question: "Which actor is the dad of Jamie Lee Curtis?", 
  answers: ["Tony Curtis", "Frank Curtis", "Michael Lee Curtis", "Mark Curtis"],
  correctAnswer: "Tony Curtis"
  }, {
  question: "In football, where do the Chargers come from?", 
  answers: ["San Diego", "San Fransico", "Dallas", "New York"],
  correctAnswer: "San Diego"
  }, {
  question: "The cause of what color fever was discovered in 1900?",
  answers: ["Red", "Green", "Yellow", "Blue"],
  correctAnswer: "Yellow"
  }, {
  question: "Where do the Super Bowl winning Cowboys come from?",
  answers: ["Austin", "Dallas", "San Diego", "New York"],
  correctAnswer: "Dallas"
  }, {
  question: "The US declared war on which country after the bombing of Pearl Harbor?",
  answers: ["North Korea", "Germany", "Japan", "China"],
  correctAnswer: "Japan"
  }, {
  question: "Which state is called the volunteer State?", 
  answers: ["Texas", "North Carolina", "Tennessee", "Alabama"],
  correctAnswer: "Tennessee"
  }
  ];



















// var questions = new Array();
// questions[0] = ["What does Honolulu translate to in English?"];
// questions[1] = ["What is the capital of Hungary?"];

// var choices = new Array();
// choices[0] = ["Monkeys", "Hello", "Welcome", "Sheltered Harbor"];
// choices[1] = ["Tanzania", "Budapest", "Israel", "Cantha"];

// var answers = new Array();
// answers[0] = ["Sheltered Harbor"];
// answers[1] = ["Budapest"];

// $("#titleDiv").html("TRIVIA");

//    //  Interval Demonstration
//     //  Set our number counter to 100.
//     var number = 10;

//     //  Variable that will hold our interval ID when we execute
//     //  the "run" function
//     var intervalId;
//     $("#timeRemainingDiv").html("Time Remaining: " + number);
    

//     //  The run function sets an interval
//     //  that runs the decrement function once a second.
//     function run() {
//       intervalId = setInterval(decrement, 1000);
//     }

//     //  The decrement function.
//     function decrement() {

//       //  Decrease number by one.
//       number--;

//       //  Once number hits zero...
//       if (number === 0) {

//         //  ...run the stop function.
//         stop();

//         //  Alert the user that time is up.
//         alert("Time Up!");
//       }
//     }

//     //  The stop function
//     function stop() {

//       //  Clears our intervalId
//       //  We just pass the name of the interval
//       //  to the clearInterval function.
//       clearInterval(intervalId);
//     }

//     //  Execute the run function.
//     run();

// //    load the questions
//     window.onload = askQuestion;
//     var askQuestion = function() {
//      var randomQuestion = questions[Math.floor(Math.random() *questions.length)];
//         $("#questionsDiv").html(randomQuestion);
//     var i = questions.indexOf(randomQuestion);
//     console.log(i);    
//     console.log(randomQuestion)      

//  // show the answer buttons   
//     var answerButton = choices[i];
//      for (var j = 0; j < choices[i].length; j++) {
//         var answerBtn = $("<button>");
//         answerBtn.addClass("btn btn-primary");
//         answerBtn.attr("data-answers", "choices[i][j]");
//         answerBtn.text(choices[i][j]);
//         $("#choicesDiv").append(answerBtn);
//      }
//    // make the buttons save the answer to a variable 
//     $(".btn").on("click", function(event) {
//         var userChoice = $(this)[0].innerText;
//         console.log(userChoice)
        

    
//     })  
// // check if button click == correct answer
// function check() {
// //         check(userChoice);
// //         if (userChoice === correctAnswer[i]) {
// //             console.log("yes");
// //         }
// //         else {
// //             console.log("wrong")
// //         }
// //         console.log(answerButton)    
// }
       
//     askQuestion();  
   