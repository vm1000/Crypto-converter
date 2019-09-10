import React from 'react';
import { View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function CurrencyListView(props) {
  return (
    <ImageBackground
      source={require('./assets/exchangeBg.jpg')}
      style={styles.imageBackgroundForPrices}
    >
      <View style={{ marginTop: 30 }}
      >
      </View>
      <FlatList
        data={props.data}
        onRefresh={() => props.onRefresh()}
        keyExtractor={(x, i) => i}
        renderItem={({ item: rowData, index }) =>
          <TouchableOpacity onPress={() => props.changeCoin(index)}>
            <View
              style={styles.cryptoExchangeSymbolView}
            >
              <Text
                style={styles.cryptoExchangeSymbolText}
              >
                {`${rowData.symbol}`}
              </Text>
              <View
                style={styles.cryptoExchangePriceChangelView}
              >
                <Text
                  style={[
                    rowData.percent_change_24h > 0 ? styles.green : styles.red,
                    styles.percentChange
                  ]}
                >
                  {rowData.percent_change_24h}%
            </Text>
              </View>
              <Text
                style={styles.cryptoExchangePriceText}
              >
                {rowData.price_usd}$
            </Text>
            </View>
          </TouchableOpacity>}
        refreshing={props.refreshing}
        onRefresh={props.handleRefresh}
      />
    </ImageBackground>
  );
}
