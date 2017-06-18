import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import FirebaseConstants from './app/constants/FirebaseConstants'

import buildStore from './app/store/buildStore'
import Root from './app/native/containers/Root'

export const store = buildStore()

import * as firebase from 'firebase'
firebase.initializeApp(FirebaseConstants.config)

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
