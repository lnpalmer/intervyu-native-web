import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import buildStore from './app/store/buildStore'
import Root from './app/native/containers/Root'

export const store = buildStore()

import * as firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyDGJNJLII5GEWcJwgAbiknkC2BGIt9bLyg",
  authDomain: "intervyu-795b6.firebaseapp.com",
  databaseURL: "https://intervyu-795b6.firebaseio.com",
  projectId: "intervyu-795b6",
  storageBucket: "intervyu-795b6.appspot.com",
  messagingSenderId: "327906749209"
}
firebase.initializeApp(firebaseConfig)

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
