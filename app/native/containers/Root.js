import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import IVHeader from './IVHeader'
import IVNavigation from './IVNavigation'

class Root extends Component {

  render() {

    return (
      <View style={{
        height: '100%'
      }}>
        <IVHeader/>
        <IVNavigation/>
      </View>
    )

  }

}

export default Root
