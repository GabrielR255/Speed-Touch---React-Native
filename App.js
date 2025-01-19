import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  const [Click, setClicks] = useState(0);

  function Darclick() {
    setClicks(Click + 1);
  }

  function Zeroclick() {
    setClicks(0);
  }

  return (
    <View style={styles.container}>
      {/* TestClick View */}
      <View style={styles.testclick}>
        <Text style={styles.testedeclick}>TestClick!</Text>
      </View>

      {/* Div Pai */}
      <View style={styles.divpai}>
        <TouchableOpacity style={styles.resetbutton} onPress={Zeroclick}>
          <Text style={styles.tittlebutton}>Reset</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>Quantidade de Clicks: {Click}</Text>
        <StatusBar style="auto" />

        <TouchableOpacity style={styles.button} onPress={Darclick}>
          <Text style={styles.tittlebutton}>Click</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00133f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#fd9f00',
    padding: 25,
    marginTop: 20,
    borderRadius: 30,
  },
  tittlebutton: {
    color: 'white',
  },
  resetbutton: {
    backgroundColor: 'purple',
    padding: 10,
    marginTop: -60,
  },
  divpai: {
    paddingTop: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '30%',
    borderRadius: 30,
    marginTop: 50
    
  },
  testclick: {
    width: '70%', 
    height: 50, 
    backgroundColor: '#fd9f00', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 20, 
    borderRadius: 20,
    marginTop: -150
    
  },
  testedeclick: {
    fontSize: 20,
    fontWeight: '700', 
    color: 'white',
  },
});