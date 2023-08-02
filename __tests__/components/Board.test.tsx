import React from 'react';
import {Board} from '../../App';
import {fireEvent, render} from '@testing-library/react-native';

describe('Board Test', () => {
  it('renders correctly', () => {
    let squares = Array(9).fill(null);
    const mockOnSquarePressFn = jest.fn();

    render(<Board squares={squares} onSquarePress={mockOnSquarePressFn} />);
  });

  it('calls onPress event on press of a board square', () => {
    const squares = ['X', null, 'O', null, 'X', 'O', null, 'X', null];
    const mockOnSquarePressFn = jest.fn();

    const {getAllByTestId} = render(
      <Board squares={squares} onSquarePress={mockOnSquarePressFn} />,
    );

    const secondSquare = getAllByTestId('square')[2];
    fireEvent.press(secondSquare);

    expect(mockOnSquarePressFn.mock.calls.length).toBe(1);
    expect(mockOnSquarePressFn.mock.calls[0][0]).toBe(2);

    const thirdSquare = getAllByTestId('square')[3];
    fireEvent.press(thirdSquare);

    expect(mockOnSquarePressFn.mock.calls.length).toBe(2);
    expect(mockOnSquarePressFn.mock.calls[1][0]).toBe(3);
  });
});
