import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Image } from 'react-native';

import styles from './styles';

export default class CurrencyConverterView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPressed: false,
      text: ''
    }
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(value) {
    this.setState({ text: value });
  }

  render() {
    const { symbol, price } = this.props;
    return (
      <ImageBackground
        source={require('./assets/milkyWay.jpg')}
        style={styles.imageBackgroundForConverter}
      >
        <Text
          style={styles.cryptoConverterHeadingText}
        >
          Choose cryptocurrency below
        </Text>
        <View style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          flexDirection: 'row',
          //width: '80%',
          marginLeft: 35,
          marginRight: 20
        }}>
          <Text style={styles.coinToConvertArea}>
            {this.state.isPressed ? 'USD' : symbol}
          </Text>
          <TouchableOpacity onPress={() => this.setState({ isPressed: !this.state.isPressed })}>
            <Image style={{ width: 30, height: 30, tintColor: 'white', marginLeft: 20, marginRight: 20 }}
              source={require('./assets/swap.png')}
            />
          </TouchableOpacity>
          <Text style={styles.coinToConvertWithUsd}>
            {this.state.isPressed ? symbol : 'USD'}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row'
          }}>
          <TextInput
            style={styles.amountTextInput}
            placeholder="Amount..."
            placeholderTextColor="white"
            onChangeText={this.handleChangeText}
            value={this.state.text}
          />
          <Text
            style={styles.cryptoConverterSumText}
            allowFontScaling
          >
            {this.state.isPressed ? (parseFloat((this.state.text) / price).toFixed(2)) : (parseFloat((this.state.text) * price).toFixed(2))}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}


