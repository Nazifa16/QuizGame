const questions = [
  {
    question: "What is NaN property in JavaScript?",
    correct_answer: "Not-a-Number",
    answers: ["Is-Number", "Number", "Not-a-Number"],
  },
  {
    question: "Explain “this” keyword.",
    correct_answer:
      "The value of the “this” keyword will always depend on the object that is invoking the function.",
    answers: [
      "It represents the browser window or frame that contains a web page.",
      "Provides access to the Document object representing the web page's HTML document.",
      "The value of the “this” keyword will always depend on the object that is invoking the function.",
    ],
  },
  {
    question: "What are the primitive data types in JavaScript?",
    correct_answer: "Boolean, Undefined, Null, Number, String",
    answers: [
      "Boolean, Undefined, Null, Number, String",
      "Array,Methods",
      "Integer,String,Array",
    ],
  },
  {
    question: "Why do we use callbacks?",
    correct_answer:
      "A method that is sent as an input to another function and is performed inside the other function after it has completed execution.",
    answers: [
      "To wrap a set of Javascript code with a function scope that can be used anywhere in the program",
      "A method that is sent as an input to another function and is performed inside the other function after it has completed execution.",
      "used to call a function in a different object with the given this value, and the arguments are passed in the form of an array.",
    ],
  },
  {
    question: "What are arrow functions?",
    correct_answer:
      "Arrow functions were introduced in the ES6 version of JavaScript. They provide a new and shorter syntax for declaring functions. Arrow functions can only be used as a function expression.",
    answers: [
      "Arrow functions were introduced in the ES6 version of JavaScript. They provide a new and shorter syntax for declaring functions. Arrow functions can only be used as a function expression.",
      "a set of statements that performs a task or calculates a value",
      "a programming tool that is used to repeat a set of instructions",
    ],
  },
];

const finishGame = document.querySelector("#finishGame");
const quizContainer = document.querySelector("#quizContainer");

class QuestionGame {
  point = 0;
  nextQIndex = -1;
  qData = [];
  currentQuestion = null;

  constructor(data) {
    this.qData = data;
  }

  nextQuestion() {
    if (this.nextQIndex == this.qData.length - 1) {
      quizContainer.style.display = "none";
      finishGame.style.display = "block";

      finishGame.innerHTML = `You answered ${gameQ.point} out of ${gameQ.qData.length} questions correctly`;
    } else {
      this.nextQIndex += 1;
      this.currentQuestion = this.qData[this.nextQIndex];
      return this.currentQuestion;
    }
  }

  incrementPoint() {
    this.point += 1;
    progressbar.style.width = `${
      ((gameQ.nextQIndex + 1) / gameQ.qData.length) * 100
    }%`;
  }
}

const qTitle = document.querySelector("#qTitle");
const btnGroup = document.querySelector("#btnGroup");
const progressbar = document.querySelector("#progress-bar");
const pointsElement = document.querySelector("#points");
const gameInfo = document.querySelector("#gameInfo");

const gameQ = new QuestionGame(questions);

function startGame() {
  const qObj = gameQ.nextQuestion();
  qTitle.innerHTML = qObj.question;
  btnGroup.innerHTML = qObj.answers
    .map(
      (item) =>
        `<div style="cursor: pointer;" class="border border-dark m-3 p-2 cursor-pointer bg-light" onclick="selectItem(&quot;${item}&quot;)">${item}</div>`
    )
    .join("");

  pointsElement.textContent = `Your point: ${gameQ.point}`;
}

function selectItem(userChoose) {
  const correctAnswer = gameQ.currentQuestion.correct_answer;
  qTitle.innerHTML = gameQ.currentQuestion.question;

  if (userChoose === correctAnswer) {
    gameQ.incrementPoint();
    if (
      gameInfo.classList.contains("bg-danger") ||
      gameInfo.classList.contains("bg-warning")
    ) {
      gameInfo.classList.remove("bg-danger");
      gameInfo.classList.remove("bg-warning");

      gameInfo.classList.add("bg-success");
    }
  } else {
    if (
      gameInfo.classList.contains("bg-success") ||
      gameInfo.classList.contains("bg-warning")
    ) {
      gameInfo.classList.remove("bg-success");
      gameInfo.classList.remove("bg-warning");

      gameInfo.classList.add("bg-danger");
    }
  }

  startGame();
}

startGame();
