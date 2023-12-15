import React, { useState } from 'react';
import Quiz from './Quiz';

const AgeRangeSelection = () => {
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);

  const handleSelectAgeRange = (ageRange) => {
    setSelectedAgeRange(ageRange);
  };

  return (
  <div>
    {!selectedAgeRange && (
    <div>
      <h1>Select Your Age Range</h1>
      <button className="answer-button" onClick={() => handleSelectAgeRange('18-25')}>18-25</button>
      <button className="answer-button" onClick={() => handleSelectAgeRange('26-35')}>26-35</button>
      <button className="answer-button" onClick={() => handleSelectAgeRange('36-45')}>36-45</button>
      <button className="answer-button" onClick={() => handleSelectAgeRange('46-55')}>46-55</button>
      <button className="answer-button" onClick={() => handleSelectAgeRange('56+')}> 56 and over </button>

    </div>
      )}

      {selectedAgeRange && <Quiz selectedAgeRange={selectedAgeRange} />}
    </div>
  );
};

export default AgeRangeSelection;
