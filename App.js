import React from 'react';
import { View, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import Main from './components/MainComponent';
import Home from './components/HomeComponent';


export default function App() {
  return(
    <SafeAreaView>
      <View >
        <Text>This is a test</Text>
        <Home />
      </View>
    </SafeAreaView>
  )
}