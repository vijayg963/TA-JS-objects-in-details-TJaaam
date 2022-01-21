let title = "title of the question ";
let options = [a, b, c, d];
let correctAnswerIndex = "b";

let isAnswerCorrect = function (answer) {
  return (answer = correctAnswerIndex);
};

let getCorrectAnswer = function (answer) {
  return options[correctAnswerIndex];
};

function createUi() {
  let user = {};
  user.title = "title of the question ";
  user.options = [a, b, c, d];
}

function createQuestion(title, options, correctAnserIndex) {
  let questions = {};
  this.title = title;
  this.options = options;
  this.correctAnswerIndex = correctAnserIndex;
  this.isAnswerCorrect = function (index) {
    return index == this.correctAnswerIndex;
  };
  this.getCorrectAnswer = () => {
    return this.options[this.correctAnswerIndex];
  };
  return questions;
}

let question = {
  title: "Where is the capital of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,
  isAnswerCorrect(index) {
    return index == correctAnswerIndex;
  },
  getCorrectAnswer() {
    return options[correctAnswerIndex];
  },
};
