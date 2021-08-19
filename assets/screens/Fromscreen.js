/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react'
import { Text, StyleSheet, ScrollView, Image, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
// import { TextInput } from 'react-native-paper';
import { TextInput, Button } from 'react-native-paper';
import { Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Form from '../old/component/Form';

export default function Fromscreen({ navigation }) {

  return (
    <SafeAreaView style={{ flex: 1, top: 0, left: 0, right: 0, bottom: 0, }}>
      <ImageBackground source={require('../assets/FromBG.jpg')} style={{ width: '100%', height: '100%' }}>
        <View>
          <View style={{ marginHorizontal: "10%", }}>
            <ScrollView style={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
              <Form />
              <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
                <Text style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "white",
                  marginVertical: 20,
                  paddingBottom: 30 
                }}>Details</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

        </View>
      </ImageBackground>

    </SafeAreaView>
  )
}
// }

const styles = StyleSheet.create({

  logo: {
    width: 156,
    height: 54,
    marginLeft: '4.5%',
    // flex:1
  },
  input: {
    marginVertical: 15,
    height: 50,
  },
  register: {
    marginTop: "7%",
    flexDirection: 'row',
    justifyContent: "space-between"

  },
})


