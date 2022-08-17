import * as React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import ItemCard from '../components/ItemCard';

function Home({ items }) {
  return (
    <SafeAreaView style={styles.container}>
      {items &&
        <View>
          <ItemCardList items={items} />
        </View>
      }
      <StatusBar style="auto" />
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
});

export default Home;