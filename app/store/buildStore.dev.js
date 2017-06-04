import { createStore } from 'redux'

import reducer from '../reducers/reducer'

function buildStore() {

  if (module.hot) {
    module.hot.accept(() => {
      const nextReducer = require('../reducers/reducer').default
      store.replaceReducer(nextReducer)
    })
  }

  const store = createStore(reducer)

  return store

}

export default buildStore

/*if (process.env.PLATFORM_ENV === 'web') {
  module.hot.accept('../reducers/reducer', () => { store.replaceReducer(reducer) })
} else {
  module.hot.accept(() => {
    const nextReducer = require('../reducers/reducer').default
    store.replaceReducer(nextReducer)
  })
}*/
