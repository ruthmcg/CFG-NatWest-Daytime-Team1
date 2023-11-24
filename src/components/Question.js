import React from 'react';
import Answer from './Answer';

const Question = ({ question, handleAnswer }) => {
  return (
    <div className="question-box">
      <h2>{question.questionText}</h2>
      {question.answerOptions.map((answer, index) => (
        <Answer key={index} answer={answer} handleAnswer={handleAnswer} />
      ))}
    </div>
  );
};

export default Question;
