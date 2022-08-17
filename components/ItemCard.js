import { ListItem, Text, View, StyleSheet } from "react-native";

function ItemCard({ item }) {
  // console.log("hit item card", item);
  return (
    <View style={styles.container}>
      <View style={styles.dates}>
        <Text>{Date(item.start_date).toDateString()}</Text>
        <Text>{Date(item.start_at).toTimeString()}</Text>
      </View>
      <View style={styles.textArea}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
    dates: {
      flex: 1,
      flexDirection: "row",
    },
    textArea: {
      flex: 1,
    },
  }
);


export default ItemCard;