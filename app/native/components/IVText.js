import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import StyleConstants from '../../constants/StyleConstants'

class IVText extends Component {

  render() {

    return (
      <Text style={{
        fontSize: this.props.fontSize || 20,
        fontStyle: this.props.fontStyle || 'normal',
        color:
          this.props.inverted ?
          StyleConstants.altColor :
          StyleConstants.mainColor,
        fontFamily: StyleConstants.fontFamily,
        fontWeight: '500',
        textAlign: 'center',
        ...this.props.style || {}
      }}> {this.props.value} </Text>
    )

  }

}

export default IVText
