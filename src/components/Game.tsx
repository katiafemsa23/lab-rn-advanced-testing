import {Text, View} from 'react-native';
import styles from '../../styles';
import Board from './Board';
import {useState} from 'react';

export const Game = () => {
  const [playerTurn, setPlayerTurn] = useState(true);
  const [squares, setSquares] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

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
    <View style={styles.container} testID="app">
      <Text style={styles.title}>Tic-Tac-Toe!</Text>
      <Board squares={squares} handleOnPress={handleSquarePress} />
    </View>
  );
};
