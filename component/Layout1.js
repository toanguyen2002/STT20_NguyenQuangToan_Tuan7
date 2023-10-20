import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Layout1 = () => {
  const nav = useNavigation()
  // const 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ width: 351, height: 87, textAlign: 'center', fontWeight: '400', fontSize: 26 }}>A premium online store for sporter and their stylish choice</Text>
      <View style={{ width: 359, height: 388, backgroundColor: 'rgba(233, 65, 65, 0.1)', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: 292, height: 272 }} source={require('../assets/bifour_-removebg-preview.png')} />
      </View>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>POWER BIKE </Text>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>SHOP </Text>
      <Pressable onPress={
        () => nav.navigate('layout2')
      }>
        <View style={{
          width: 340,
          height: 61,
          color: 'white',
          backgroundColor: 'red',
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',

        }}>
          <Text style={{ color: 'white', fontSize: 20, }}>Get Stated</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Layout1

const styles = StyleSheet.create({

})