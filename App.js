import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Button from './app/components/Button'

var {height, width} = Dimensions.get('window')
export default class App extends React.Component {
  state = {
    result: 0,
    operator: null,
  }
  setNumber(result) {
    if(this.state.operator){
      let res = eval(this.state.result+this.state.operator+result)
      this.setState({result:res, operator:null})
    }else{
      this.setState({result})
    }
  }
  setOperator(operator){
    this.setState({operator})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.operator}>{this.state.operator}</Text>
        <Text style={styles.result}>{this.state.result}</Text>
        <View style={styles.row}>
          <Button type='utility'>AC</Button>
          <Button type='utility'>+/-</Button>
          <Button type='utility'>%</Button>
          <Button type='operator' onPress={() => this.setOperator('/')}>÷</Button>
        </View>
        <View style={styles.row}>
          <Button onPress={() => this.setNumber(7)}>7</Button>
          <Button onPress={() => this.setNumber(8)}>8</Button>
          <Button onPress={() => this.setNumber(9)}>9</Button>
          <Button type='operator' onPress={() => this.setOperator('*')}>×</Button>
        </View>
        <View style={styles.row}>
          <Button onPress={() => this.setNumber(4)}>4</Button>
          <Button onPress={() => this.setNumber(5)}>5</Button>
          <Button onPress={() => this.setNumber(6)}>6</Button>
          <Button type='operator' onPress={() => this.setOperator('-')}>-</Button>
        </View>
        <View style={styles.row}>
          <Button onPress={() => this.setNumber(1)}>1</Button>
          <Button onPress={() => this.setNumber(2)}>2</Button>
          <Button onPress={() => this.setNumber(3)}>3</Button>
          <Button type='operator' onPress={() => this.setOperator('+')}>+</Button>
        </View>
        <View style={styles.row}>
          <Button large>0</Button>
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
    paddingBottom: width/50,
  },
  row:{
    flexDirection: 'row',
  },
  result:{
    fontSize: 96,
    textAlign: 'right',
    color: 'white',
    margin: 20,
    fontWeight: '200',
    alignSelf: 'stretch',
  },
  operator:{
    color: 'white',
  }
})
