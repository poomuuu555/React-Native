import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './ZipCodeScreen';
import WeatherScreen from './WeatherScreen';

const Stack = createStackNavigator();

export default function Home() {
  return (    
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ZipCodeScreen} />
                <Stack.Screen name="Weather" component={WeatherScreen} />
            </Stack.Navigator> 
        </NavigationContainer>  
  );
}