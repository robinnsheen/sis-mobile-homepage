import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

function Details({ items }) {

  const route = useRoute();
  const { id, type } = route.params;
  const item = items.filter(i => i.id === id && i.type == type)[0];

  return (
    <SafeAreaView style={styles.container}>
      <Text>{item.title}</Text>
      <Text>id: {id}</Text>
      <Text>type: {type}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});


export default Details;