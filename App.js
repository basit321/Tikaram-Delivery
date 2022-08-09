import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { View, LogBox, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from './Screens/Home';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Userapp from "./Screens/Userapp"
import Forgetpaswword from './Screens/Forgetpaswword';
import Order from './Screens/Order';
import HomeOnline from './Screens/HomeOnline';
import { NativeBaseProvider } from 'native-base';
import RecieptOrder from './Screens/RecieptOrder';
import ArrivedOrder from './Screens/ArrivedOrder';
import DeliveredOrder from './Screens/DelieverdOrder';
import CustomerEvaluation from './Screens/customerEvalutaion';
import CancelOrder from './Screens/cancelOrder';
import MyWallet from './Screens/MyWallet';
import PreviousOrder from './Screens/previousOrder';
import PreviousOrderDetail from './Screens/porderDetail';
import Toptabbs from './Components/Toptabbs';
import Setting from './Screens/Setting';


const Stack = createStackNavigator();
const AppStack = createStackNavigator();

LogBox.ignoreAllLogs();
const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
const verticalAnimation = {
  gestureDirection: 'vertical',
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  },
};
const horizontalAnimation1 = {
  headerShown: true, 
  title: "Cancel Order",

  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};


const horizontalAnimation2 = {
  headerShown: true, 
  title: "My Wallet",

  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const horizontalAnimation3 = {
  headerShown: true, 
  title: "Previous Orders",

  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
const horizontalAnimation4 = {
  headerShown: true, 
  title: "Order Number: 34212",

  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
const horizontalAnimation5 = {
 
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
const horizontalAnimation6 = {
  headerShown: true, 
  title: "Settings",

  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const Tabnav=({route,navigation})=>{
  

  return(
  <View style={styles.conatainer} >
    
  <Toptabbs navigation={navigation} />
  </View>
  
  
  
  )
  
  
  
  
  
  
  
  
  
  
  }
const fetchFonts = () => {
  return Font.loadAsync({
    'arabicRegular': require('./fonts/arabicRegular.ttf'),
    'arabicLight': require('./fonts/arabicLight.ttf'),
    'arabicBold': require('./fonts/arabicBold.ttf'),
    'robotoRegular': require('./fonts/robotoRegular.ttf'),
    'avenirRegular': require('./fonts/avenirRegular.ttf')
  })
}

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Userapp" component={Userapp} />
          <Stack.Screen name="Forgetpaswword" component={Forgetpaswword} />
          <Stack.Screen name="Home" component={Home} options={verticalAnimation}  />
          <Stack.Screen name="Homeonline" component={HomeOnline} />
          <Stack.Screen name="order" component={Order}  options={verticalAnimation}/>
          <Stack.Screen name="reciept" component={RecieptOrder} />
          <Stack.Screen name="arrived" component={ArrivedOrder} options={horizontalAnimation} />
          <Stack.Screen name="delivered" component={DeliveredOrder}options={horizontalAnimation} />
          <Stack.Screen name="evalutaion" component={CustomerEvaluation}options={horizontalAnimation} />
          <Stack.Screen name="cancelOrder" component={CancelOrder} options={horizontalAnimation1} />
          <Stack.Screen name="myWallet" component={MyWallet} options={horizontalAnimation2} />
          <Stack.Screen name="previousOrder" component={PreviousOrder} options={horizontalAnimation3} />
          <Stack.Screen name="porderDetail" component={PreviousOrderDetail} options={horizontalAnimation4} />
          <Stack.Screen name="Personalinfo" component={Tabnav} options={horizontalAnimation5} />
          <Stack.Screen name="Setting" component={Setting} options={horizontalAnimation6} />
          
          
          {/* FF4C4C */}
          

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default App;
const styles = StyleSheet.create({
   
  conatainer:{
      flex:1,
      justifyContent:"center",
  
      
  },
  
  
  
      
  
    
    
    
    });