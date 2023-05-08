import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import {ScreenLogin, ScreenCadastrar} from "../screens"
import {TabNavigation} from './tab.navigation'
type LoginStackParamList ={
  Login: undefined
  Cadastrar: undefined
  Tab: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}
export function LoginNavigation() {
  const Stack = createStackNavigator<LoginStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Cadastrar" component={ScreenCadastrar} />
      <Stack.Screen name="Tab" component={TabNavigation} />
    </Stack.Navigator>
  );
}