import { StyleSheet, FlatList} from 'react-native';
import ItemCard from "./ItemCard";


function ItemCardList({items, navigation}) {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <ItemCard item={item} navigation={props.navigation}/>
      )}
      keyExtractor={(i) => `${i.id}${i.type}`}
    />);
}

// const styles = StyleSheet.create(
//   {

//   }
// );

export default ItemCardList;