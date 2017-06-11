const initialState = {
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

  if (action.type === 'CREATE_USER_FULFILLED') {
    state = {
      ...state,
      view: 'jobs'
    }
  }

  return state

}

export default displayReducer
