import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

function Details({ navigation, items, id, type }) {
  console.log("hit me in details");
  const route = useRoute();
  const { id, type } = route.params;
  const item = items.filter(i => i.id === id && i.type == type);
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{item.title}</Text>
      <Text>id: {id}</Text>
      <Text>type: {type}</Text>
    </SafeAreaView>
  );
}

export default Details;