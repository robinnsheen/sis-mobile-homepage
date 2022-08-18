import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import ItemCardList from '../components/ItemCardList';

function Home({ items, navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          UPCOMING
        </Text>
      </View>
      {items &&
        <View>
          <ItemCardList items={items} navigation={navigation}/>
        </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 60,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Georgia',
    fontSize: 17,
    color: '#666'
  }
});

export default Home;