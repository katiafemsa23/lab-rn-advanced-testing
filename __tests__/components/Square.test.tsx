import React from 'react';
import {Square} from '../../App';
import {fireEvent, render, screen} from '@testing-library/react-native';

describe('Squire Tests', () => {
  it('renders correctly', () => {
    const mockOnPressFn = jest.fn();
    const randomValue = Math.floor(Math.random() * 9);

    render(<Square onPress={mockOnPressFn} value={randomValue} />);
  });

  it('call onPress event on square press', () => {
    const mockOnPressFn = jest.fn();
    const randomValue = Math.floor(Math.random() * 9);

    render(<Square onPress={mockOnPressFn} value={randomValue} />);

    const square = screen.getByTestId('square');
    fireEvent.press(square);
    expect(mockOnPressFn.mock.calls.length).toBe(1);
  });
});
