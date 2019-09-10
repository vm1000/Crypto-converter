import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, Linking } from 'react-native';

import styles from './styles';

export default function CryptoNewsCard(props) {
  return (
    <View>
      <FlatList
        data={props.data}
        onRefresh={() => this.fetchData()}
        refreshing={props.isFetching}
        keyExtractor={(x, i) => i}
        renderItem={({ item: rowData }) => (
          <TouchableOpacity onPress={() => Linking.openURL(rowData.url)}>
            <View
              style={styles.newsCard}
            >
              <Image
                source={{ uri: rowData.urlToImage }}
                style={styles.newsImage}
              />
              <Text
                style={styles.newsTitle}
              >
                {rowData.title}
              </Text>
              <View style={styles.newsView}
              >
                <Text
                  style={styles.newsText}
                >
                  {rowData.description}
                </Text>
              </View>
              <View style={styles.newsAuthorsView}>
                <Text style={styles.newsAuthors}>
                  {rowData.source.name} {' ✪ '} {rowData.publishedAt.substring(0, 10)}
                </Text>
                <View style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                  <ScrollView>
                    <TouchableOpacity style={styles.shareNewsOpacity} onPress={props.shareMessage}>
                      <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row'
                      }}>
                        <Text style={{ padding: 10, color: 'white', fontWeight: 'bold' }}>
                          Share
                            </Text>
                        <Image
                          source={{ uri: 'https://static.thenounproject.com/png/55611-200.png' }}
                          style={{ height: 20, width: 20, tintColor: 'white' }}
                        />
                      </View>
                    </TouchableOpacity>
                  </ ScrollView>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
