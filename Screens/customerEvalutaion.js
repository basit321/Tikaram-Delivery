import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { AvatarWite, GrayStar, YellowStart } from '../Components/Images';
import { HStack, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('window').height;

const CustomerEvaluation = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                start={{ x: -1, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ ...styles.linear }}
                colors={['#37B3A9', '#E8E6A5']}
            >
                <Text style={{ fontSize: 18, color: "#fff" }}>Customer Evaluation</Text>
                <View style={{ position: "absolute", bottom: -50 }}>
                    <AvatarWite />
                </View>

            </LinearGradient>

            <View style={{ marginTop: 50, alignItems: "center" }}>
                <Text style={{ fontSize: 23 }}>User Name</Text>
                <HStack justifyContent="space-between">
                    <GrayStar />
                    <GrayStar />
                    <YellowStart />
                    <YellowStart />
                    <YellowStart />
                </HStack>
            </View>

            <View style={{ ...styles.card }}>
                <Text style={{ color: "#000", fontSize: 14, fontFamily: "arabicBold" }}>Notes</Text>
                <View style={{ borderColor: "#BEC5D1", borderWidth: 1, borderRadius: 20, height: 100 }}>
                    <TextInput placeholder='note text ….'>

                    </TextInput>
                </View>
            </View>


            <View style={{ position: 'absolute', bottom: 30, width: "100%" }}>
                <HStack justifyContent="center" >
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Home")} style={{ marginRight: 10 }}>
                        <LinearGradient
                            start={{ x: -1, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ width: 150, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
                            colors={['#37B3A9', '#E8E6A5']}
                        >
                            <Text style={{ fontSize: 14, fontFamily: "arabicBold", color: "#fff", paddingVertical: 10, }}>
                                Send
                            </Text>

                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Homeonline")} style={{ marginLeft: 10, width: 150, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderRadius: 10, borderWidth: 1, borderColor: "#FF4C4C" }}>
                        <Text style={{ fontSize: 14, fontFamily: "arabicBold", color: "#FF4C4C", paddingVertical: 10, borderRadius: 20 }}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                </HStack>
            </View>
        </View >
    )
}

export default CustomerEvaluation
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
        height: height * 0.35,
        justifyContent: 'center',
        alignItems: "center",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    card: {
        borderRadius: 20,
        backgroundColor: "#fff",
        margin: 20,
        marginVertical: 10,
        padding: 10
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
