import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={{backgroundColor:'#eee',flex:1 ,margin:5}} >
      <Home/>
      <StatusBar  backgroundColor="#eee"   />
    </View>
  );
}

const styles = StyleSheet.create({

  
});
