import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import StyleConstants from '../../constants/StyleConstants'

const viewStyle = {
  backgroundColor: StyleConstants.mainColor,
  margin: 10,
  alignItems: 'center'
}

const textStyle = {
  color: StyleConstants.altColor,
  fontFamily: 'avenir',
  fontSize: 28,
  fontWeight: '600',
  textAlign: 'center'
}

class IVButton extends Component {

  render() {

    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
        <View style={viewStyle}>
          <Text style={textStyle}>
            {this.props.value}
          </Text>
        </View>
      </TouchableOpacity>
    )

  }

}

export default IVButton
