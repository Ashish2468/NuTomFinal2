/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { StyleSheet, Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as firebase from 'firebase';
import { firebaseConfig } from '../config';
import Home from '../component/Home';
// import { LinearGradient } from "react-native-linear-gradient";
import LinearGradient from 'react-native-linear-gradient';
import { NativeBaseProvider } from 'native-base';

// firebase.initialize(firebaseConfig);
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function HomeScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF4E6", padding: 20 }}>

        <View >
          {/* <Image
          style={styles.stretch}
          source={require('../assets/icon.png')}
        /> */}
          <ScrollView style={{ paddingBottom: 60 }}>
            <Home />
            <Image
              style={styles.logo}
              source={{
                uri: 'https://nutom.in/wp-content/uploads/2021/05/Copy-of-Final-nutom-logo-03-1536x561.png'
              }}
            />
            <View style={{ marginLeft: '4.5%', }}>
              <Text style={styles.olympiad}>OLYMPIAD 2.0</Text>
              <Text style={{ marginHorizontal: '4.5%', marginVertical: '4%' }}>"Lorem ipsum dolor sit Lorem  amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"</Text>
            </View>
            <View style={{ alignItems: 'center', }}>
              <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Components')}>
                {/* // onPress={() => navigation.navigate('Dashscreen')}> */}
                {/* <LinearGradient
              colors={["#FF512F", "#F09819", "#FF512F"]}
              start={[1, 1]}
              style={styles.buttonContainer}> */}
                <Text style={styles.Text}>Register Now!</Text>
                {/* </LinearGradient> */}
              </TouchableOpacity>
              <Button  onPress={() => navigation.navigate('Dashscreen')}><Text>hiDashscreen </Text></Button>
            </View>

            {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Sign in with Facebook
          </Text>
        </LinearGradient> */}

            {/* <Button
          onPress={() => navigation.navigate('Logins')}
        // onPress={() => this.saveitem()}
        >Button Logins</Button>
        <Button
          onPress={() => navigation.navigate('Fromscreen')}
        // onPress={() => this.saveitem()}
        >Button mybackbutton</Button> */}
          </ScrollView>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({

  logo: {
    width: 156,
    height: 54,
    marginLeft: '4.5%',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  stretch: {
    width: '100%',
    height: '50%',
    resizeMode: 'stretch',
  },
  olympiad: {
    fontSize: 40,
    fontWeight: "bold",
  },
  button: {
    // width: 156,
    // height: 54,
    marginTop: '12%',
    // backgroundColor: "#ccc",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ede34f",
    borderRadius: 10,
  },
  Text: {
    // fontFamily:sans,
    fontSize: 23,
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: "17%",
    paddingVertical: "2.5%",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  buttonContainer: {
    padding: 5,
    alignItems: "center",
    borderRadius: 10,
  }
})



// import React from 'react'
// import { StyleSheet, Image, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
// import { LinearGradient } from "react-native-linear-gradient";


// export default function HomeScreen({ navigation }) {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF4E6", padding: 20 }}>
//       <View>
//         <Image
//           style={styles.stretch}
//           source={require('../assets/icon.png')}
//         />
//         <Image
//           style={styles.logo}
//           source={{
//             uri: 'https://nutom.in/wp-content/uploads/2021/05/Copy-of-Final-nutom-logo-03-1536x561.png'
//           }}
//         />
//         <View style={{ marginLeft: '4.5%', }}>
//           <Text style={styles.olympiad}>OLYMPIAD 2.0</Text>
//           <Text style={{ marginHorizontal: '4.5%', marginVertical: '4%' }}>"Lorem ipsum dolor sit Lorem  amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"</Text>
//         </View>
//         <View style={{ alignItems: 'center', }}>
//           <TouchableOpacity style={styles.button}
//             onPress={() => navigation.navigate('Fromscreen')}>
//             <LinearGradient
//             colors={["#FF512F", "#F09819", "#FF512F"]}
//             start={[1, 1]}
//             style={styles.buttonContainer}>
//               <Text style={styles.Text}>Register Now!</Text>
//             </LinearGradient>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({

//   logo: {
//     width: 156,
//     height: 54,
//     marginLeft: '4.5%',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   stretch: {
//     width: '100%',
//     height: '50%',
//     resizeMode: 'stretch',
//   },
//   olympiad: {
//     fontSize: 40,
//     fontWeight: "bold",
//   },
//   button: {
//     // width: 156,
//     // height: 54,
//     marginTop: '12%',
//     // backgroundColor: "#ccc",
//     alignItems: 'center',
//     justifyContent: 'center',
//     // borderRadius: 10,
//   },
//   Text: {
//     // fontFamily:sans,
//     fontSize: 23,
//     color: "#fff",
//     fontWeight: "bold",
//     paddingHorizontal: "17%",
//     paddingVertical: "2.5%",
//   },
//   buttonContainer: {
//     padding: 5,
//     alignItems: "center",
//     borderRadius: 10,
//   }
// })
