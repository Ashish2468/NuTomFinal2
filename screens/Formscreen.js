import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Container, Header, Content, Item, Input, Form, Label, NativeBaseProvider } from 'native-base';
import { TextInput } from 'react-native-paper';

export default function Formscreen({ navigation }) {
  const [text, setText] = React.useState('');

  return (
    <NativeBaseProvider>
      <View>
        <ImageBackground source={require('../assets/FromBG.jpg')} style={{ width: '100%', height: '100%', }}>
          <View style={{ padding: 20 }}>
            <KeyboardAvoidingView>
              <TouchableOpacity style={{}}
                onPress={() => navigation.navigate('Home')}>
                <Text style={{ fontSize: 40, fontWeight: "bold", marginVertical: "2%", color: "white" }}>{'<'}</Text>
              </TouchableOpacity>
              <View>
                <Text style={{ fontSize: 42, color: "#fff" }}>Regsiter</Text>
              </View>
              <Text>Inside</Text>
              <View>
                {/* <Item floatingLabel>  */}
                <Input style={{ height: 50, marginVertical: 10 }} placeholder="Underline Textbox" />

                <TextInput
                  label="Email"
                  value={text}
                  onChangeText={text => setText(text)}
                  style={{ height: 50, marginVertical: 10 }}
                  underline="#ddd"
                  underlineColor="black"
                  dense="false"
                />
              </View>
            </KeyboardAvoidingView>
            <TouchableOpacity style={{}}
              onPress={() => navigation.replace('Detailsscreen')}>
              <Text style={{ fontSize: 40, fontWeight: "bold", marginVertical: "2%", color: "white" }}>{'>'}</Text>
            </TouchableOpacity>
          </View>

        </ImageBackground>
      </View>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({})
