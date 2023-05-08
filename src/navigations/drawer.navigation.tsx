import React from 'react';
import { DrawerNavigationProp, createDrawerNavigator} from '@react-navigation/drawer';
import {ScreenPerfil} from "../screens"
import { colors } from '../styles/colors';
import { Ionicons } from '@expo/vector-icons';
type DrawerParamList ={
  Perfil: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Perfil'>
export type DrawerTypes = {
  navigation: DrawerScreenNavigationProp
}
export function TabNavigation() {
  const Drawer = createDrawerNavigator<DrawerParamList>();
  return (
    <Drawer.Navigator 
      screenOptions={{
        
      }}
    >
      <Drawer.Screen name="Perfil" component={ScreenPerfil} 
        options={{
          
        }}
      />
    </Drawer.Navigator>
  );
}