import React from 'react';
import { Text, View, SafeAreaView,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
    return (
        <>
          <StatusBar barStyle="dark-content" />
          <HomeScreen />
        </>
    );
}

export default App;