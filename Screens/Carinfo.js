import React from 'react'
import { StyleSheet, Text, View, Dimensions, ImageBackground,BackHandler, TouchableOpacity,Alert
  ,ScrollView } from 'react-native';
  import { Star } from '../Components/Icons';
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


const Carinfo = () => {
  return (
    <View style={styles.container}>
      <VStack mt='5%' width='90%' mx='auto'>
      <Text style={{fontFamily:'avenirRegular',fontSize:25,color:"#374151",fontWeight:"bold"}}>
      My Car Info
</Text> 

      </VStack>

      <VStack borderBottomWidth='1'style={{borderColor:"#D6D6D6"}} pb='5%'>
     <VStack borderTopWidth='1' mt='5%' style={{borderColor:"#D6D6D6"}}>
       <HStack width='90%' mx='auto' mt='5%'>
       <Text style={{fontFamily:'avenirRegular',fontSize:15,color:"#374151"}}>
       Car Model : Ford
</Text>
       </HStack>

</VStack>
<VStack borderTopWidth='1' mt='5%' style={{borderColor:"#D6D6D6"}}>
       <HStack width='90%' mx='auto' mt='5%'>
       <Text style={{fontFamily:'avenirRegular',fontSize:15,color:"#374151"}}>
       Vehicle Manufacture : Fusion
</Text>
       </HStack>

</VStack>
<VStack borderTopWidth='1' mt='5%' style={{borderColor:"#D6D6D6"}}>
       <HStack width='90%' mx='auto' mt='5%'>
       <Text style={{fontFamily:'avenirRegular',fontSize:15,color:"#374151"}}>
       Vehicle Year : 2020
</Text>
       </HStack>

</VStack>
<VStack borderTopWidth='1' mt='5%' style={{borderColor:"#D6D6D6"}}>
       <HStack width='90%' mx='auto' mt='5%'>
       <Text style={{fontFamily:'avenirRegular',fontSize:15,color:"#374151"}}>
       Vehicle Color : Red
</Text>
       </HStack>

</VStack>
<VStack borderTopWidth='1' mt='5%' style={{borderColor:"#D6D6D6"}}>
       <HStack width='90%' mx='auto' mt='5%'>
       <Text style={{fontFamily:'avenirRegular',fontSize:15,color:"#374151"}}>
       Vehicle Number : 10 - 101010
</Text>
       </HStack>

</VStack>
</VStack>


    </View>
  )
}

export default Carinfo
const styles = StyleSheet.create({
  container: {
      backgroundColor: "#f6f6f6",
      minHeight: height,
  },
  
          
          
          
})