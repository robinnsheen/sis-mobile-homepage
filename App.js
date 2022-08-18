import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import axios from "axios";
import Home from "./components/Home";
import Assessments from "./pages/Assessments";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const [items, setItems] = useState("");
  // console.log("items are", items);
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
      // console.log(res);
      setItems(res.data.results);
    }

    if (items === "") {
      getItems();
    }

  }, []);

  // const Drawer = createDrawerNavigator();

  // function MyDrawer() {
  //   return (
  //     <Drawer.Navigator useLegacyImplementation>
  //       <Drawer.Screen name="Home">
  //         {<Home items={items} />}
  //       </Drawer.Screen>
  //       <Drawer.Screen name="Assessments">
  //         {<Assessments items={items} />}
  //       </Drawer.Screen>
  //     </Drawer.Navigator>
  //   );
  // }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#e46b66',
          },
          headerTitleStyle: {
            fontFamily: 'Georgia',
            fontSize: 20,
          }
        }}
      >
        <Stack.Screen name="Home" options={{title: "{ R } Rithm 99"}}>
          {(props) => <Home items={items}/>}
        </Stack.Screen>
        <Stack.Screen name="Details" component={Details}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

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
