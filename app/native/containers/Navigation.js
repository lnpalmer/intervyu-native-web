import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'

@connect(store => {
  return {
    number: store.number
  }
})
class Navigator extends Component {

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.dispatch({type: 'INC', payload: 1})}>
        <View>
          <Text> number: {this.props.number} </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Navigator
