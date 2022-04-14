import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Life Checklist/i);
  expect(linkElement).toBeInTheDocument();
});
