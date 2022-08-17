import { ListItem, Text, View, StyleSheet } from "react-native";

function ItemCard({ item }) {
  // console.log("hit item card", item);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.dates}>
          <Text>{item.start_date}</Text>
        </View>
        <View>
          <Text>{item.start_at}</Text>
        </View>
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
)


export default ItemCard;