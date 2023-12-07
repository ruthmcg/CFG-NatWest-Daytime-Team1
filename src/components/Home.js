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
          <h1>Welcome to the WiserPause</h1>
            <h2> There is so much to learn about peri-menopause, menopause, and post-menopause. Test your knowledge and find out how much you know. </h2>
          
          <button className="answer-button" onClick={handleStartQuiz}>Next</button>
        </div>
      ) : (
        <AgeRangeSelection />
      )}
    </div>
  );
};

export default Home;
