import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import StyleConstants from '../../constants/StyleConstants'

class IVButton extends Component {

  render() {

    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
        <View style={{
          backgroundColor:
            this.props.inverted ?
            StyleConstants.altColor :
            StyleConstants.mainColor,
          margin: this.props.small ? 5 : 10,
          alignItems: 'center',
          height: this.props.small ? 28 : 40,
        }}>
          <Text style={{
            color:
              this.props.inverted ?
              StyleConstants.mainColor :
              StyleConstants.altColor,
            fontSize: this.props.small ? 18 : 28,
            fontWeight: '600',
            textAlign: 'center',
            fontFamily: StyleConstants.fontFamily
          }}>
            {this.props.value}
          </Text>
        </View>
      </TouchableOpacity>
    )

  }

}

export default IVButton
