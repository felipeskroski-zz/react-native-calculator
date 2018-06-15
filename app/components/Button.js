import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'

const Button = ({ children, type="number" }) => (
  <TouchableHighlight style={[styles.button, styles[type]]}>
   <Text style={[styles.text, (type==='utility') && styles.blackText]}>{children}</Text>
  </TouchableHighlight>
)


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 20,
    borderRadius: 100,
    height: 80,
    width: 80,
  },
  text:{
    fontSize: 32,
    color: 'white'
  },
  blackText:{
    color: 'black'
  },
  number: {
    backgroundColor: 'dimgray',
  },
  operator: {
    backgroundColor: 'orange',
  },
  utility: {
    backgroundColor: 'lightgrey',
  },
})

export default Button
