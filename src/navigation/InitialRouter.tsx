import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from '../screens/list/List';
import Details from '../screens/details/Details';
import Cart from '../screens/cart/Cart';

const Stack = createNativeStackNavigator();

const InitialRouter = () => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={List}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default InitialRouter;
