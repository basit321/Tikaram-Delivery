import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { HStack, ScrollView } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Location, Man, Map, MyWaller, Phone } from '../Components/Images'
import { LinearGradient } from 'expo-linear-gradient'

const height = Dimensions.get('window').height;

export default function MyWallet() {
    const navigation = useNavigation()
    return (
        <View>
            <View>

                <LinearGradient
                    style={{ ...styles.linear }}
                    colors={['#37B3A9', '#E8E6A5']}
                >
                    <HStack my="2" p="4" justifyContent="space-between">
                        <View style={{ height: 60, width: 60, backgroundColor: "rgba(0,0,0,0.1)", borderRadius: 30, alignItems: "center", justifyContent: 'center' }}>
                            <MyWaller />

                        </View>
                        <View>
                            <Text style={{ color: "#fff", fontSize: 16, fontFamily: "arabicBold" }}>
                                Total wallet balance
                            </Text>
                            <Text style={{ color: "#fff", fontSize: 16, fontFamily: "arabicBold" }}>+50.00 JOD</Text>
                        </View>
                        <View style={{ width: 100, borderRadius: 20, alignSelf: "flex-end" }}>

                        </View>
                    </HStack>
                </LinearGradient>

            </View>

            <LinearGradient
                start={{ x: -1, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ ...styles.linear, width: 120, alignItems: "center", alignSelf: 'center' }} x
                colors={['#868F96', '#596164']}>
                <Text style={{ color: "#fff" }}>03 /11/ 2020</Text>
            </LinearGradient>

            <View style={{ ...styles.card }}>
                <HStack alignItems="center" justifyContent="space-between" my="2">
                    <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicRegular" }}>
                        Delivery Order
                    </Text>
                    <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicRegular" }}>
                        03/10/2021 - 02:30 PM
                    </Text>
                </HStack>

                <View style={{ borderWidth: 0.5 }}></View>

                <HStack alignItems="center" justifyContent="space-between" my="2">
                    <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicRegular" }}>
                        Order No. : 212334
                    </Text>
                    <Text style={{ color: "#00A27F", fontSize: 16, fontFamily: "arabicRegular" }}>
                        + 05.80 JOD
                    </Text>
                </HStack>
                <View style={{ borderWidth: 0.5 }}></View>

                <HStack alignItems="center" justifyContent="space-between" mb="2">
                    <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicRegular" }}>
                        Store Name
                    </Text>
                </HStack>
            </View>

            <LinearGradient
                start={{ x: -1, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ ...styles.linear, width: 120, alignItems: "center", alignSelf: 'center' }} x
                colors={['#868F96', '#596164']}>
                <Text style={{ color: "#fff" }}>03 /11/ 2020</Text>
            </LinearGradient>

            <View style={{ ...styles.card }}>
                <HStack alignItems="center" justifyContent="space-between" my="2">
                    <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicRegular" }}>
                        Compensation
                    </Text>
                    <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicRegular" }}>
                        03/10/2021 - 02:30 PM
                    </Text>
                </HStack>

                <View style={{ borderWidth: 0.5 }}></View>

                <HStack alignItems="center" justifyContent="space-between" my="2">
                    <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicRegular" }}>
                        Order No. : 212334
                    </Text>
                    <Text style={{ color: "#C40000", fontSize: 16, fontFamily: "arabicRegular" }}>
                        - 05.80 JOD
                    </Text>
                </HStack>
                <View style={{ borderWidth: 0.5 }}></View>

                <HStack alignItems="center" justifyContent="space-between" mb="2">
                    <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicRegular" }}>
                        Store Name
                    </Text>
                </HStack>
            </View>

        </View >
    )
}
const styles = StyleSheet.create({

    linear: {
        justifyContent: "center",
        margin: 20,
        borderRadius: 20
    },
    card: {
        borderRadius: 20,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        margin: 20,
        marginVertical: 10,
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