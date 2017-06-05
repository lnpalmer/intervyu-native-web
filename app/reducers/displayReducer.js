import { Platform } from 'react-native'
import StatusBarSizeIOS from 'react-native-status-bar-size'

initialState = {
  statusBarHeight: 20,
  view: 'mainMenu'
}

function displayReducer(state = initialState, action) {

  if (action.type === 'SET_VIEW') {
    state = {...state, view: action.payload}
  }

  if (action.type === 'SET_STATUS_BAR_HEIGHT') {
    state = {...state, statusBarHeight: action.payload}
  }

  return state

}

export default displayReducer
