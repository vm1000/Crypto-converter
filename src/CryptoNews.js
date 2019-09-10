import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Linking,
  Share,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import CryptoNewsCard from './components/CryptoNewsCard';


class CryptoNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isFetching: false,
    };
    this.shareMessage = this.shareMessage.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    this.getData();
  }

  async getData() {
    try {
      const value = await AsyncStorage.getItem('newsData');
      if (value !== null) {
        this.setState({ data: JSON.parse(value) });
      }
    } catch (e) {
      console.log(e);
    }
  }

  handleRefresh = async () => {
    this.setState({
      isFetching: true,
    }, () => {
      this.fetchData()
    })
  }

  async fetchData() {
    this.setState({ isFetching: true });
    const response = await fetch(
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=6266e3bf1243402c97843cd85efd7b25');
    const json = await response.json();
    this.setState({ isFetching: false, data: json.articles });
    AsyncStorage.setItem('newsData', JSON.stringify(json.articles))
  };

  shareMessage() {
    Share.share({ message: 'Check Out these News!' }).then(this.showResult);
  }

  render() {
    const { data, isFetching } = this.state;
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5'
        }}
      >
        <View>
          <FlatList
            data={data}
            refreshing={isFetching}
            onRefresh={this.fetchData}
            keyExtractor={(x, i) => i}
            renderItem={({ item: rowData }) => (
              <TouchableOpacity onPress={() => Linking.openURL(rowData.url)}>
                <CryptoNewsCard
                  data={this.state.data}
                  refreshing={this.state.refreshing}
                  handleRefresh={this.handleRefresh}
                  shareMessage={this.shareMessage}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default CryptoNews;
