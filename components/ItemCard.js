import { View } from "react-native-web";

function ItemCard({ item }) {
  return (
    <ListItem
      title={ item.title }
    />
  )
}

export default ItemCard