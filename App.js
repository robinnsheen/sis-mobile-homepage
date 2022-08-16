import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";
import SISapi from "./api";





export default function App() {

  const [assessmentSessions, setAssessmentSessions] = useState("");
  // const [token, setToken] = useState("");
  
  useEffect(function damnitBrian() {

    // console.log("in use effect");
    // async function getAssessments() {
    //   console.log("in get app.js func");
    //   const res = await SISapi.getAssessmentSessionsList2();
    //   console.log(res);
    //   setAssessmentSessions(res);
    // }
    
    // if (assessmentSessions === "") {
    //   getAssessments();
    // }
    console.log("in use effect");

    async function getAssessments() {
      const res = await axios({
        url: "http://localhost:8000/api/assessmentsessions/",
        method: "get",
        headers: {
          "Authorization": "Token 71ba9fbb567c76e604ac05dd28ec8a3bfea61073",
          "Content-Type": "application/json",
        }
      })
      console.log(res);
      setAssessmentSessions(res.data.results);
    }
    
    if (assessmentSessions === "") {
      getAssessments();
    }

  }, []);



  // useEffect(function damnitBrian() {

  //   async function hiBrian() {

  //     const res = await axios({
  //       url: "http://localhost:8000/api/-token/",
  //       method: "post",
  //       data: {
  //         "username": "admin",
  //         "password": "password"
  //       }
  //     })
  //     console.log(res);
  //     setToken(res.data.token);
  //     // const res = await axios({
  //     //   url: "http://localhost:8000/api/assessmentsessions/",
  //     //   method: "get",
  //     //   headers: {
  //     //     "Authorization": "Token 71ba9fbb567c76e604ac05dd28ec8a3bfea61073",
  //     //     "Content-Type": "application/json",
  //     //     // "Accept": "*/*"
  //     //     // "Cookie": "csrftoken=CTWACQNDXEwO2DEdQpUCXzvLpVhBr5rxxDQVRFWZxEfd8VngjR92g6XAQLRs6Q0a"
  //     //   }
  //     // })
  //     // console.log(res.data);
  //     // setToken(res.data.results);
  //   }
  //   hiBrian();
  //   // const token = hiBrian();
  //   // setToken(token);
  // }, []);


  return (
    <View style={styles.container}>
      {/* <Text>{ token }</Text> */}
      {assessmentSessions &&
        <Text>{ assessmentSessions[0].title }</Text>
      }

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
