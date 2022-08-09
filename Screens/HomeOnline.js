import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { MyWaller, PrevoiusOrders, Profile, Setting } from '../Components/Images';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { Center, HStack } from 'native-base';


const height = Dimensions.get('window').height;
const HomeOnline = () => {
    const navigation = useNavigation()


    return (
        <View>
            <StatusBar style='white' />
            <View style={{ backgroundColor: "#04002F", padding: 10, paddingTop: 60, paddingBottom: 100, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 ,height:186}}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("order")}>
                <Text style={{ color: "#00D6AB", fontSize: 24, fontFamily: "arabicRegular" }}>You Are Online</Text>
                </TouchableOpacity>
                
                <Text style={{ color: "#fff", fontSize: 16, fontFamily: "arabicRegular" }}>Wait, you will receive order at any moment!</Text>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Home")} style={{ ...styles.onlineBtn }}>
                <HStack space='2%'>
                <Center>
                <AntDesign name="poweroff" size={24} color="white" />
                </Center>
                    <Text style={{ color: "#fff", fontSize: 24, fontFamily: "arabicRegular" , marginTop:"-1%" }}> Go Offline</Text>
                    </HStack>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 40, marginHorizontal: 40, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      
        <TouchableOpacity  activeOpacity={1} onPress={() => navigation.navigate("Personalinfo")} style={{ ...styles.card, ...styles.shadowC }}>
        
          <Profile />
       
          <Text style={{ fontSize: 16, color: "#374151", fontFamily: "arabicRegular" }}>My Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("previousOrder")} style={{ ...styles.card, ...styles.shadowC }}>
          <PrevoiusOrders />
          <Text style={{ fontSize: 16, color: "#374151", fontFamily: "arabicRegular",marginLeft:"25%" }}>Previous Orders</Text>
        </TouchableOpacity>
      </View>
    
      <View style={{ marginTop: 20, marginHorizontal: 40, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("myWallet")} style={{ ...styles.card, ...styles.shadowC }}>
          <MyWaller />
          <Text style={{ fontSize: 16, color: "#374151", fontFamily: "arabicRegular" }}>My Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Setting")} style={{ ...styles.card, ...styles.shadowC }}>
          <Setting />
          <Text style={{ fontSize: 16, color: "#374151", fontFamily: "arabicRegular" }}>Settings</Text>
        </TouchableOpacity>
      </View>
        </View >
    )
}
const styles = StyleSheet.create({
    onlineBtn: {
        backgroundColor: "#FF4C4C",
        width: 300,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
        marginLeft:"auto",
        marginRight:"auto",
       
        bottom: -20,
        
    },
    card: {
        borderRadius: 20,
        width: "40%",
        backgroundColor: "#fff",
        height: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    shadowC: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
})

export default HomeOnline