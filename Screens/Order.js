import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Clock, Road } from '../Components/Icons';
import { HStack, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('window').height;

const Order = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ ...styles.linear }}
        colors={['#37B3A9', '#E8E6A5']}
      >
        <Text style={{ fontSize: 119, color: "#fff" }}>05</Text>
        <HStack justifyContent="space-between" >
          <HStack alignItems="center" mr="10">
            <Road />
            <Text style={{ fontSize: 18, color: "#fff" }}> 3.0 Km</Text>
          </HStack>
          <HStack alignItems="center" ml="10">
            <Clock />
            <Text style={{ fontSize: 18, color: "#fff" }}> 2 Mins</Text>
          </HStack>
        </HStack>
      </LinearGradient>
      <View style={{ margin: 40 }}>
        <Text style={{ fontSize: 25, }}>User Name</Text>
        <Text style={{ fontSize: 15, color: "#7B7B7B" }}>Total amount: 10.00 JOD</Text>

        <View style={{ borderWidth: 0.4, marginVertical: 10, marginHorizontal: -100 }}></View>

        <Text style={{ fontSize: 15, color: "#7B7B7B" }}><Text style={{ color: "#000" }}>Receiving</Text>  : Amman , Jordan , Khalda ..</Text>

        <View style={{ borderWidth: 0.5, marginVertical: 10, marginHorizontal: -100 }}></View>

        <Text style={{ fontSize: 15, color: "#7B7B7B" }}><Text style={{ color: "#000" }}>Delivery</Text>  : Amman , Jordan , Khalda ..</Text>
      </View>

      <View style={{ position: 'absolute', bottom: 30, width: "100%" }}>
        <HStack justifyContent="center" >
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("reciept")} style={{ marginRight: 10 }}>
            <LinearGradient
              start={{ x: -1, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ width: 150, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
              colors={['#37B3A9', '#E8E6A5']}
            >
              <Text style={{ fontSize: 14, fontFamily: "arabicBold", color: "#fff", paddingVertical: 10, }}>
                Accept
              </Text>

            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Homeonline")} style={{ marginLeft: 10, width: 150, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderRadius: 10, borderWidth: 1, borderColor: "#FF4C4C" }}>
            <Text style={{ fontSize: 14, fontFamily: "arabicBold", color: "#FF4C4C", paddingVertical: 10, borderRadius: 20 }}>
              Reject
            </Text>
          </TouchableOpacity>
        </HStack>
      </View>
    </View >
  )
}

export default Order
const styles = StyleSheet.create({
  onlineBtn: {
    backgroundColor: "#00D6AB",
    width: 300,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center",
    position: "absolute",
    bottom: -20,
    left: "14%",
  },
  linear: {
    height: height * 0.45,
    justifyContent: 'center',
    alignItems: "center"
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
