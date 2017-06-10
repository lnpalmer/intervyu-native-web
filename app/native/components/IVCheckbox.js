import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import IVText from './IVText'
import StyleConstants from '../../constants/StyleConstants'

class IVCheckbox extends Component {

  render() {

    return (
      <View style={{
        ...this.props.style || {},
        flex: 0,
        flexDirection: 'row',
        height: 28,
        marginRight: 4,
        marginTop: 6
      }}>

        <Text style={{
          fontSize: this.props.fontSize || 16,
          fontFamily: StyleConstants.fontFamily,
          color: StyleConstants.mainColor
        }}> {this.props.text} </Text>

        <TouchableOpacity onPress={() => this.props.onValue(!this.props.value)}>
          <Icon
            name={this.props.value ? "check-circle" : "circle"}
            size={22}
            color={StyleConstants.mainColor}
          />
        </TouchableOpacity>

      </View>
    )

  }

}

export default IVCheckbox
