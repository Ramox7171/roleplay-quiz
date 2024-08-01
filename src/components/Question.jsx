import { useState } from 'react';

import QTimer from './QTimer.jsx';
import Answers from './Answers.jsx';
import QUESTIONS from '../questions.js';

export default function Question({ qIndex, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isGood: null,
  });

  let currentQuestionNumber = qIndex + 1;
  let allQuestionsNumber = QUESTIONS.length;

  let timer = 15000;

  if (answer.selectedAnswer) {
    timer = 1000;
  } else if (answer.isGood !== null) {
    timer = 2000;
  }

  function answerSelectHandler(answer) {
    setAnswer({
      selectedAnswer: answer,
      isGood: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isGood: QUESTIONS[qIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = '';

  if (answer.selectedAnswer && answer.isGood !== null) {
    answerState = answer.isGood ? 'good' : 'bad';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id='question'>
      <QTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
        mode={answerState}
      />
      <p>
        {currentQuestionNumber}/{allQuestionsNumber}
      </p>
      <h2>{QUESTIONS[qIndex].text}</h2>
      <Answers
        answers={QUESTIONS[qIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={answerSelectHandler}
      />
    </div>
  );
}
