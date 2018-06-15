import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './app/components/Button'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button>1</Button>
        <Button type='operator'>+</Button>
        <Button type='utility'>AC</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
