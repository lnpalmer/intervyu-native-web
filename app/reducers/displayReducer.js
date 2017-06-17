const initialState = {
  statusBarHeight: 20,
  view: 'mainMenu',
  settingsExpanded: false,
  deletingAccount: false
}

function displayReducer(state = initialState, action) {

  if (action.type === 'SET_VIEW') {
    state = {...state, view: action.payload}
  }

  if (action.type === 'SET_STATUS_BAR_HEIGHT') {
    state = {...state, statusBarHeight: action.payload}
  }

  if (action.type === 'SET_SETTINGS_EXPANDED') {
    state = {...state, settingsExpanded: action.payload, deletingAccount: state.deletingAccount && action.payload}
  }

  if (action.type === 'SET_DELETING_ACCOUNT') {
    state = {...state, deletingAccount: action.payload}
  }

  if (action.type === 'CREATE_USER_FULFILLED') {
    state = {
      ...state,
      view: 'jobs'
    }
  }

  if (action.type === 'CREATE_USER_REJECTED') {
    state = {
      ...state,
      view: 'mainMenu'
    }
  }

  if (action.type === 'LOG_IN_USER_FULFILLED') {
    state = {
      ...state,
      view: 'jobs'
    }
  }

  if (
    action.type === 'LOG_OUT_USER_FULFILLED' ||
    action.type === 'DELETE_USER_FULFILLED'
  ) {
    state = {
      ...state,
      view: 'mainMenu',
      settingsExpanded: false,
      deletingAccount: false
    }
  }

  if (action.type === 'UPLOAD_JOB_FULFILLED') {
    state = {
      ...state,
      view: 'jobs'
    }
  }

  return state

}

export default displayReducer
