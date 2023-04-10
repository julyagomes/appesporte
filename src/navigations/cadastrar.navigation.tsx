import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {ScreenCadastrar} from "../screens"
const Stack = createStackNavigator();

export function LoginNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cadastrar" component={ScreenCadastrar} />
    </Stack.Navigator>
  );
}