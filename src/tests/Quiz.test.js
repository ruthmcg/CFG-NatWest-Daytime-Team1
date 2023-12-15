
// testing if quiz component renders without crashing

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Quiz from "../components/Quiz";
test('renders Quiz component without crashing', () => {
  render(<Quiz />);
});
// Test quiz functionality (mocking user interactions)


test('allows user to answer quiz questions', () => {
  const { getByText } = render(<Quiz />);
  fireEvent.click(getByText('At what age do women typically begin the transition to menopause?'));
});