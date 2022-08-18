import { StyleSheet, FlatList} from 'react-native';
import ItemCard from "./ItemCard";


function ItemCardList({items }) {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <ItemCard item={item}/>
      )}
      keyExtractor={(i) => `${i.id}${i.type}`}
    />);
}

// const styles = StyleSheet.create(
//   {

//   }
// );

export default ItemCardList;