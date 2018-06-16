import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Button from './app/components/Button'

var {height, width} = Dimensions.get('window')
export default class App extends React.Component {
  state = {
    display: 0,
    result: 0,
    operator: null,
  }
  reset() {
    this.setState({
      display: 0,
      result: 0,
      operator: null,
    })
  }
  setNumber(display) {
    if(this.state.operator){
      this.setState({
        display:  display,
        result: eval(this.state.result+this.state.operator+display),
        operator:null
      })
    }else{
      let num
      if(this.state.display == 0){
        num = display
      }else{
        num = this.state.display+''+display
      }
      this.setState({
        display:num,
        result:num,
      })
    }
  }
  setOperator(operator){
    this.setState({operator})
    this.setResult()
  }
  setResult(){
    this.setState({display: this.state.result})
  }
  percentage(){
    this.setState({
      display: this.state.display/100,
      result: this.state.result/100,
    })
  }
  plusMinus(){
    this.setState({
      display: this.state.display*-1,
      result: this.state.result*-1,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.result}
          adjustsFontSizeToFit
          numberOfLines={1}
          minimumFontScale={0.5}>
            {this.state.display}
        </Text>
        <View style={styles.row}>
          <Button onPress={() => this.reset()} type='utility'>
            {this.state.display == 0 ? 'AC' : 'C'}
          </Button>
          <Button onPress={() => this.plusMinus()} type='utility'>+/-</Button>
          <Button onPress={() => this.percentage()} type='utility'>%</Button>
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
          <Button onPress={() => this.setNumber(0)} large>0</Button>
          <Button onPress={() => this.setNumber('.')}>.</Button>
          <Button onPress={() => this.setResult()} type='operator'>=</Button>
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
