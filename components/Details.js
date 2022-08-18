import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

/** Details Component
 *  Filters a cohort item by type and id.
 *  Renders details of cohort item.
 *
 *  Props:
 *  - items: [{title, description, id, start_date, description, ...}, ...]
 *
 *  State: none
 */
function Details({ items }) {

  const route = useRoute();
  const { id, type } = route.params;
  const item = items.filter(i => i.id === id && i.type == type)[0];

  // console.log("item", item);

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
      <View style={styles.header}>
        <Text style={styles.title}>
          {item.title}
        </Text>
        {/* <Text style={[styles.type, styles.text]}>({types[item.type]})</Text> */}
      </View>
      <Text style={[styles.text, styles.calendar]}>{date}, {startTime}</Text>

      <View style={styles.content}>
        <Text style={[styles.text, styles.description]}>{item.description}</Text>
      </View>

      <View>
        <Text style={[styles.text, styles.staff]}>STAFF</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={[styles.text, styles.staff]}>{item.dri_id}</Text>
          {item.staff_ids.map(
            s => <Text style={[styles.text, styles.staff]}>{s}</Text>)}
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 70,
    fontFamily: 'Georgia',
  },
  text: {
    fontFamily: 'Georgia',
    padding: 8,
    textAlign: 'center'
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    borderColor: 'darkgray',
    borderBottomWidth: 1,
  },
  content: {
    alignItems: 'center',
    padding: 15,
  },
  calendar: {
    color: "darkgray",
    fontSize: 16,
  },
  title: {
    fontFamily: 'Georgia',
    fontSize: 26,
  },
  type: {
    color: "darkgray",
    fontSize: 18,
    textAlign: 'center',
  },
  description: {
    paddingTop: 20,
    fontSize: 19,
    textAlign: 'center',
  },
  staff: {
    // color: 'darkgray',
    borderColor: 'darkgrey',
    borderBottomWidth: 3,
    padding: 5,
  }
});


export default Details;