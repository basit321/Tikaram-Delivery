
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


const Myinfo = () => {
  return (
    <View style={styles.container}>
     <VStack mx='auto' mt='5%'>
     <Box style={{height:112,width:335,borderRadius:15}} bgColor='white' borderWidth='1' 
borderColor='gray.50' shadow='2' mx='auto'

  
>
<HStack width='90%' mx='auto' my='auto'>

 


<Image
source={require('../Images/Rectangle.png')}
 
 alt="description of image"
/>



<VStack style={{marginLeft:"3%"}} space='5%' >
<Text style={{fontFamily:'avenirRegular',fontSize:18,color:"#374151"}}>
Mahmoud Alnatour
</Text>
<HStack space='2%'>
<Star/>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9E9E9E",marginTop:'-5%'}}>
4.8
</Text>
</HStack>
<Text style={{fontFamily:'arabicBold',fontSize:14,color:"black",marginTop:'-5%'}}>
5628
</Text>
</VStack>
</HStack>

  </Box>
     
     </VStack>
     <VStack borderBottomWidth='1'style={{borderColor:"#D6D6D6"}} pb='5%'>
     <VStack borderTopWidth='1' mt='5%' style={{borderColor:"#D6D6D6"}}>
       <HStack width='90%' mx='auto' mt='5%'>
       <Text style={{fontFamily:'avenirRegular',fontSize:15,color:"#374151"}}>
       Email : info@petrardie.com
</Text>
       </HStack>

</VStack>
<VStack borderTopWidth='1' mt='5%' style={{borderColor:"#D6D6D6"}}>
       <HStack width='90%' mx='auto' mt='5%'>
       <Text style={{fontFamily:'avenirRegular',fontSize:15,color:"#374151"}}>
       Phone : +962 79 999 9999
</Text>
       </HStack>

</VStack>
<VStack borderTopWidth='1' mt='5%' style={{borderColor:"#D6D6D6"}}>
       <HStack width='90%' mx='auto' mt='5%'>
       <Text style={{fontFamily:'avenirRegular',fontSize:15,color:"#374151"}}>
       National ID : 9990000000
</Text>
       </HStack>

</VStack>
<VStack borderTopWidth='1' mt='5%' style={{borderColor:"#D6D6D6"}}>
       <HStack width='90%' mx='auto' mt='5%'>
       <Text style={{fontFamily:'avenirRegular',fontSize:15,color:"#374151"}}>
       Gender : Male
</Text>
       </HStack>

</VStack>
<VStack borderTopWidth='1' mt='5%' style={{borderColor:"#D6D6D6"}}>
       <HStack width='90%' mx='auto' mt='5%'>
       <Text style={{fontFamily:'avenirRegular',fontSize:15,color:"#374151"}}>
       Area : Jordan
</Text>
       </HStack>

</VStack>
</VStack>


    </View>
  )
}

export default Myinfo
const styles = StyleSheet.create({
  container: {
      backgroundColor: "#f6f6f6",
      minHeight: height,
  },
  
          
          
          
})