import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../styles';

type Props = {
  winner: string;
};

const Winner = ({winner}: Props) => {
  return (
    <View style={styles.winnerBlock}>
      <Text style={styles.text} testID="winner">{`Winner: ${winner}`}</Text>
    </View>
  );
};

export default Winner;
