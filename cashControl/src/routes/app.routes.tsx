import React from 'react';
import {Platform} from 'react-native';

import {MaterialIcons} from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import theme from '../global/theme';

import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';
import AbstractNegative from '../screens/AbstractNegative';
import AbstractPositive from '../screens/AbstractPositive';

const {Navigator, Screen} = createBottomTabNavigator();

const AppRoutes= () => {
  return (
      <Navigator
        screenOptions={({route})=> ({
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.rejected,
            tabBarStyle:{
              backgroundColor: theme.colors.bg
            },
            headerShown: false,
            tabBarLabelPosition: "beside-icon",
            style:{
                paddingVertical: Platform.OS === "ios" ? 20 : 0, 
                height: 88,
            },
            tabBarIcon:  ({ color, size }) => {
                let iconName;
                if(route.name === "Home"){
                    iconName= "format-list-bulleted"
                }
                if(route.name === "Register"){
                    iconName= "attach-money"
                }
                if(route.name === "Saídas"){
                    iconName= "pie-chart"
                }
                if(route.name === "Entradas"){
                    iconName= "pie-chart"
                }
                return <MaterialIcons 
                    name={iconName}
                    size={size}
                    color={color}
        
                />
            }
        })}
      >
          <Screen
            name="Home" component={Dashboard} 
          />
          <Screen
            name="Register" component={Register}           
          />
          <Screen
            name="Saídas" component={AbstractNegative}           
          />
          <Screen
            name="Entradas" component={AbstractPositive}           
          />
      </Navigator>
  );
}

export default AppRoutes;