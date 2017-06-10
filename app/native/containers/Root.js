import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Provider } from 'react-redux'

import buildStore from '../../store/buildStore'
import IVHeader from './IVHeader'
import IVNavigation from './IVNavigation'

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
