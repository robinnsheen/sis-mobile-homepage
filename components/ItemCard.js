import { ListItem, Text, View } from "react-native";

function ItemCard({ item }) {
  // console.log("hit item card", item);
  return (
    <View>
      <View>
        <Text>{item.start_date}</Text>
      </View>
      <View>
        <Text>{item.start_at}</Text>
      </View>
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
}

export default ItemCard;