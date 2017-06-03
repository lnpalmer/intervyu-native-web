import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Root extends Component {

  constructor() {
    super()
    this.state = {
      number: 1
    }
  }

  render() {
    return (
      <View style={{padding: 30}}>
        <TouchableOpacity onPress={() => this.setState({number: this.state.number + 1})}>
          <Text> number: {this.state.number} </Text>
        </TouchableOpacity>
      </View>
    )
  }

}

export default Root
