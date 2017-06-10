import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import IVText from './IVText'
import StyleConstants from '../../constants/StyleConstants'

class IVNumericInput extends Component {

  render() {

    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
      }}>

        <TouchableOpacity onPress={() => this.onValue(this.props.value - this.props.increment)}>
          <Icon
            name="minus"
            size={30}
            color={StyleConstants.mainColor}
          />
        </TouchableOpacity>

        <IVText
          value={this.props.value.toString()}
          fontSize={26}
          style={{
            marginRight: 10,
            marginLeft: 10,
          }}
        />

        <TouchableOpacity onPress={() => this.onValue(this.props.value + this.props.increment)}>
          <Icon
            name="plus"
            size={30}
            color={StyleConstants.mainColor}
          />
        </TouchableOpacity>

      </View>
    )

  }

  onValue(value) {

    this.props.onValue(Math.min(Math.max(
      value,
    this.props.min), this.props.max))

  }

}

export default IVNumericInput
