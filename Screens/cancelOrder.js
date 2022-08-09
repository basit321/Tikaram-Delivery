import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { HStack, ScrollView } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { CheckBox, CheckBoxActive, Man, Map, Phone } from '../Components/Images'
import { LinearGradient } from 'expo-linear-gradient'

const height = Dimensions.get('window').height;

export default function CancelOrder() {
    const navigation = useNavigation()
    return (
        <View style={{ ...styles.container }}>
            <Text>Are you sure you want to cancel the order?</Text>
            <View style={{ ...styles.card }}>
                <HStack alignItems="center">
                    <CheckBox />
                    <Text style={{ marginLeft: 10 }}>No response to the request</Text>
                </HStack>
            </View>
            <View style={{ ...styles.card }}>
                <HStack alignItems="center">
                    <CheckBox />
                    <Text style={{ marginLeft: 10 }}>No response to the request</Text>
                </HStack>
            </View>
            <View style={{ ...styles.card }}>
                <HStack alignItems="center">
                    <CheckBox />
                    <Text style={{ marginLeft: 10 }}>No response to the request</Text>
                </HStack>
            </View>
            <View style={{ ...styles.card }}>
                <HStack alignItems="center">
                    <CheckBoxActive />
                    <Text style={{ marginLeft: 10 }}>Another response</Text>
                </HStack>
                <View style={{ borderColor: "#BEC5D1", borderWidth: 1, borderRadius: 20, height: 100, marginTop: 5, padding: 5 }}>
                    <TextInput placeholder='note text ….'>

                    </TextInput>
                </View>
            </View>

            <View style={{ position: 'absolute', bottom: 30, }}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                    <LinearGradient
                        start={{ x: -1, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ width: 150, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginBottom: 10 }}
                        colors={['#37B3A9', '#E8E6A5']}
                    >
                        <Text style={{ fontSize: 14, fontFamily: "arabicBold", color: "#fff", paddingVertical: 10, }}>
                            Dont Cancel the Order
                        </Text>

                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}  onPress={() => navigation.navigate('Homeonline')} style={{ width: 150, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderRadius: 10, borderWidth: 1, borderColor: "#FF4C4C" }}>
                    <Text style={{ fontSize: 14, fontFamily: "arabicBold", color: "#FF4C4C", paddingVertical: 10, borderRadius: 20 }}>
                        Cancel the order
                    </Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        alignItems: "center"
    },
    card: {
        borderRadius: 20,

        width: "90%",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        margin: 20,
        marginVertical: 10,
        padding: 10,
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