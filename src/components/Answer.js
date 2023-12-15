import React from 'react';

const Answer = ({ answer, handleAnswer }) => {
  return (
    <button className="answer-button" onClick={() => handleAnswer(answer)}>
      {answer}
    </button>
  );
};

export default Answer;
