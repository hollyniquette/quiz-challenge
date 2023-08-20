/* declare selectors */
var begin = document.getElementById('begin');
var beginBtn = document.getElementById('begin-button');
var viewScoreBtn = document.getElementById('view-scores');
var modal = document.getElementById('modal');
var closeModalBtn = document.getElementById('close-modal');
var highScoreList = document.getElementById('high-score-list');
var timerText = document.getElementById('timer');
var question1 = document.getElementById('question-1');
var question2 = document.getElementById('question-2');
var question3 = document.getElementById('question-3');
var question4 = document.getElementById('question-4');
var question5 = document.getElementById('question-5');
var end = document.getElementById('end');
var endText = document.getElementById('end-text');
var scoreText = document.getElementById('score');
var feedback = document.getElementById('feedback');
var nextQuestionBtn = document.getElementById('next-question');
var initials = document.getElementById('initials');
var submitHighScoreBtn = document.getElementById('submit-high-score');

var startOverBtn = document.getElementById('start-over');
// selecting all radios to reset when re-doing quiz
var radios = document.querySelectorAll('input[type="radio"]');
/*
    single selector for each question radio button set
    https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
*/
var question1Answers = document.querySelectorAll('input[name="question-1"]');
var question2Answers = document.querySelectorAll('input[name="question-2"]');
var question3Answers = document.querySelectorAll('input[name="question-3"]');
var question4Answers = document.querySelectorAll('input[name="question-4"]');
var question5Answers = document.querySelectorAll('input[name="question-5"]');

/* declare variables */
var navigation = 'begin';
// defining interval here so i can clear it later
var interval;
// individual quiz score
var score = 0;
// high score list - comprised of initials and scores
var highScores = [];
// beginning timer value
var timeLeft = 60;

/* event listeners */

beginBtn.addEventListener('click', function () {
  goto('question-1');
  beginTimer();
  // update navigation variable
  navigation = 'question-1';
  // reset initial input
  initials.style.visibility = 'hidden';
  initials.innerText = '';
});

/* show high score modal */
viewScoreBtn.addEventListener('click', function () {
  modal.style.display = 'flex';
});

/* escape out of modal on esc key press */
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
});

submitHighScoreBtn.addEventListener('click', function () {
  // push score to highScore array
  highScores.push(`${score} - ${initials.value} `);
  // sort elements on every quiz
  highScores.sort();
  console.log(highScores);
  highScores.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    highScoreList.appendChild(li);
  });
});

nextQuestionBtn.addEventListener('click', function () {
  switch (navigation) {
    case 'question-1':
      navigation = 'question-2';
      // hide next question btn until next answer is selected
      nextQuestionBtn.style.visibility = 'hidden';
      goto('question-2');
      break;
    case 'question-2':
      navigation = 'question-3';
      nextQuestionBtn.style.visibility = 'hidden';
      goto('question-3');
      break;
    case 'question-3':
      navigation = 'question-4';
      nextQuestionBtn.style.visibility = 'hidden';
      goto('question-4');
      break;
    case 'question-4':
      navigation = 'question-5';
      nextQuestionBtn.style.visibility = 'hidden';
      goto('question-5');
      break;
    case 'question-5':
      navigation = 'end';
      // stop timer
      clearInterval(interval);
      // populate score
      scoreText.innerHTML = `${score}%`;
      // reset initial input
      initials.style.visibility = 'visible';
      goto('end');
      break;
  }
});

question1Answers.forEach(function (element) {
  element.addEventListener('click', function () {
    // deduct 5 seconds of time if incorrect answer
    if (element.value === 'incorrect') {
      feedback.innerText = 'INCORRECT';
      feedback.style.visibility = 'visible';
      // automated timer to make it look pretty
      setTimeout(function () {
        feedback.style.visibility = 'hidden';
      }, 2000);
      timeLeft -= 5;
    } else {
      // add scorekeeping
      score += 20;
      feedback.innerText = 'CORRECT';
      feedback.style.visibility = 'visible';
      // automated timer to make it look pretty
      setTimeout(function () {
        feedback.style.visibility = 'hidden';
      }, 2000);
    }
    // enable next question button
    nextQuestionBtn.style.visibility = 'visible';
  });
});

question2Answers.forEach(function (element) {
  element.addEventListener('click', function () {
    // deduct 5 seconds of time if incorrect answer
    if (element.value === 'incorrect') {
      feedback.innerText = 'INCORRECT';
      feedback.style.visibility = 'visible';
      // automated timer to make it look pretty
      setTimeout(function () {
        feedback.style.visibility = 'hidden';
      }, 2000);
      timeLeft -= 5;
    } else {
      // add scorekeeping
      score += 20;
      feedback.innerText = 'CORRECT';
      feedback.style.visibility = 'visible';
      // automated timer to make it look pretty
      setTimeout(function () {
        feedback.style.visibility = 'hidden';
      }, 2000);
    }
    // enable next question button
    nextQuestionBtn.style.visibility = 'visible';
  });
});

question3Answers.forEach(function (element) {
  element.addEventListener('click', function () {
    // deduct 5 seconds of time if incorrect answer
    if (element.value === 'incorrect') {
      feedback.innerText = 'INCORRECT';
      feedback.style.visibility = 'visible';
      // automated timer to make it look pretty
      setTimeout(function () {
        feedback.style.visibility = 'hidden';
      }, 2000);
      timeLeft -= 5;
    } else {
      // add scorekeeping
      score += 20;
      feedback.innerText = 'CORRECT';
      feedback.style.visibility = 'visible';
      // automated timer to make it look pretty
      setTimeout(function () {
        feedback.style.visibility = 'hidden';
      }, 2000);
    }
    // enable next question button
    nextQuestionBtn.style.visibility = 'visible';
  });
});

question4Answers.forEach(function (element) {
  element.addEventListener('click', function () {
    // deduct 5 seconds of time if incorrect answer
    if (element.value === 'incorrect') {
      feedback.innerText = 'INCORRECT';
      feedback.style.visibility = 'visible';
      // automated timer to make it look pretty
      setTimeout(function () {
        feedback.style.visibility = 'hidden';
      }, 2000);
      timeLeft -= 5;
    } else {
      // add scorekeeping
      score += 20;
      feedback.innerText = 'CORRECT';
      feedback.style.visibility = 'visible';
      // automated timer to make it look pretty
      setTimeout(function () {
        feedback.style.visibility = 'hidden';
      }, 2000);
    }
    // enable next question button
    nextQuestionBtn.style.visibility = 'visible';
  });
});

question5Answers.forEach(function (element) {
  element.addEventListener('click', function () {
    // deduct 5 seconds of time if incorrect answer
    if (element.value === 'incorrect') {
      feedback.innerText = 'INCORRECT';
      feedback.style.visibility = 'visible';
      // automated timer to make it look pretty
      setTimeout(function () {
        feedback.style.visibility = 'hidden';
      }, 2000);
      timeLeft -= 5;
    } else {
      // add scorekeeping
      score += 20;
      feedback.innerText = 'CORRECT';
      feedback.style.visibility = 'visible';
      // automated timer to make it look pretty
      setTimeout(function () {
        feedback.style.visibility = 'hidden';
      }, 2000);
    }
    // enable next question button
    nextQuestionBtn.style.visibility = 'visible';
  });
});

startOverBtn.addEventListener('click', function () {
  // reset time
  timerText.innerText = '60';
  timeLeft = 60;
  // reset radio buttons and score
  resetRadioScore();
  // reset end text
  endText.innerText = 'Good Job!';
  initials.style.visibility = 'hidden';
  goto('begin');
});

closeModalBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

/* functions */
function beginTimer() {
  interval = setInterval(function () {
    // exit condition, goto end
    if (timeLeft <= 0) {
      timerText.innerText = '0';
      // update end page H2 text
      endText.innerText = 'Please try again.';
      // don't show score text so they don't feel too bad about themselves
      scoreText.innerText = '';
      // don't show initials input
      initials.style.visibility = 'hidden';
      clearInterval(interval);
      goto('end');
    } else {
      timerText.innerHTML = timeLeft;
      timeLeft--;
    }
  }, 1000);
}

/* 
    Go To helper function. Pass in page name to "navigate" to
    requested page.
    https://www.scaler.com/topics/c/difference-between-if-else-and-switch/
*/
function goto(page) {
  switch (page) {
    case 'begin':
      begin.style.visibility = 'visible';
      question1.style.visibility = 'hidden';
      question2.style.visibility = 'hidden';
      question3.style.visibility = 'hidden';
      question4.style.visibility = 'hidden';
      question5.style.visibility = 'hidden';
      end.style.visibility = 'hidden';
      break;
    case 'question-1':
      begin.style.visibility = 'hidden';
      question1.style.visibility = 'visible';
      question2.style.visibility = 'hidden';
      question3.style.visibility = 'hidden';
      question4.style.visibility = 'hidden';
      question5.style.visibility = 'hidden';
      end.style.visibility = 'hidden';
      break;
    case 'question-2':
      begin.style.visibility = 'hidden';
      question1.style.visibility = 'hidden';
      question2.style.visibility = 'visible';
      question3.style.visibility = 'hidden';
      question4.style.visibility = 'hidden';
      question5.style.visibility = 'hidden';
      end.style.visibility = 'hidden';
      break;
    case 'question-3':
      begin.style.visibility = 'hidden';
      question1.style.visibility = 'hidden';
      question2.style.visibility = 'hidden';
      question3.style.visibility = 'visible';
      question4.style.visibility = 'hidden';
      question5.style.visibility = 'hidden';
      end.style.visibility = 'hidden';
      break;
    case 'question-4':
      begin.style.visibility = 'hidden';
      question1.style.visibility = 'hidden';
      question2.style.visibility = 'hidden';
      question3.style.visibility = 'hidden';
      question4.style.visibility = 'visible';
      question5.style.visibility = 'hidden';
      end.style.visibility = 'hidden';
      break;
    case 'question-5':
      begin.style.visibility = 'hidden';
      question1.style.visibility = 'hidden';
      question2.style.visibility = 'hidden';
      question3.style.visibility = 'hidden';
      question4.style.visibility = 'hidden';
      question5.style.visibility = 'visible';
      end.style.visibility = 'hidden';
      break;
    case 'end':
      begin.style.visibility = 'hidden';
      question1.style.visibility = 'hidden';
      question2.style.visibility = 'hidden';
      question3.style.visibility = 'hidden';
      question4.style.visibility = 'hidden';
      question5.style.visibility = 'hidden';
      end.style.visibility = 'visible';
      nextQuestionBtn.style.visibility = 'hidden';
      break;
    default:
      break;
  }
}

function resetRadioScore() {
  radios.forEach(function (radio) {
    radio.checked = false;
    score = 0;
  });
}
