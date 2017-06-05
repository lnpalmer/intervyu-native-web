import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Provider } from 'react-redux'

import buildStore from '../../store/buildStore'
import IVHeader from './IVHeader'
import IVNavigation from './IVNavigation'

export const store = buildStore()

class Root extends Component {

  render() {

    return (
      <Provider store={store}>
        <View>
          <IVHeader/>
          <IVNavigation/>
        </View>
      </Provider>
    )

  }

}

export default Root
