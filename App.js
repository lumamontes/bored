import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlatButton from './components/button'
export default function App() {
  


  function handleSubmit() {
    fetch('http://www.boredapi.com/api/activity/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  }

  return (
    <View style={styles.container}>
      <Text>Tédioss ?</Text>
      <Text>Encontre algo pra fazer</Text>
      <FlatButton  onPress={handleSubmit} text ='Descobrir tarefa do dia' />
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
