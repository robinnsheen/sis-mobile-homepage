import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, List } from 'react-native';
import axios from "axios";
import ItemCard from "./components/ItemCard";


export default function App() {

  const [items, setItems] = useState("");
  console.log("items are", items);
  useEffect(function damnitBrian() {
    console.log("in use effect");

    async function getItems() {
      const res = await axios({
        url: "http://localhost:8000/api/cohort-items/",
        method: "get",
        headers: {
          "Authorization": "Token 71ba9fbb567c76e604ac05dd28ec8a3bfea61073",
          "Content-Type": "application/json",
        }
      });
      console.log(res);
      setItems(res.data.results);
    }

    if (items === "") {
      getItems();
    }

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {items &&
        <View>
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <ItemCard item={item} />
            )}
            keyExtractor={(i) => `${i.id}${i.type}`}
          />
        </View>
      }
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
