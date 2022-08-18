import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import ItemCardList from '../components/ItemCardList';

function Home({ items }) {
  return (
    <SafeAreaView style={styles.container}>
      {items &&
        <View>
          <ItemCardList items={items} />
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
});

export default Home;