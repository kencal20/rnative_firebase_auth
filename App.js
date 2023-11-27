import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSceen from './screens/homeSceen';
import LoginScreen from './screens/loginScreen';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeSceen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

