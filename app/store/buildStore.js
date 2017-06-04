import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'

import reducer from '../reducers/reducer'

function buildStore() {

  let middleware = applyMiddleware(promise(), createLogger())

  let store = createStore(reducer, middleware)

  if (module.hot) {
    module.hot.accept(() => {
      const nextReducer = require('../reducers/reducer').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default buildStore

/*const development = true//process.env.NODE_ENV === 'development' && process.env.PLATFORM_ENV === 'web'
if (development) module.exports = require('./buildStore.dev')
else module.exports = require('./buildStore.prod')*/
