function checkQuiz() {
  let question1 = document.getElementById("question1").value;
  let question2 = document.getElementById("question2").value;
  let question3 = document.getElementById("question3").value;

  if (question1 === "" || question2 === "" || question3 === "") {
    document.getElementById("quizResult").innerHTML =
      "Please answer all questions.";
    return;
  }

  let score = 0;

  if (question1 === "correct") {
    score++;
  }

  if (question2 === "correct") {
    score++;
  }

  if (question3 === "correct") {
    score++;
  }

  if (score === 3) {
    document.getElementById("quizResult").innerHTML =
      "Your score is 3/3. Excellent!";
  } else if (score === 2) {
    document.getElementById("quizResult").innerHTML =
      "Your score is 2/3. Good job!";
  } else {
    document.getElementById("quizResult").innerHTML =
      "Your score is " + score + "/3. Try again!";
  }
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("contactMessage").value;

  if (name === "" || email === "" || message === "") {
    document.getElementById("formResult").innerHTML =
      "Please complete all fields.";
    return false;
  }

  if (!email.includes("@")) {
    document.getElementById("formResult").innerHTML =
      "Please enter a valid email address.";
    return false;
  }

  document.getElementById("formResult").innerHTML =
    "Thank you. Your message has been checked.";

  return false;
}
