import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import Root from './app/native/containers/Root'

class IntervyuNativeWeb extends Component {

  render() {

    return <Root/>

  }

}

AppRegistry.registerComponent('IntervyuNativeWeb', () => IntervyuNativeWeb)
