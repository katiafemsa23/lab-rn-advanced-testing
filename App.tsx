import {Text, View} from 'react-native';
import Board from './src/components/Board';
import styles from './styles';

function App(): JSX.Element {
  return (
    <View style={styles.container} testID="app">
      <Text style={styles.title}>Tic-Tac-Toe!</Text>
      <Board />
    </View>
  );
}

export default App;
