import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


/** ItemCard Component
 *  Renders a touchable card with summary of a cohort item's details.
 *  Pressing a card routes to the corresponding cohort item's details screen.
 *
 *  Props:
 *  - item: {title, description, id, start_date, description, ...}
 *
 *  State: none
 */
function ItemCard({ item }) {
  // console.log("hit item card", item);
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
      month: "numeric"
    });
  const startTime = new Date(item.start_at).toLocaleTimeString(
    'en-us',
    {
      hour: "numeric",
      minute: "numeric"
    }
  );

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() =>
      navigation.navigate('Details', {
        id: item.id,
        type: item.type,
      })}>
      <View style={styles.container}>
        <View style={styles.dates}>
          <Text style={[styles.text, styles.calendar]}>{date}</Text>
          <Text style={[styles.text, styles.calendar]}>{startTime}</Text>
        </View>
        <View style={styles.textArea}>
          <View style={styles.header}>
            <Text style={[styles.title, styles.text]}>{item.title}</Text>
            <Text style={[styles.type, styles.text]}>
              ({types[item.type]})
            </Text>
          </View>
          <Text style={[styles.text, styles.description]} numberOfLines={1}>
            {item.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      padding: 15,
      borderTopWidth: 1,
      borderColor: 'darkgray',
    },
    dates: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: 6,
    },
    calendar: {
      fontSize: 17,
    },
    textArea: {
      flex: 1,
    },
    text: {
      fontFamily: 'Georgia',
      paddingBottom: 5,
    },
    header: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingBottom: 6,
    },
    title: {
      paddingRight: 6,
      fontWeight: "800",
      fontSize: 19,
      color: '#00449e',
    },
    type: {
      color: "darkgray",
      fontSize: 16,
    },
    description: {
      fontSize: 17,
    }
  }
);


export default ItemCard;