// import React from 'react'
// import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
// import { Container, Header, Content, Item, Input, Form, Label, NativeBaseProvider } from 'native-base';
// import { TextInput } from 'react-native-paper';


// export default function Detailsscreen({ navigation }) {
//   return (
//     <View>
//       <View style={{ padding: 9, backgroundColor: "#ffe5d9", height: "100%", }}>
//         <View style={{ flexDirection: 'row' }}>
//           <TouchableOpacity style={{ marginLeft: 10 }}
//             onPress={() => navigation.navigate('Formscreen')}>
//             <Text style={{ fontSize: 40, fontWeight: "bold", marginTop: "2%", color: "black" }}>{'<'}</Text>
//           </TouchableOpacity>
//           <View style={{ justifyContent: 'center',alignItems:'space-around' }}>
//           <View style={{ width:"100%" }}>
//               <Text style={{}}> Details
//               </Text>
//             </View>
//           </View>
//         </View>
//         <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aliquid repellat itaque mollitia consectetur magnam laboriosam deleniti, doloremque accusamus dicta.</Text>

//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})
/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react'
import { Text, StyleSheet, ScrollView, Image, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import Details from '../Component/Details';
import SCarousel from '../Component/SCarousel';

// import { Ionicons } from 'react-native-vector-icons';
// import { ScrollView } from 'react-native-gesture-handler';

export default function Detailsscreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffe8d6" }}>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false} style={{}}>
          <View style={{ flexDirection: 'row', marginLeft: "1%", paddingHorizontal: 20 }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Formscreen')} >
                {/* <Ionicons name="md-chevron-back" size={44} color="black" /> */}
                {/* <Ionicons name="md-chevron-back" size={44} color="black" /> */}
                <Text style={{ fontSize: 40, fontWeight: "bold", marginTop: "2%", color: "black" }}>{'<'}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignSelf: 'center', justifyContent: 'space-between', flex: 2,marginLeft:20 }}>
              <Text style={{ fontSize: 32,fontWeight:'bold' }}>Details  </Text>
            </View>
          </View>
          
          <View style={{ paddingHorizontal: 6 }}>
            <Details />

          </View>
          
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
