
import React, { useState } from 'react';
import Resources from './Resources';

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
    resultMessage = `You got ${score} out of ${questions.length} questions right. We hope you found this quiz informative and helpful. There is still much to learn about peri-menopause, menopause, and post-menopause. Please explore some of the resources in the next page if you would like to deepen your knowledge further. `;
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
    
            
              <div>
                <button className="answer-button" onClick={handleNext}>
                  >>> Expand your knowledge >>>
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
            showNext && < Resources/>
          )}
        </div>
      );
    };
    
    export default Result;