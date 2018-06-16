import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Dimensions,
} from 'react-native'

var {height, width} = Dimensions.get('window')

const Button = ({ children, type="number", large, onPress}) => (
  <TouchableHighlight
    underlayColor='white'
    onPress={onPress}
    style={[styles.button, styles[type], large && styles.buttonLarge]}
    >
    <Text style={[styles.text, (type==='utility') && styles.blackText]}>
      {children}
    </Text>
  </TouchableHighlight>
)


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 16,
    borderRadius: 100,
    height: width/5,
    width: width/5,
    margin: width/50,
  },
  buttonLarge:{
    width: ((width/5)*2)+width/50,
    alignItems: 'flex-start',
    paddingLeft: 24,
  },
  text:{
    fontSize: 36,
    color: 'white'
  },
  blackText:{
    color: 'black'
  },
  number: {
    backgroundColor: '#333',
  },
  operator: {
    backgroundColor: 'orange',
  },
  utility: {
    backgroundColor: 'lightgrey',
  },
})

export default Button
