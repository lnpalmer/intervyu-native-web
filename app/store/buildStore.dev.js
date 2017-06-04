import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'

import reducer from '../reducers/reducer'

function buildStore() {

  const middleware = applyMiddleware(createLogger(), promise())

  const store = createStore(reducer, middleware)

  if (module.hot) {
    /*if (process.env.PLATFORM_ENV === 'web') {
      module.hot.accept('../reducers/reducer', () => { store.replaceReducer(reducer) })
    } else {
      module.hot.accept(() => {
        const nextReducer = require('../reducers/reducer').default
        store.replaceReducer(nextReducer)
      })
    }*/
    module.hot.accept(() => {
      const nextReducer = require('../reducers/reducer').default
      store.replaceReducer(nextReducer)
    })
  }

  return store

}

export default buildStore
