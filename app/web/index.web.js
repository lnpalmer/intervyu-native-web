import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import FirebaseConstants from '../constants/FirebaseConstants'

import buildStore from '../store/buildStore'
import Root from './containers/Root'

export const store = buildStore()

import * as firebase from 'firebase'
firebase.initializeApp(FirebaseConstants.config)

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
