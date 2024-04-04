import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import ORSMap from './ORSMap';
import Default from './components/default/default';
import { useEffect } from 'react';
import { dimensions } from './components/store';

export default function App() {
  const { width, height } = Dimensions.get('window')
  useEffect(() => {
    dimensions.vh = vh
    dimensions.vw = vw
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: 'gray', display: 'flex', justifyContent: 'flex-end' }}>
      <ORSMap />

      <Default />
    </View>
  );
}


