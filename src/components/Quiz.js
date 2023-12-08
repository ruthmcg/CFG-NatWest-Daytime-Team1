import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const questions = [
    {
      questionText: 'At what age do women typically begin the transition to menopause?',
      answerOptions: ['20s and 30s ', '40 and older', 'Late 40s to early 50s'],
      correctAnswer: 'Late 40s to early 50s',
    },
    {
        questionText: "In the years leading up to menopause, what is the term for irregular cycles and menopause symptoms?",
        answerOptions: ['Intermission', 'Mid-life onset', 'Perimenopause'],
        correctAnswer: 'Perimenopause',
    },
  
    {
        questionText: "Hot flashes that occur with perspiration during sleep are known as:",
        answerOptions: ['Night sweats', 'Morning flashes', 'Evening flushes'],
        correctAnswer: 'Night sweats',
    },
 
    {
        questionText: "Bone loss accelerates during menopause because of:",
        answerOptions: ['Inflammation', 'Lack of vitamin D', 'Drop in estrogen'],
        correctAnswer: 'Drop in estrogen',
    },
 
    {
        questionText: "Menopause symptoms may persist for how long?",
        answerOptions: ['6 months to a year ', 'Up to 2-5 years', "Throughout a woman's life"],
        correctAnswer: 'Up to 2-5 years',
    },


  ];

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className = "quiz-box">
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Result userAnswers={userAnswers} questions={questions} />
      )}
    </div>
  );
};

export default Quiz;
