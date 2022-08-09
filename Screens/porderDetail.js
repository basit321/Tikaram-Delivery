import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { HStack, ScrollView } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Location, Man, Map, Phone, YellowStarSM, YellowStart } from '../Components/Images'
import { LinearGradient } from 'expo-linear-gradient'

const height = Dimensions.get('window').height;

export default function PreviousOrderDetail() {
    const navigation = useNavigation()
    return (
        <View>
            <ScrollView>
                <View>
                    <LinearGradient
                        style={{ ...styles.linear }}
                        colors={['#37B3A9', '#E8E6A5']}
                    >
                        <HStack my="2" p="4" justifyContent="space-between">
                            <View style={{ height: 60, width: 60, backgroundColor: "#fff", borderRadius: 30, alignItems: "center", justifyContent: 'center' }}>
                                <Man />

                            </View>
                            <View>
                                <Text style={{ color: "#fff", fontSize: 16, fontFamily: "arabicBold" }}>
                                    User Name
                                </Text>
                                <HStack>
                                    <YellowStarSM /><YellowStarSM /><YellowStarSM /><YellowStarSM /><YellowStarSM />
                                </HStack>
                            </View>
                            <View style={{ width: 100, borderWidth: 1, borderRadius: 20, borderColor: "#fff", alignSelf: "flex-end" }}>
                                <HStack justifyContent="center" alignItems="center">
                                    <Phone />
                                    <Text style={{ fontSize: 16, fontFamily: "arabicBold", color: "#fff" }}> Call</Text>
                                </HStack>
                            </View>
                        </HStack>
                    </LinearGradient>

                </View>

                <View style={{ ...styles.card }}>
                    <HStack alignItems="center" justifyContent="space-between">
                        <View>
                            <Location />
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontFamily: "arabicRegular", color: "#374151" }}>
                                Store Location
                            </Text>
                            <Text style={{ fontSize: 14, fontFamily: "arabicRegular", color: "#9E9E9E" }}>
                                Khalda-Amman-jorden
                            </Text>
                        </View>
                        <LinearGradient
                            style={{ ...styles.linear, paddingHorizontal: 20, paddingVertical: 5 }}
                            colors={['#37B3A9', '#E8E6A5']}>
                            <HStack alignItems="center" justifyContent="space-between">
                                <Map />
                                <Text style={{ fontSize: 16, fontFamily: "arabicRegular", color: "#fff" }}>
                                    Map
                                </Text>
                            </HStack>
                        </LinearGradient>
                    </HStack>

                    <View style={{ borderWidth: 0.5 }}></View>

                    <HStack alignItems="center" justifyContent="space-between">
                        <View>
                            <Location />
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontFamily: "arabicRegular", color: "#374151" }}>
                                Store Location
                            </Text>
                            <Text style={{ fontSize: 14, fontFamily: "arabicRegular", color: "#9E9E9E" }}>
                                Khalda-Amman-jorden
                            </Text>
                        </View>
                        <LinearGradient
                            style={{ ...styles.linear, paddingHorizontal: 20, paddingVertical: 5 }}
                            colors={['#37B3A9', '#E8E6A5']}>
                            <HStack alignItems="center" justifyContent="space-between">
                                <Map />
                                <Text style={{ fontSize: 16, fontFamily: "arabicRegular", color: "#fff" }}>
                                    Map
                                </Text>
                            </HStack>
                        </LinearGradient>
                    </HStack>
                </View>

                <View style={{ ...styles.card }}>
                    <HStack alignItems="center" justifyContent="space-between">
                        <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicBold" }}>
                            Food Name
                        </Text>
                        <Text style={{ color: "#00A27F", fontSize: 14, fontFamily: "arabicBold" }}>
                            2.30 JD
                        </Text>
                    </HStack>
                    <HStack alignItems="center" justifyContent="space-between">
                        <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicBold" }}>
                            Food Name
                        </Text>
                        <Text style={{ color: "#00A27F", fontSize: 14, fontFamily: "arabicBold" }}>
                            2.30 JD
                        </Text>
                    </HStack>
                    <HStack alignItems="center" justifyContent="space-between">
                        <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicBold" }}>
                            Food Name
                        </Text>
                        <Text style={{ color: "#00A27F", fontSize: 14, fontFamily: "arabicBold" }}>
                            2.30 JD
                        </Text>
                    </HStack>
                    <HStack alignItems="center" justifyContent="space-between">
                        <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicBold" }}>
                            Food Name
                        </Text>
                        <Text style={{ color: "#00A27F", fontSize: 14, fontFamily: "arabicBold" }}>
                            2.30 JD
                        </Text>
                    </HStack>
                    <View style={{ borderWidth: 0.5 }}></View>
                    <HStack alignItems="center" justifyContent="space-between">
                        <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicBold" }}>
                            Total
                        </Text>
                        <Text style={{ color: "#00A27F", fontSize: 14, fontFamily: "arabicBold" }}>
                            9.20 JD
                        </Text>
                    </HStack>
                </View>

                <View style={{ ...styles.card }}>
                    <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicBold" }}>
                        Other notes
                    </Text>
                    <Text style={{ color: "#374151", fontSize: 16, fontFamily: "arabicBold" }}>
                        Note text …
                    </Text>

                </View>

            </ScrollView>
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
        marginVertical: 10
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