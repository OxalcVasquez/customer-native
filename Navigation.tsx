import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Screens
import HomeScreen from './screens/HomeScreen';
import ListScren from './screens/ListScreen';
import { Colors } from 'react-native-ui-lib';

const Tab = createBottomTabNavigator();


function MyTabs(){
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{tabBarActiveTintColor: Colors.purple30}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen name="Clientes" component={ListScren} />
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
