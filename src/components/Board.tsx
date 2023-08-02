import {useState} from 'react';
import {View} from 'react-native';
import {Square} from './Square';
import styles from '../../styles';

export const Board = () => {
  const [squares, setSquares] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [playerTurn, setPlayerTurn] = useState(true);

  const handleSquarePress = (x: number, y: number) => {
    const value = playerTurn ? 'X' : 'O';
    const newSquares = [...squares];

    if (newSquares[x][y] !== '') {
      return;
    }

    newSquares[x][y] = value;

    setPlayerTurn(!playerTurn);
    setSquares(newSquares);
  };

  return (
    <View style={styles.board} testID="board">
      {squares.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          {row.map((square: string, index: number) => (
            <Square
              y={index}
              x={rowIndex}
              value={square}
              key={`square-${rowIndex}${index}`}
              handleOnPress={handleSquarePress}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Board;
