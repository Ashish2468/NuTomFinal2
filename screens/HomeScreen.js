import React from 'react'
import { StyleSheet, Text, Image, View, Button, ScrollView } from 'react-native'

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#ffe5d9", flex:1 }} showsVerticalScrollIndicator={false}>
      <View style={{ alignItems:'flex-end', width:"100%"}}>
        <Image source={require('../assets/Googlelx.png')}
          style={{  }} />
      </View>
      <View style={{ justifyContent: 'space-between', paddingHorizontal:25, paddingBottom:50 }}>
        {/* <View>
          <Image source={require('../assets/nutomlogo.png')}
            style={{ width: 150, height: 54, marginVertical: "3%" }}
          /></View> */}
        <View>
          <Text style={{ fontSize: 40, fontWeight: "bold", marginVertical: "2%" }}>OLYMPIAD 2.0</Text>
        </View>
        <Text style={{ marginVertical: "6%" }}> "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi odit aspernatur laborum quisquam. Expedita iste temporibus magnam corrupti ducimus"</Text>
        <Button
          title="Register Now"
          onPress={() => navigation.navigate('Formscreen')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({})
