import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

function Details({ items }) {

  const route = useRoute();
  const { id, type } = route.params;
  const item = items.filter(i => i.id === id && i.type == type)[0];

  const types = {
    "V": "Event",
    "E": "Exercise",
    "L": "Lecture",
    "A": "Assessment"
  };

  const date = new Date(item.start_date).toLocaleDateString(
    'en-us',
    {
      weekday: "short",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });

  const startTime = new Date(item.start_at).toLocaleTimeString(
    'en-us',
    {
      hour: "numeric",
      minute: "numeric"
    }
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{item.title}</Text>
        <Text style={styles.type}>{item.type}</Text>
        <Text>{item.description}</Text>
        <Text>{item.date}, {item.startTime}</Text>
      </View>

      <View>
        <Text>Staff:</Text>
        {items.staff_ids.map(s => <Text>{s}</Text>)}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontFamily: 'Georgia',
  },
  type: {
    color: "darkgray",
  },
});


export default Details;