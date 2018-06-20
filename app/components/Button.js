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
    <Text style={[
      styles.text,
      (type==='utility') && styles.blackText,
      (type==='operator') && styles.operatorText,
    ]}>
      {children}
    </Text>
  </TouchableHighlight>
)


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    paddingHorizontal: 16,
    borderRadius: 100,
    height: width/4.5,
    width: width/4.5,
    margin: width/100,
  },
  buttonLarge:{
    width: ((width/4.5)*2)+width/50,
    alignItems: 'flex-start',
    paddingLeft: 24,
  },
  text:{
    fontSize: width/10,
    color: 'white',
    fontWeight: '400',
    lineHeight: width/4.5,
  },
  blackText:{
    color: 'black'
  },
  operatorText:{
    fontSize: width/9,
    lineHeight: width/5,
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
