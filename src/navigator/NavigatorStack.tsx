import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movie.interface';

export type RootStackParams = {
  HomeScreen:undefined; //Because it does not have params
  DetailScreen:Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const NavigatorStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle: {
            
        }
    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}