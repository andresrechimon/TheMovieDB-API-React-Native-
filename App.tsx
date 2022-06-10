import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { NavigatorStack } from './src/navigator/NavigatorStack';


const App = () => {
  return (
    <NavigationContainer>
      <NavigatorStack/>
    </NavigationContainer>
  )
}

export default App;
