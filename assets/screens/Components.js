import { NativeBaseProvider } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Home from '../component/Home'
import Counter from '../component/Counter'

export default function Components({ navigation }) {
  return (
    <NativeBaseProvider>
      <View>
        <Home />
        <Counter/>
      </View>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({})
