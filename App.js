import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './components/ZipCodeScreen';
import WeatherScreen from './components/WeatherScreen';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import Logo from './components/Logo';

export default function App() {
  return (        
      <Router>
        <Scene key="root">
          <Scene key="Logo" component={Logo} hideNavBar={true}></Scene>
          <Scene key="Home" component={Home} hideNavBar={true}></Scene>
        </Scene>
      </Router>
  );
}


