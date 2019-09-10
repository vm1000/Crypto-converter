import React, { Component } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './ConverterStyles';

import CurrencyListViewHeader from './components/CurrencyListViewHeader';
import CurrencyListView from './components/CurrencyListView';
import CurrencyConverterView from './components/CurrencyConverterView';

class CryptoConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: "",
      isPressed: false,
      refreshing: false,
      activeCoinIndex: 0
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.changeCoin = this.changeCoin.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    this.getData();
  }

  async getData() {
    try {
      const value = await AsyncStorage.getItem('coinData');
      if (value !== null) {
        this.setState({ data: JSON.parse(value) });
      }
    } catch (e) {
      console.log(e);
    }
  }

  fetchData = async () => {
    const response = await fetch('https://api.coinlore.com/api/tickers/?start=0&limit=10');
    const json = await response.json();
    this.setState({ data: json.data, isFetching: false });
    AsyncStorage.setItem('coinData', JSON.stringify(json.data))
  };

  handleChangeText = (typedText) => {
    this.setState({ text: typedText });
  }

  handleRefresh = () => {
    this.setState({
      refreshing: true,
    }, () => {
      this.fetchData()
    })
  }

  changeCoin(index) {
    this.setState({
      activeCoinIndex: index
    })
  }

  render() {
    const activeCoin = this.state.data[this.state.activeCoinIndex] || {}
    const activeCoinSymbol = activeCoin.symbol
    const activeCoinPriceUsd = activeCoin.price_usd
    return (
      <SafeAreaView style={styles.cryptoConverterView}
      >
        <ScrollView>
          <CurrencyConverterView
            symbol={activeCoinSymbol}
            price={activeCoinPriceUsd}
          />

          <View style={{ marginTop: 10 }}
          >
          </View>
          <CurrencyListViewHeader />
          <CurrencyListView
            data={this.state.data}
            changeCoin={this.changeCoin}
            refreshing={this.state.refreshing}
            handleRefresh={this.handleRefresh}
          />
        </ScrollView >
      </SafeAreaView >
    );
  }
}
export default CryptoConverter;
