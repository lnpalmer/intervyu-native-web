import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { connect } from 'react-redux'

import StyleConstants from '../../constants/StyleConstants'

class IVTextInput extends Component {

  render() {

    return (
      <View style={{
        margin: 10,
      }}>
        <TextInput style={{
            color: StyleConstants.mainColor,
            height: 50,
            fontSize: 22,
            textAlign: 'center',
            fontFamily: StyleConstants.fontFamily,
            fontWeight: '500'
          }}
          value={this.props.value}
          onChangeText={value => this.props.onValue(value)}
          secureTextEntry={this.props.secureTextEntry}
          underlineColorAndroid={'#0000'}
        />
        <View style={{
          backgroundColor: StyleConstants.mainColor,
          height: 2
        }}/>

      </View>
    )

  }

}

export default IVTextInput
