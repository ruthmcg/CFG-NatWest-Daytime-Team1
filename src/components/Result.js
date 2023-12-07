
import React, { useState } from 'react';
import NextPage from './NextPage';

const Result = ({ userAnswers, questions }) => {
  const calculateScore = () => {
    let correctAnswers = 0;

    userAnswers.forEach((userAnswer, index) => {
      if (userAnswer === questions[index].correctAnswer) {
        correctAnswers += 1;
      }
    });

    return correctAnswers;
  };

  const score = calculateScore();

  let resultMessage;

  if (score === questions.length) {
    resultMessage = 'Congratulations! You got all the answers right!';

  } else {
    resultMessage = `You got ${score} out of ${questions.length} questions right. We hope you found this quiz informative and helpful. There is still much to learn about peri-menopause, menopause, and post-menopause. Please explore some of the resources below if you would like to deepen your knowledge further. `;
  }

    
    const [showNext, setShowNext] = useState(false)

      const handleNext = () => {
        setShowNext(true);
      }
      return (
        <div>
          {!showNext ? (
            <div>
              <h1>Quiz Results</h1>
              <p>{resultMessage}</p>
    
              <p>
                Learn more about menopause on{' '}
                <a href="https://www.nhs.uk/conditions/menopause/" target="_blank" rel="noopener noreferrer">
                  NHS - Menopause
                </a>
              </p>
              <div>
                <button className="answer-button" onClick={handleNext}>
                  Next
                </button>
              </div>
    
              {!showNext && (
                <div>
                  <h2>Your Answers:</h2>
                  <ul>
                    {userAnswers.map((userAnswer, index) => (
                      <li key={index}>
                        {questions[index].questionText} - Your Answer: {userAnswer}
                        <br />
                        <p>Correct Answer: {questions[index].correctAnswer}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            showNext && <NextPage />
          )}
        </div>
      );
    };
    
    export default Result;