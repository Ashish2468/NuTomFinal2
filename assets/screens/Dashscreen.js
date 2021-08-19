import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ScrollViewExample from '../component/ScrollViewExample';


export default function Dashscreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio ipsam ipsum pariatur sed. Beatae quaerat necessitatibus quia enim. Enim.</Text>
      <View>
        <Text>Masterclass</Text>
        <Text>Masterclass</Text>
        
          <ScrollViewExample />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
