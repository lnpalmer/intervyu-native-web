import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import StyleConstants from '../../constants/StyleConstants'

class IVText extends Component {

  render() {

    return (
      <Text style={{
        ...this.props.style || {},
        fontSize: this.props.fontSize || 18,
        color: StyleConstants.mainColor,
        fontFamily: StyleConstants.fontFamily,
        fontWeight: '500',
        textAlign: 'center'
      }}> {this.props.value} </Text>
    )

  }

}

export default IVText
