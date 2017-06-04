import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Actions from '../../actions/Actions'

@connect(store => {
  return {
    number: store.number
  }
})
class Root extends Component {

  render() {

    return (
      <TouchableOpacity onPress={() => this.props.dispatch(Actions.increase(1))}>
        <View style={{padding: 30}}>
          <Text> {this.props.number} </Text>
        </View>
      </TouchableOpacity>
    )

  }

}

export default Root
