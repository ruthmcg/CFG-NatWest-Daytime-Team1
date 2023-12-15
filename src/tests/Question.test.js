import React from 'react';
import { render } from '@testing-library/react';
import Question from "../components/Question"; 
const mockQuestion = {
  questionText: 'At what age do women typically begin the transition to menopause?',
  answerOptions: ['20s and 30s', '40 and older', 'Late 40s to early 50s'],
  correctAnswer: 'Late 40s to early 50s',
};
test('renders Question component without crashing', () => {
  render(<Question question={mockQuestion} />);
});