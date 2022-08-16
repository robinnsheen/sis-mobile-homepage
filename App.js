import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";





export default function App() {

  const [token, setToken] = useState("");

  useEffect(function damnitBrian() {

    async function hiBrian() {

      // const res = await axios({
      //   url: "http://localhost:8000/api/-token/",
      //   method: "post",
      //   data: {
      //     "username": "admin",
      //     "password": "password"
      //   }
      // })
      // console.log(res);
      // setToken(res.data.token);
      const res = await axios({
        url: "http://localhost:8000/api/assessmentsessions/",
        method: "get",
        headers: {
          "Authorization": "Token 71ba9fbb567c76e604ac05dd28ec8a3bfea61073",
          "Content-Type": "application/json",
          // "Accept": "*/*"
          // "Cookie": "csrftoken=CTWACQNDXEwO2DEdQpUCXzvLpVhBr5rxxDQVRFWZxEfd8VngjR92g6XAQLRs6Q0a"
        }
      })
      // console.log(res.data);
      // setToken(res.data.results);
    }
    hiBrian();
    // const token = hiBrian();
    // setToken(token);
  }, []);
  

  return (
    <View style={styles.container}>
      <Text>{ token.title }</Text>
      <StatusBar style="auto" />
    </View>
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
