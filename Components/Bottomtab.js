import React from 'react';
import { useEffect,useState } from 'react';
import 'react-native-gesture-handler';
import { View, Text , LogBox ,Dimensions} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons,Entypo,MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Home from '../Screens/Home';

import Menu from '../Screens/Menu';
import Order from '../Screens/Order';


const Stack = createStackNavigator();
const AppStack = createStackNavigator();
LogBox.ignoreAllLogs();




const BottomTabs  = (props,navigation) => {

  // this is where my app navigator can see if modal is open from child's state
  // if modal is open, hide bottom tab
  
return(
  <Tab.Navigator  screenOptions={{
   tabBarStyle:{borderTopRightRadius:20,borderTopLeftRadius:20 ,},
   headerShown: false,
      
   tabBarInactiveTintColor:"#1F2937",
   tabBarActiveTintColor:'#3783A9',
  }} >
      <Tab.Screen name="Home" options={{
         tabBarIcon: ({focused}) => (
          <SimpleLineIcons name="home" size={30} color={focused ? '#3783A9' : '#1F2937'} />
        ),
       
       
      }}> 
      {screenProps => (
          <Home
            {...screenProps}
            updateAuthState={props.updateAuthState}
          />
        )}
      
      
      </Tab.Screen>
      <Tab.Screen name="orders"  options={{
         tabBarIcon: ({focused}) => (
          <MaterialCommunityIcons name="checkbox-blank" size={30} color={focused ? '#3783A9' : '#1F2937'} />
        ),
       
       
      }}
      
      
      >
        {screenProps => (
          <Order
            {...screenProps}
            updateAuthState={props.updateAuthState}
          />
        )}
        </Tab.Screen>
      <Tab.Screen name="Menu"  options={{
         tabBarIcon: ({focused}) => (
          <Entypo name="menu" size={30} color={focused ? '#3783A9' : '#1F2937'} />
        ),
       
       
      }}>
    {screenProps => (
          <AppNavigator
            {...screenProps}
            updateAuthState={props.updateAuthState}
          />
        )}

      </Tab.Screen>
      
    
    </Tab.Navigator>

);



}

const AppNavigator = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // this is where my app navigator can see if modal is open from child's state
  // if modal is open, hide bottom tab
  if (modalIsOpen) {
    props.navigation.setOptions({tabBarStyle: {display: 'none'}});
  } else {
    props.navigation.setOptions({tabBarStyle: {display: 'flex',borderTopRightRadius:20,borderTopLeftRadius:20}});
  }

  return (
    <AppStack.Navigator initialRouteName="Menu">
      <AppStack.Screen
        name="Menu"
        options={{
          headerShown: false,
        }}>
        {screenprops => (
          <Menu
            {...screenprops}
            setModalIsOpen={setModalIsOpen}
            modalIsOpen={modalIsOpen}
          />
        )}
      </AppStack.Screen>
    </AppStack.Navigator>
  )
}

export default BottomTabs;

