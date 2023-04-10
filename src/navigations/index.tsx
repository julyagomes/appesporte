import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {LoginNavigation} from './login.navigation'
import {CadastrarNavigation} from './cadastrar.navigation'

export function Navigation() {
  return (
    <NavigationContainer>
      <LoginNavigation/>
      <CadastrarNavigation/>
    </NavigationContainer>
  );
}