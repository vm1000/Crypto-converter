import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function CurrencyListViewHeader() {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.coinText}
      >
        coin
      </Text>
      <Text
        style={styles.changeText}
      >
        price change 24h
      </Text>
      <Text
        style={styles.valueText}
      >
        price
      </Text>
    </ View>
  );
}
