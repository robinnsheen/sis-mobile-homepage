import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";
import SISapi from "./api";





export default function App() {

  const [assessmentSessions, setAssessmentSessions] = useState("");

  useEffect(function damnitBrian() {

    const res = SISapi.getAssessmentSessionsList();
    console.log(res);
    setAssessmentSessions(res);
  }, [assessmentSessions]);


  return (
    <View style={styles.container}>
      <Text>{ assessmentSessions[0].title }</Text>
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
