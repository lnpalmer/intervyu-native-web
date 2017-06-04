import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'

import UserActions from '../../actions/UserActions'

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
          <Text> number: {this.props.number} </Text>
        </View>
      </TouchableOpacity>
    )

  }

}

export default Root
