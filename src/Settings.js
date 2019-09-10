import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetching: false,
    };
    this.fetchData = this.fetchData.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  async fetchData() {
    this.setState({ fetching: true });
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    this.setState({ fetching: false, data });
  }

  renderItem(rowData) {
    return (
      <View>
        <Text>{rowData.item.title}</Text>
        <Text>{rowData.item.body}</Text>
      </View>
    );
  }

  render() {
    const { data, fetching } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          refreshing={fetching}
          onRefresh={this.fetchData}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

