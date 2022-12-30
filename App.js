import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login';
import Home from './components/Home';
import Product from './components/Product';
import Auction from './components/Auction';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator InitialRouteName='Login'>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'login', headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ title: 'Product' }}
        />

        <Stack.Screen
          name="Auction"
          component={Auction}
          options={{ title: 'Auction' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
