const DEVELOPMENT = process.env.NODE_ENV === 'development'
const WEB = process.env.PLATFORM_ENV === 'web'

import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
const createLogger = DEVELOPMENT ? require('redux-logger').createLogger : undefined

import reducer from '../reducers/reducer'

function buildStore() {

  let middleware
  if (DEVELOPMENT && WEB) middleware = applyMiddleware(createLogger(), promise())
  else middleware = applyMiddleware(promise())

  let store = createStore(reducer, middleware)

  if (module.hot) {
    if (WEB) {
      console.log('11')
      module.hot.accept('../reducers/reducer', () => {
        store.replaceReducer(reducer)
      })
    } else {
      module.hot.accept(() => {
        const nextReducer = require('../reducers/reducer').default
        store.replaceReducer(nextReducer)
      })
    }
  }

  return store
}

export default buildStore
