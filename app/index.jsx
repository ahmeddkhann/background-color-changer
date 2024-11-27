import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';

const Index = () => {

const [NewbackgroundColor, setNewBackgroundColor] = useState("#ffffff");

const backgroundColorChanger = () => {
  const hexRange = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexRange[Math.floor(Math.random() * 16)]
    
  }
  setNewBackgroundColor(color);
}
  
  return (
    <>
   <StatusBar backgroundColor={NewbackgroundColor}/>
   <View style= {[{backgroundColor: setNewBackgroundColor}]}>
    <TouchableOpacity onPress={backgroundColorChanger}>
      <View>
        <Text>
          Press me
        </Text>
      </View>
    </TouchableOpacity>
   </View>
    </>
  )
}

export default Index

const styles = StyleSheet.create({})