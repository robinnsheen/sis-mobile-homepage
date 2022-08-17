import { ListItem, Text } from "react-native";

function ItemCard({ item }) {
  console.log("hit item card", item);
  return (
    // <ListItem
    //   title={`${item.title}`}
    // />
    <Text>{item.title}</Text>
  );
}

export default ItemCard;