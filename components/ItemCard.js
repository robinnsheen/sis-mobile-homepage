import { Text, View, StyleSheet } from "react-native";

function ItemCard({ item }) {
  // console.log("hit item card", item);
  const types = {
    "V": "Event",
    "E": "Exercise",
    "L": "Lecture",
    "A": "Assessment"
  }

  const fullDateTime = new Date(item.start_date);
  const date = fullDateTime.toLocaleDateString(
    'en-us',
    {
      weekday: "short",
      day: "numeric",
      month: "numeric"
    })
  const time = fullDateTime.toLocaleTimeString(
    'en-us',
    {
      hour: "numeric",
      minute: "numeric"
    }
  );

  return (
    <View style={styles.container}>
      <View style={styles.dates}>
        <Text>{date}</Text>
        <Text>{time}</Text>
      </View>
      <View style={styles.textArea}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.type}>({types[item.type]})</Text>
        </View>
        <Text numberOfLines={1}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      padding: 8,
      borderWidth: 2,
    },
    dates: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    textArea: {
      flex: 1,
    },
    header: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    title: {
      paddingTop: 3,
      paddingBottom: 3,
      paddingRight: 6,
      fontWeight: "600"
    },
    type: {
      color: "darkgray"
    }
  }
);


export default ItemCard;