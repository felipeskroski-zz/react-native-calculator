import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'

const Button = ({ children }) => (
  <TouchableHighlight style={styles.button}>
   <Text style={styles.text}>{children}</Text>
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
  }
})

export default Button
