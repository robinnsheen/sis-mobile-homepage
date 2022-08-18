import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

function Details({ navigation }) {
  console.log("hit me");
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </SafeAreaView>
  );
}

export default Details;