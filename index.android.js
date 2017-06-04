import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import Root from './app/native/containers/Root'
import buildStore from './app/store/buildStore'

let store = buildStore()

class IntervyuNativeWeb extends Component {

  render() {

    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    )

  }

}

AppRegistry.registerComponent('IntervyuNativeWeb', () => IntervyuNativeWeb)
