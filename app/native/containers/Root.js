import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Root extends Component {

  constructor() {
    super()
    this.state = {
      number: 0
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.setState({number: this.state.number + 1})}>
        <View>
          <Text> number: {this.state.number} </Text>
        </View>
      </TouchableOpacity>
    )
  }

}

export default Root
