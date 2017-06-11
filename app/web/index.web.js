import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import buildStore from '../store/buildStore'
import Root from './containers/Root'

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

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    render(Root)
  })
}
