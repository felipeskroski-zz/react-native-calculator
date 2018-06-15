import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './app/components/Button'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Button type='utility'>AC</Button>
          <Button type='utility'>+/-</Button>
          <Button type='utility'>%</Button>
          <Button type='operator'>÷</Button>
        </View>
        <View style={styles.row}>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button type='operator'>×</Button>
        </View>
        <View style={styles.row}>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button type='operator'>-</Button>
        </View>
        <View style={styles.row}>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button type='operator'>+</Button>
        </View>
        <View style={styles.row}>
          <Button>0</Button>
          <Button>.</Button>
          <Button type='operator'>=</Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  row:{
    flexDirection: 'row',
  }
})
