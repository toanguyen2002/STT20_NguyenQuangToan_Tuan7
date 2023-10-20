import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Layout2 = () => {
  const nav = useNavigation()
  const [title, setTitle] = useState('All');
  const [data, setData] = useState([
    {
      name: 'Pinarello',
      price: '1800',
      img: require('../assets/bifour_-removebg-preview.png')
    },
    {
      name: 'Pina Mountain',
      price: '1700',
      img: require('../assets/bifour_-removebg-preview.png')
    },
    {
      name: 'Pinarello',
      price: '1800',
      img: require('../assets/bifour_-removebg-preview.png')
    },
    {
      name: 'Pinarello',
      price: '1800',
      img: require('../assets/bifour_-removebg-preview.png')
    },
    {
      name: 'Pinarello',
      price: '1800',
      img: require('../assets/bifour_-removebg-preview.png')
    },
    {
      name: 'Pinarello',
      price: '1800',
      img: require('../assets/bifour_-removebg-preview.png')
    },
  ])
  useEffect(() => {
    var dataClone = [
      {
        name: 'Pinarello',
        price: '1800',
        img: require('../assets/bifour_-removebg-preview.png')
      },
      {
        name: 'Pina Mountain',
        price: '1700',
        img: require('../assets/bifour_-removebg-preview.png')
      },
      {
        name: 'Pinarello',
        price: '1800',
        img: require('../assets/bifour_-removebg-preview.png')
      },
      {
        name: 'Pinarello',
        price: '1800',
        img: require('../assets/bifour_-removebg-preview.png')
      },
      {
        name: 'Pinarello',
        price: '1800',
        img: require('../assets/bifour_-removebg-preview.png')
      },
      {
        name: 'Pinarello',
        price: '1800',
        img: require('../assets/bifour_-removebg-preview.png')
      },
    ]
    if (title === 'Roadbike') {
      setData([...dataClone.filter((item) => item.name === 'Pinarello')])
      console.log(data);
    }
    if (title === 'Mountain') {
      setData([...dataClone.filter((item) => item.name === 'Pina Mountain')])
      console.log(data);
    }
    if (title === 'All') {
      setData([...dataClone])
      console.log(data);
    }


    // var dataNew
    // if (title === 'Roadbike') {
    //   dataNew = data.filter((item) => item.name === 'Pinarello')
    //   console.log(dataNew);
    // } else if (title === 'Mountai') {
    //   dataNew = data.filter((item) => item.name === 'Pina Mountain')
    //   console.log(dataNew);

    // } else {
    // setData([...data])
    // }
    // setData([...dataNew])
  }, [title])
  return (
    <View>
      <Text style={{ color: 'red', fontSize: 25, fontWeight: 700 }}>The world’s Best Bike</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
        <Pressable onPress={() => setTitle('All')} style={{ width: 99, height: 32, alignItems: 'center', justifyContent: 'center', borderColor: 'red', borderWidth: 0.1, borderRadius: 10, opacity: title === 'All' ? 1 : 0.5 }}>
          <Text>All</Text>
        </Pressable>
        <Pressable onPress={() => setTitle('Roadbike')} style={{ width: 99, height: 32, alignItems: 'center', justifyContent: 'center', borderColor: 'red', borderWidth: 0.1, borderRadius: 10, opacity: title === 'Roadbike' ? 1 : 0.5 }}>
          <Text>Roadbike</Text>
        </Pressable>
        <Pressable onPress={() => setTitle('Mountain')} style={{ width: 99, height: 32, alignItems: 'center', justifyContent: 'center', borderColor: 'red', borderWidth: 0.1, borderRadius: 10, opacity: title === 'Mountain' ? 1 : 0.5 }}>
          <Text>Mountain</Text>
        </Pressable>
      </View>
      <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        {data.map((item, index) => (
          <Pressable key={index} onPress={() => nav.navigate('layout3',
            { img: item.img, name: item.name, price: item.price }
          )}>
            <View key={index} style={{ marginTop: 5, marginLeft: 5, width: 167, height: 200, backgroundColor: 'rgba(247, 186, 131, 0.15)', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <Image style={{ width: 108, height: 124, resizeMode: 'contain' }} source={item.img} />
              <Text>{item.name}</Text>
              <Text><Text style={{ color: 'orange' }}>$</Text> {item.price}</Text>
              <MaterialCommunityIcons name="heart-outline" size={24} color="black" style={{ position: 'absolute', top: 0, left: 0 }} />
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

export default Layout2

const styles = StyleSheet.create({})