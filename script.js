const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

const questionsElement = document.getElementById("questions");

// Load saved answers from sessionStorage
const savedAnswers = JSON.parse(sessionStorage.getItem("userAnswers")) || [];

function saveAnswer(index, value) {
  savedAnswers[index] = value;
  sessionStorage.setItem("userAnswers", JSON.stringify(savedAnswers));
}

function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const questionWrapper = document.createElement("div");

    const questionText = document.createElement("p");
    questionText.textContent = q.question;
    questionWrapper.appendChild(questionText);

    for (let j = 0; j < q.choices.length; j++) {
      const choice = q.choices[j];

      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question-${i}`;
      radio.value = choice;

      // Check from sessionStorage
      if (savedAnswers[i] === choice) {
        radio.checked = true;
      }

      radio.addEventListener("change", () => {
        saveAnswer(i, choice);
      });

      label.appendChild(radio);
      label.appendChild(document.createTextNode(choice));
      questionWrapper.appendChild(label);
      questionWrapper.appendChild(document.createElement("br"));
    }

    questionsElement.appendChild(questionWrapper);
  }
}

renderQuestions();
