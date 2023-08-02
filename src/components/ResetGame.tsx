import {Text, TouchableOpacity} from 'react-native';
import styles from '../../styles';

type Props = {
  handleResetGame: () => void;
};

export const ResetGame = ({handleResetGame}: Props) => {
  return (
    <TouchableOpacity onPress={handleResetGame} style={styles.winnerBlock}>
      <Text style={styles.text}>New Game</Text>
    </TouchableOpacity>
  );
};
