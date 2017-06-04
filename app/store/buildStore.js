import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'

import reducer from '../reducers/reducer'

export default initialState => {
  const logger = createLogger()

  let store = createStore(
    reducer,
    initialState,
    applyMiddleware(promise(), logger)
  )

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/reducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

/*const development = true//process.env.NODE_ENV === 'development' && process.env.PLATFORM_ENV === 'web'
if (development) module.exports = require('./buildStore.dev')
else module.exports = require('./buildStore.prod')*/
