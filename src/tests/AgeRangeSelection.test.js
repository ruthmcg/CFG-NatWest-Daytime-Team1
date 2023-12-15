// tests for the 'AgeRangeSelection' component
// 1 - test if component renders without crashing
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AgeRangeSelection from '../components/AgeRangeSelection';
test('renders AgeRangeSelection component without crashing', () => {
  render(<AgeRangeSelection />);
});
// Test the age range selection buttons:


test('allows user to select an age range', () => {
  const { getByText } = render(<AgeRangeSelection />);
  fireEvent.click(getByText('18-25'));
 
});