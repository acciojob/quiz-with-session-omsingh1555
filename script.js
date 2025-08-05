

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
  }
];

const form = document.getElementById("quiz-form");

// Load stored answers if available
let storedAnswers = sessionStorage.getItem("quiz-answers");
let userAnswers = storedAnswers ? JSON.parse(storedAnswers) : [];

function renderQuestions() {
  form.innerHTML = ""; // Clear previous
  questions.forEach((q, i) => {
    const wrapper = document.createElement("div");

    const qText = document.createElement("p");
    qText.textContent = q.question;
    wrapper.appendChild(qText);

    q.choices.forEach(choice => {
      const label = document.createElement("label");
      const input = document.createElement("input");

      input.type = "radio";
      input.name = `question-${i}`;
      input.value = choice;

      if (userAnswers[i] === choice) {
        input.checked = true;
      }

      // Save to session storage on change
      input.addEventListener("change", () => {
        userAnswers[i] = choice;
        sessionStorage.setItem("quiz-answers", JSON.stringify(userAnswers));
      });

      label.appendChild(input);
      label.appendChild(document.createTextNode(choice));
      wrapper.appendChild(label);
      wrapper.appendChild(document.createElement("br"));
    });

    form.appendChild(wrapper);
  });
}

renderQuestions();

document.getElementById("submit").addEventListener("click", () => {
  alert("Quiz submitted!");
});

