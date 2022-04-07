import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import BookScreen from './src/pages/Books';
import CartScreen from './src/pages/Carts';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Book' component={BookScreen}/>
      <Stack.Screen name='Cart' component={CartScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
