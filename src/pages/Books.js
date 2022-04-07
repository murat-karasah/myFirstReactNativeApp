import { View, Text,Button } from 'react-native'
import React from 'react'


export default function Books({navigation}) {
  return (
    <View>

      <Text>Books</Text>
      <Button title='goto Carts' onPress={()=>navigation.navigate("Cart")}/> 

    </View>
  )
}