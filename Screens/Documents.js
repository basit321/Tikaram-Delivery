

import React from 'react'
import { StyleSheet, Text, View, Dimensions, ImageBackground,BackHandler, TouchableOpacity,Alert
  ,ScrollView } from 'react-native';
  import { Checkbox,Sq,Judical,Heart_fill,ID_card,Proof,License,Resgistration,Car_1,Car_photo } from '../Components/Icons';
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
import Modal from 'react-native-modal'; 
import {Header} from "react-native-elements"
import { Feather,Ionicons ,Entypo ,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'; 
import { Navigation } from 'react-native-navigation'
import { BackgroundImage } from 'react-native-elements/dist/config'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Documents = () => {
  return (
    <ScrollView style={styles.container}>
      <NativeBaseProvider>
      <VStack style={{height:63,}}>
         <HStack mx='auto' width='90%' my='auto'>
            <Sq/>
            <Text style={{fontFamily:'arabicRegular',fontSize:13,color:"black",marginTop:'-2%',marginLeft:'5%'}}>
            Captain Liscense Forntside
</Text>
     
     <Checkbox style={{marginLeft:"auto"}}/>
         </HStack>

       </VStack>
       <VStack style={{height:63,backgroundColor:"#fff"}}>
         <HStack mx='auto' width='90%' my='auto'>
            <Judical/>
            <Text style={{fontFamily:'arabicRegular',fontSize:13,color:"black",marginTop:'-2%',marginLeft:'5%'}}>
            Judicial Records
</Text>
<Checkbox style={{marginLeft:"auto"}}/>
         </HStack>

       </VStack>
       <VStack style={{height:63,}}>
         <HStack mx='auto' width='90%' my='auto'>
            <Heart_fill/>
            <Text style={{fontFamily:'arabicRegular',fontSize:13,color:"black",marginTop:'-2%',marginLeft:'5%'}}>
            Medical Checkup Certificate
</Text>
     
     <Checkbox style={{marginLeft:"auto"}}/>
         </HStack>

       </VStack>
       <VStack style={{height:63,backgroundColor:"#fff"}}>
         <HStack mx='auto' width='90%' my='auto'>
            <ID_card/>
            <Text style={{fontFamily:'arabicRegular',fontSize:13,color:"black",marginTop:'-2%',marginLeft:'5%'}}>
            National ID 
</Text>
<Checkbox style={{marginLeft:"auto"}}/>
         </HStack>

       </VStack>
       <VStack style={{height:63,}}>
         <HStack mx='auto' width='90%' my='auto'>
            <Proof/>
            <Text style={{fontFamily:'arabicRegular',fontSize:13,color:"black",marginTop:'-2%',marginLeft:'5%'}}>
            Proof of Payment
</Text>
     
     <Checkbox style={{marginLeft:"auto"}}/>
         </HStack>

       </VStack>
       <VStack style={{height:63,backgroundColor:"#fff"}}>
         <HStack mx='auto' width='90%' my='auto'>
            <License/>
            <Text style={{fontFamily:'arabicRegular',fontSize:13,color:"black",marginTop:'-2%',marginLeft:'5%'}}>
            LTRC License
</Text>
<Checkbox style={{marginLeft:"auto"}}/>
         </HStack>

       </VStack>
       <VStack style={{height:63,}}>
         <HStack mx='auto' width='90%' my='auto'>
            <Resgistration/>
            <Text style={{fontFamily:'arabicRegular',fontSize:13,color:"black",marginTop:'-2%',marginLeft:'5%'}}>
            Car Registrations
</Text>
     
     <Checkbox style={{marginLeft:"auto"}}/>
         </HStack>

       </VStack>
       <VStack style={{height:63,backgroundColor:"#fff"}}>
         <HStack mx='auto' width='90%' my='auto'>
            <Car_1/>
            <Text style={{fontFamily:'arabicRegular',fontSize:13,color:"black",marginTop:'-2%',marginLeft:'5%'}}>
            Vehicle Sticker
</Text>
<Checkbox style={{marginLeft:"auto"}}/>
         </HStack>

       </VStack>
       <VStack style={{height:63,}}>
         <HStack mx='auto' width='90%' my='auto'>
            <Car_photo/>
            <Text style={{fontFamily:'arabicRegular',fontSize:13,color:"black",marginTop:'-2%',marginLeft:'5%'}}>
            Car Photos
</Text>
     
     <Checkbox style={{marginLeft:"auto"}}/>
         </HStack>

       </VStack>
     </NativeBaseProvider>
    </ScrollView>
  )
}

export default Documents
const styles = StyleSheet.create({
  container: {
      backgroundColor: "#f6f6f6",
      minHeight: height,
  },
  
          
          
          
})