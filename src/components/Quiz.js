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
        questionText: "Which menopause stage has the most intense and disruptive symptoms?",
        answerOptions: ['Pre-menopause', 'Perimenopause', 'Postmenopause'],
        correctAnswer: 'Perimenopause',
    },
    {
        questionText: "Hot flashes that occur with perspiration during sleep are known as:",
        answerOptions: ['Night sweats', 'Morning flashes', 'Evening flushes'],
        correctAnswer: 'Night sweats',
    },
    {
        questionText: "Vaginal dryness and discomfort is a common menopausal symptom related to:",
        answerOptions: ['Hormone changes', 'Poor nutrition', 'Lack of sleep'],
        correctAnswer: 'Hormone changes',
    },
    {
        questionText: "Which term refers to having no menstrual periods for 12 months?",
        answerOptions: ['Menopause', 'Perimenopause', 'Postmenopause'],
        correctAnswer: 'Menopause',
    },
    {
        questionText: "Bone loss accelerates during menopause because of:",
        answerOptions: ['Inflammation', 'Lack of vitamin D', 'Drop in estrogen'],
        correctAnswer: 'Drop in estrogen',
    },
    {
        questionText: "Emotional changes like mood swings may occur during which stage?",
        answerOptions: ['Perimenopause', 'Postmenopause', 'Menopause'],
        correctAnswer: 'Perimenopause',
    },
    {
        questionText: "Who is most at risk for weight gain and slower metabolism during menopause?",
        answerOptions: ['Women with low fitness', 'Women with previous pregnancies', 'All women'],
        correctAnswer: 'All women',
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
