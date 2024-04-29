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
    <Tab.Navigator initialRouteName="Home" screenOptions={
      {tabBarActiveTintColor: Colors.purple50}
    }>
      <Tab.Screen name="Home" component={HomeScreen} options={{}}/>
      <Tab.Screen name="Customers" component={ListScren}/>
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
