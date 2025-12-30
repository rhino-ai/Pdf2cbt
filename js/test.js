let questions = [
  "Q1. What is 2 + 2 ?",
  "Q2. Capital of India?",
  "Q3. Speed unit is?"
];

let current = 0;

function showQuestion() {
  document.getElementById("question").innerText = questions[current];
}

function nextQ() {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  }
}

function prevQ() {
  if (current > 0) {
    current--;
    showQuestion();
  }
}

function submitTest() {
  alert("Test Submitted");
}

showQuestion();
