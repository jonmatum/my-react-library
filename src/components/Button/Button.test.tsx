import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';  // adjust the path if necessary

describe('<Button />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button label="Click Me!" />);
    expect(getByText('Click Me!')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button label="Click Me!" onClick={handleClick} />);
    fireEvent.click(getByText('Click Me!'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

