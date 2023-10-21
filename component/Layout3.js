import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Layout3 = () => {
    const rou = useRoute()
    return (
        <View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: 359, height: 388, backgroundColor: 'rgba(233, 65, 65, 0.1)' }}>
                    <Image style={{ width: 297, height: 340, resizeMode: 'contain' }} source={rou.params?.img} />
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 35, fontWeight: '400' }}>{rou.params?.name}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 25, fontWeight: '400', opacity: 0.7 }}>15% OFF I 350$</Text>
                <Text style={{ marginLeft: 10, fontSize: 25, fontWeight: '400', textDecorationLine: 'line-through' }}>449$</Text>
            </View>
            <View>
                <Text style={{ fontSize: 25, fontWeight: '400' }}>Description</Text>
            </View>
            <View>
                <Text style={{ fontSize: 25, fontWeight: '400', opacity: 0.7 }}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <MaterialCommunityIcons name="heart-outline" size={35} color="black" />
                <View style={{ width: 269, height: 54, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                    <Text style={{ fontSize: 25, fontWeight: '400', color: 'white' }}>Add to card</Text>
                    <Text style={{ fontSize: 25, fontWeight: '400', color: 'white' }}>Add to card</Text>
                </View>
            </View>
        </View>
    )
}

export default Layout3

const styles = StyleSheet.create({})