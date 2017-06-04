import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'

import reducer from '../reducers/reducer'

function buildStore() {

  const middleware = applyMiddleware(promise())

  return createStore(reducer, middleware)

}

export default buildStore
