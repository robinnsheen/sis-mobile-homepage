import { StyleSheet, FlatList } from 'react-native';
import ItemCard from "./ItemCard";

/** ItemCardList Component
 *  Renders a list of item cards.
 *
 *  Props:
 *  - items: [{title, description, id, start_date, description, ...}, ...]
 *
 *  State: none
 */

function ItemCardList({ items }) {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <ItemCard item={item} />
      )}
      keyExtractor={(i) => `${i.id}${i.type}`}
    />);
}


export default ItemCardList;