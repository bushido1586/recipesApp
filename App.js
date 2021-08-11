import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import {PersistGate} from 'redux-persist/es/integration/react';
import Main from './components/MainComponent';


const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

const {persistor, store} = ConfigureStore();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store ={store}>
        <PersistGate persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  )
}