import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import FlatButton from './components/button'
export default function App() {
  
  const [ atividade, setAtividade] = useState([])


  function handleSubmit() {
    fetch('http://www.boredapi.com/api/activity/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setAtividade(data.activity);
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
         <Text style={styles.title}>Tédio?</Text>
         <Text style={styles.subtitle}>Encontre algo pra fazer</Text>
         <FlatButton  onPress={handleSubmit} text ='Descobrir tarefa do dia' />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.activity}>{atividade}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 50
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    letterSpacing: 6
  },

  subtitle: {
    fontSize: 20,
  },
  content: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer:{ 
    flex: 0.5,
    backgroundColor: '#ffffff',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  activity: {
    fontSize: 28,
    textAlign: 'center',
    borderBottomColor: '#BD54E1',
    borderBottomWidth: 4,  
  }
});
