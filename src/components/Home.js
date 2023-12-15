import React, { useState } from 'react';
import AgeRangeSelection from './AgeRangeSelection';


const Home = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <div className='welcome'>
      {!showQuiz ? (
        <div>
          <h1>Welcome to WiserPause</h1>
          <h2>Empowering You Through Menopause Knowledge</h2>
            <p>
              Navigating the journey of menopause is a significant phase in a woman's life. WiserPause is here to equip you with knowledge, support and valuable resources
            </p>

            <h3>Why WiserPause?</h3>
          <div className='welcome-text'>
            <ul>
              <li><b>Educational Quiz:</b> Challenge yourself with our thoughtfully crafted quiz that covers various aspects of menopause. From hormonal changes to lifestyle adjustments, our questions are designed to deepen your knowledge.</li>
              <p/>
              <li><b>Curated Resources:</b> Beyond the quiz, explore our curated collection of resources to gain in-depth insights into menopause. We've handpicked blogs, podcasts, and expert advice to help you find out more about Menopause.</li>
              <p/>
              <li><b>Community Support:</b> Connect with others. Share stories, ask questions, and learn from women who are going through Menopause.</li>
              <p/>
            </ul>
            </div>
            <h2>Find out more about Menopause</h2>
                      
          <button className="answer-button" onClick={handleStartQuiz}>Check Your Knowledge</button>
        </div>
      ) : (
        <AgeRangeSelection />
      )}
    </div>
  );
};

export default Home;
