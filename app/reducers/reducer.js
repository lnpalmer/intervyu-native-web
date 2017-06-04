import { combineReducers } from 'redux'

import userReducer from './userReducer'
import jobsReducer from './jobsReducer'

const reducer = combineReducers({
  user: userReducer,
  jobs: jobsReducer
})

export default reducer
