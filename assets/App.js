/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 import * as React from 'react';
 import { Button, View, Text } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import HomeScreen from './screens/HomeScreen';
 import Fromscreen from './screens/Fromscreen';
 import Components from './screens/Components';
 import Dashscreen from './screens/Dashscreen';
//  import Login from './screens/Login';
 import DetailsScreen from './screens/DetailsScreen';
 import AsyncStorage from '@react-native-community/async-storage';
 
 // function DetailsScreen({ navigation }) {
 //   return (
 //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
 //       <Text>Details Screen</Text>
 //       <Button
 //         title="Go to Details... again"
 //         onPress={() => navigation.push('Details')}
 //       />
 //     </View>
 //   );
 // }
 
 const Stack = createNativeStackNavigator();
 
 function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
         <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
         <Stack.Screen name="Components"  options={{ headerShown: false }}  component={Components} />
         <Stack.Screen name="Dashscreen"  options={{ headerShown: false }}  component={Dashscreen} />
         {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
         {/* <Stack.Screen name="Logins" component={Login} /> */}
         <Stack.Screen name="Fromscreen" component={Fromscreen} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
 
 export default App;
 






// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
