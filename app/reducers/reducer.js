import { combineReducers } from 'redux'

import userReducer from './userReducer'
import jobsReducer from './jobsReducer'
import displayReducer from './displayReducer'

const reducer = combineReducers({
  user: userReducer,
  jobs: jobsReducer,
  display: displayReducer
})

export default reducer
