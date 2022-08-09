import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { HStack, ScrollView } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { ColdDrink, Location, Man, Map, Phone, RST1, SuperMarket, YellowStarSM, YellowStart } from '../Components/Images'
import { LinearGradient } from 'expo-linear-gradient'

const height = Dimensions.get('window').height;

export default function PreviousOrder() {
    const navigation = useNavigation()
    return (
        <View>
            <ScrollView>

                <TouchableOpacity onPress={() => navigation.navigate("porderDetail")} style={{ ...styles.card }}>
                    <HStack alignItems="center"><SuperMarket />
                        <Text style={{
                            fontSize: 16, fontFamily: "arabicRegular"
                        }}> Supermarket
                        </Text>
                    </HStack>
                    <HStack justifyContent={"space-between"}>
                        < View >
                            <Text style={{
                                fontSize: 16, fontFamily: "arabicRegular"
                            }}>
                                Order Date
                            </Text>
                            <Text style={{
                                fontSize: 16, fontFamily: "arabicRegular", color: "#9E9E9E"
                            }}>19 -10- 2020- 02:00AM</Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 16, fontFamily: "arabicRegular"
                            }}>
                                Order Number
                            </Text>
                            <Text style={{
                                fontSize: 16, fontFamily: "arabicRegular", color: "#9E9E9E"
                            }}>12739430493</Text>
                        </View>
                    </HStack>

                    <HStack justifyContent={"space-between"}>
                        <Text style={{
                            fontSize: 16, fontFamily: "arabicRegular", color: "#37B3A9"
                        }}>
                            Delivered
                        </Text>
                        <Text style={{
                            fontSize: 16, fontFamily: "arabicRegular", color: "#374151"
                        }}>Total : 120 JOD</Text>
                    </HStack>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("porderDetail")} style={{ ...styles.card }}>
                    <HStack alignItems="center"><ColdDrink />
                        <Text style={{
                            fontSize: 16, fontFamily: "arabicRegular"
                        }}>
                            Restaurants
                        </Text>
                    </HStack>
                    <HStack my="2">
                        <RST1 />
                        <Text style={{
                            fontSize: 16, fontFamily: "arabicRegular", marginStart: 5
                        }}>
                            Restaurant Name
                        </Text>
                    </HStack>
                    <HStack justifyContent={"space-between"}>
                        < View >
                            <Text style={{
                                fontSize: 16, fontFamily: "arabicRegular"
                            }}>
                                Order Date
                            </Text>
                            <Text style={{
                                fontSize: 16, fontFamily: "arabicRegular", color: "#9E9E9E"
                            }}>19 -10- 2020- 02:00AM</Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 16, fontFamily: "arabicRegular"
                            }}>
                                Order Number
                            </Text>
                            <Text style={{
                                fontSize: 16, fontFamily: "arabicRegular", color: "#9E9E9E"
                            }}>12739430493</Text>
                        </View>
                    </HStack>

                    <HStack justifyContent={"space-between"}>
                        <Text style={{
                            fontSize: 16, fontFamily: "arabicRegular", color: "#FF4C4C"
                        }}>
                            Cancelled
                        </Text>
                        <Text style={{
                            fontSize: 16, fontFamily: "arabicRegular", color: "#374151"
                        }}>Total : 120 JOD</Text>
                    </HStack>
                </TouchableOpacity>



            </ScrollView >
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