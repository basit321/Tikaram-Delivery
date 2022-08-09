import React from 'react';
import { useState,useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground,BackHandler, TouchableOpacity,Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Location,Bellicon,Payment,Shoppingcart,Heart,Info,Language,Phonecall,Email,Avatar
  ,Checkbox,Mark,Circles,Map_mark,Filledheart

} from '../Components/Icons';
import { Visa,Mastercard,Apple} from '../Components/Images';

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

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  
  

const Setting = ({navigation}) => {
    const[Logoutmodal,setlogoutmodal]=useState(false);
    const[Lang,setlang]=useState(false);
    const Delay=()=>{
 
        setTimeout(function(){
     
          //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
          setlogoutmodal(false)
          
     
        }, 2000);
      }
  
  return (
    <View style={styles.conatainer}>
    <StatusBar style='auto'/>
    <VStack width='90%' mx='auto' mt='5%'>
       
    <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",}}>
    Application language    
</Text>

    
    </VStack>
    <NativeBaseProvider>
    
    <TouchableOpacity activeOpacity={1} onPress={()=>setlang(true)} >
    <Box style={{height:48,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1' 
borderColor='gray.50' shadow='2'  mx='auto' 
mt='5%'

  
>
    <VStack width='90%' mx='auto'>
    <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9CA3AF",}}>
    English  
</Text>
<Center ml='auto'>

<AntDesign name="caretdown" size={12} color="gray" />
</Center>

    </VStack>
    </Box>
    </TouchableOpacity>
    <TouchableOpacity  activeOpacity={1}  style={{ ...styles.loginBtn,marginTop:"10%",width:width*0.7 }} 
                onPress={()=>{setlogoutmodal(true)}}
                
                >
                    <Text style={{ color: '#C40000', fontFamily: 'arabicBold' }}>Logout</Text>
                </TouchableOpacity>

    <Modal isVisible={Lang} 
         
         avoidKeyboard={false}
         onBackButtonPress=  { () =>setlang(false)}
         
       >
          <View style={styles.modalContentlanguage}>
          <VStack width='90%' mx='auto'>
           <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#374151", }}>
 Change Language
</Text>
<TouchableOpacity activeOpacity={1} onPress={()=>setlang(false)}>
<VStack ml='auto' mt='-5%'>
<Entypo name="cross" size={30} color="#C4C4C4"  />

</VStack>
</TouchableOpacity>

</VStack>

      <VStack mx='auto' my='auto' space='15%' >

      <Box style={{height:48,width:width*0.8,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.300' 
  
>
 
<HStack mx='auto'>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9CA3AF", }}>
 English
</Text>
</HStack>
<VStack width='95%' mt='-3%'>
<HStack  ml='auto'>
<Checkbox style={{width:18,height:18}}/>
</HStack>
</VStack>



</Box>
<Box style={{height:48,width:width*0.8,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.300' 
  
>
 
<HStack mx='auto'>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9CA3AF", }}>
عربي
</Text>
</HStack>


</Box> 

   
  
        </VStack>    
        <TouchableOpacity activeOpacity={1} onPress={()=>setlang(false)}>
            <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn, width:width*0.7, marginLeft:'auto',marginRight:"auto",marginTop:'7%' }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Confirm </Text>
                    </LinearGradient>
                    </TouchableOpacity>  

   </View>
       </Modal>
       <Modal isVisible={Logoutmodal} 
         
         avoidKeyboard={false}
         onBackButtonPress=  { () =>setlogoutmodal(false)}
       >
          <View style={styles.modalContentlogin}>
                   <VStack mx='auto'my='auto'>

                   <Text style={{fontFamily:'arabicRegular',fontSize:24,color:"#374151", marginLeft:"auto",marginRight:"auto" }}>
Are you sure 
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#6B7280", marginLeft:"auto",marginRight:"auto"}}>
you want Logout
</Text>

<HStack space='5%' mt='10%' >
<TouchableOpacity activeOpacity={1} onPress={()=>setlogoutmodal(false)}>
<LinearGradient
                       colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                       start={{ x: 0, y: 0 }}
                       end={{ x: 1, y: 1 }}
                       style={{ ...styles.logoutbtn }}
                   >
                       <Text style={{ color: "white", fontFamily: 'arabicBold', }}>No</Text>
                   </LinearGradient>
</TouchableOpacity>
 
                   <Button
                     style={{ ...styles.logoutbtn,backgroundColor:"#707070" }}
                     
                     onPress={()=>{navigation.navigate('Userapp'),Delay()} } 
                   >
<Text style={{ color: "white", fontFamily: 'arabicBold',marginTop:"-10%" }}>Yes</Text>
                   </Button>
               


</HStack>




                   </VStack>

         

   </View>
       </Modal>

    </NativeBaseProvider>
    </View>

  )
}

export default Setting
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:"#F6F6F6"
    
        
    },
    
    slidemodel:{
    
      
      margin: 0,
      
      width: width,
  height: height  
  
  
},
    
createBtn: {
  
  height: 49,
  borderRadius: 10,
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
  paddingBottom: 4
},  
loginBtn: {
  
  height: 49,
  borderRadius: 10,
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',

  borderWidth: 1,
  borderColor: '#C40000',
  marginLeft:"auto",
  marginRight:"auto"
},    
slidemodelcontent:{
  backgroundColor: 'white',
  flex:1,
  padding: 22,
 
  borderRadius: 0,
  borderColor: 'rgba(0, 0, 0, 0.1)',




},  
bottomModal: {
  justifyContent: 'flex-end',
  margin: 0,
  position:"absolute",
  width: width,
height: height  


},
modalContentlogin: {
  backgroundColor: 'white',

  
  borderRadius: 4,
  borderColor: 'rgba(0, 0, 0, 0.1)',
  height:222,
  borderRadius:20
  
},
modalContentchnagepass: {
  backgroundColor: 'white',

  
  borderRadius: 4,
  borderColor: 'rgba(0, 0, 0, 0.1)',
  height:412,

  width:343,
  marginLeft:'auto',
  marginRight:"auto",
  
  borderRadius:20
  
},
logoutbtn: {
  
  height: 49,
  borderRadius: 10,
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
  paddingBottom: 4,
  width:129,
},
Btn: {
    
  height: 49,
  borderRadius: 10,
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
  paddingBottom: 4,
  marginTop:"10%",

  marginLeft:"auto" ,
  marginRight:"auto",
  width:256
  
},
    
modalContentlanguage: {
  backgroundColor: 'white',

  
  borderRadius: 4,
  borderColor: 'rgba(0, 0, 0, 0.1)',
  height:290,
  borderRadius:20
  
},   
      
      
      });