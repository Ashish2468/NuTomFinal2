/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react'
import { Text, StyleSheet, ScrollView, Image, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
// import { ScrollView } from 'react-native-gesture-handler';

export default function DetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffe8d6", padding: 20 }}>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false} >
          <View style={{ flexDirection: 'row', marginTop: "8%", marginLeft: "1%" }}>
            <TouchableOpacity onPress={() => navigation.replace('Fromscreen')} >
              <Ionicons name="md-chevron-back" size={44} color="black" />
            </TouchableOpacity>
            <View style={{ alignSelf: 'center' }}>
              <Text style={{ fontSize: 25, }}>Details . </Text>
            </View>
          </View>
          <View style={{ height: 1500, width: "100%", backgroundColor: "white", borderRadius: 40, marginBottom: 100 }}>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
