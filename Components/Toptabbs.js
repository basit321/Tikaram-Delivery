import  React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar'
import Dashboard from '../Screens/Dashboard';
import Myinfo from '../Screens/Myinfo';
import Carinfo from '../Screens/Carinfo';
import Documents from '../Screens/Documents';

import {
  Box,
  FlatList,
  Image,
  HStack,
  VStack,
  Center,
  NativeBaseProvider,

  ArrowBackIcon,
  Button,
  Radio,
  Select,
  CheckIcon,
  Link,
  

  Heading,
  Input,
  Form,
  FormControl,
  Item,
  Label,
  ArrowDownIcon,
  TextArea


} from "native-base"
import { Feather,Ionicons ,Entypo ,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
const Tab = createMaterialTopTabNavigator();


const Toptabbs = ({navigation}) => {
  return (
    <View style={styles.conatainer}>
         <StatusBar style='white' />
      <View style={{flex:0.16,backgroundColor:"white"}}>
      <HStack  width='90%' mx='auto' mt='20%'>
                    <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.goBack()}} >
                    <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
                    </TouchableOpacity>
                    <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-5%",marginLeft:"2%"}}>
        My Profile
        </Text>
                      </HStack>
                      
      </View>
      <View style={{flex:1,backgroundColor:"white"}}>

        <Tab.Navigator 
             
             screenOptions={{
              tabBarLabelStyle: {fontSize:15,fontFamily:"arabicRegular"},
              tabBarStyle:{},
               tabBarInactiveTintColor:"grey",
               tabBarActiveTintColor:'#37B3A9',
               tabBarIndicatorStyle:{
                 backgroundColor:"#37B3A9"
               }
          
               
              
               
               
              
            }}
            
             
             >
             <Tab.Screen name="My info" component={Myinfo} 
             
             
             />
             <Tab.Screen name="Car info" component={Carinfo}  />
             <Tab.Screen name="Documents" component={Documents}  />
    
          
        </Tab.Navigator>
  </View>
    </View>
  )
}

export default Toptabbs;
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        justifyContent:"center",
    
        
    },
    
    
    
        
    
      
      
      
      });