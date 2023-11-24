// import React from 'react';

// const Result = ({ userAnswers, questions }) => {
//   const score = userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;

//   return (
//     <div className="score-box">
//       <h2>Your Score: {score} / {questions.length}</h2>
//       {/* Optionally display correct answers */}
//     </div>
//   );
// };

// export default Result;


import React from 'react';

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
  // } else if (score === 0) {
  //   resultMessage = 'Oops! Better luck next time.';
  } else {
    resultMessage = `You got ${score} out of ${questions.length} questions right. We hope you found this quiz informative and helpful. There is still much to learn about peri-menopause, menopause, and post-menopause. Please explore some of the resources below if you would like to deepen your knowledge further. `;
  }

    
  return (
    <div>
      <h1>Quiz Results</h1>
      <p>{resultMessage}</p>

      <h2>Your Answers:</h2>
      <div>
      <ul>
        {userAnswers.map((userAnswer, index) => (
          <li key={index}>
            {questions[index].questionText} - Your Answer: {userAnswer}
            <br />
          <p>
            Correct Answer: {questions[index].correctAnswer}
          </p>
          </li>
        ))}
      </ul>
      </div>
{/* 
      <h2>Correct Answers:</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            {question.questionText} - Correct Answer: {question.correctAnswer}
          </li>
        ))}
      </ul> */}

      <p>
        Learn more about menopause on{' '}
        <a href="https://www.nhs.uk/conditions/menopause/" target="_blank" rel="noopener noreferrer">
          NHS - Menopause
        </a>
      </p>
    </div>
  );
};

export default Result;