//  QUIZ ASSIGNMENT - HARSHWEEN MULTANI

// Event listener for the button
document.getElementById("submit").addEventListener("click", checkAnswers);

// Function to check answers and display result
function checkAnswers() {
  // Retrieve user's answers from input fields and convert to lowercase
  var answer1 = document.getElementById("answer1").value.toLowerCase();
  var answer2 = document.getElementById("answer2").value.toLowerCase();
  var answer3 = document.getElementById("answer3").value.toLowerCase();
  var answer4 = document.getElementById("answer4").value.toLowerCase();
  var answer5 = document.getElementById("answer5").value.toLowerCase();
  var answer6 = document.getElementById("answer6").value.toLowerCase();

  // Variable to store user's score
  var score = 0;

  // Check answer for question 1
  if (answer1 === "14") {
    // If correct, change input background color to green
    document.getElementById("answer1").style.backgroundColor = "lightgreen";
    // Increment score
    score++;
  } else {
    // If incorrect, change input background color to red
    document.getElementById("answer1").style.backgroundColor = "tomato";
  }

  // Repeating the same process

  // Check answer for question 2
  if (answer2 === "23") {
    document.getElementById("answer2").style.backgroundColor = "lightgreen";
    score++;
  } else {
    document.getElementById("answer2").style.backgroundColor = "tomato";
  }

  // Check answer for question 3
  if (answer3 === "50") {
    document.getElementById("answer3").style.backgroundColor = "lightgreen";
    score++;
  } else {
    document.getElementById("answer3").style.backgroundColor = "tomato";
  }

  // Check answer for question 4
  if (answer4 === "pekka") {
    document.getElementById("answer4").style.backgroundColor = "lightgreen";
    score++;
  } else {
    document.getElementById("answer4").style.backgroundColor = "tomato";
  }

  // Check answer for question 5
  if (answer5 === "goblin barrel") {
    document.getElementById("answer5").style.backgroundColor = "lightgreen";
    score++;
  } else {
    document.getElementById("answer5").style.backgroundColor = "tomato";
  }

  // Check answer for question 6
  if (answer6 === "no") {
    document.getElementById("answer6").style.backgroundColor = "lightgreen";
    score++;
  } else {
    document.getElementById("answer6").style.backgroundColor = "tomato";
  }

  // Calculate percentage score
  var percentage = Math.round((score / 6) * 100);
  // Display result
  document.getElementById("result").innerHTML =
    "You got " + score + "/6 (" + percentage + "%)";
}
