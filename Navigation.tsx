import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Screens
import HomeScreen from './screens/HomeScreen';
import ListScren from './screens/ListScreen';
import { Colors } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();


function MyTabs(){
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{tabBarActiveTintColor: Colors.purple30}}>
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Clientes"
        component={ListScren}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
};

export default Navigation;
