const initialState = {
  status: 'offline',
  identity: {
    email: '',
    password: '',
    passwordRepeat: '',
    name: '',
    type: 'student'
  },
  config: {
    industries: [],
    experience: [],
    hasWorked: false,
    days: [],
    location: {
      longitude: -81.6944,
      latitude: 41.4993
    },
    hours: 4,
    distance: 5,
    transportation: false
  }
}

/*
  User reducer - handles user configuration
*/
function userReducer(state = initialState, action) {

  if (action.type === 'SET_USER_EMAIL') state = {
    ...state,
    identity: {...state.identity, email: action.payload}
  }

  if (action.type === 'SET_USER_PASSWORD') state = {
    ...state,
    identity: {...state.identity, password: action.payload}
  }

  if (action.type === 'SET_USER_PASSWORD_REPEAT') state = {
    ...state,
    identity: {...state.identity, passwordRepeat: action.payload}
  }

  if (action.type === 'SET_USER_NAME') state = {
    ...state,
    identity: {...state.identity, name: action.payload}
  }

  if (action.type === 'SET_USER_TYPE') state = {
    ...state,
    identity: {...state.identity, type: action.payload}
  }

  if (action.type === 'SET_USER_LOCATION') state = {
    ...state,
    config: {...state.config, location: action.payload}
  }

  if (action.type === 'SET_USER_HOURS') state = {
    ...state,
    config: {...state.config, hours: action.payload}
  }

  if (action.type === 'SET_USER_DISTANCE') state = {
    ...state,
    config: {...state.config, distance: action.payload}
  }

  if (action.type === 'SET_USER_TRANSPORTATION') state = {
    ...state,
    config: {...state.config, transportation: action.payload}
  }

  if (action.type === 'SET_USER_HAS_WORKED') state = {
    ...state,
    config: {...state.config, hasWorked: action.payload}
  }

  if (action.type === 'ADD_USER_INDUSTRY') state = {
    ...state,
    config: {
      ...state.config,
      industries: [...new Set([
        ...state.config.industries,
        action.payload
      ])]
    }
  }

  if (action.type === 'DEL_USER_INDUSTRY') {
    const index = state.config.industries.indexOf(action.payload)
    state = {
      ...state,
      config: {
        ...state.config,
        industries:
          state.config.industries.slice(0, index)
          .concat(state.config.industries.slice(index + 1))
      }
    }
  }

  if (action.type === 'ADD_USER_EXPERIENCE') state = {
    ...state,
    config: {
      ...state.config,
      experience: [...new Set([
        ...state.config.experience,
        action.payload
      ])]
    }
  }

  if (action.type === 'DEL_USER_EXPERIENCE') {
    const index = state.config.experience.indexOf(action.payload)
    state = {
      ...state,
      config: {
        ...state.config,
        experience:
          state.config.experience.slice(0, index)
          .concat(state.config.experience.slice(index + 1))
      }
    }
  }

  if (action.type === 'ADD_USER_DAY') state = {
    ...state,
    config: {
      ...state.config,
      days: [...new Set([
        ...state.config.days,
        action.payload
      ])]
    }
  }

  if (action.type === 'DEL_USER_DAY') {
    const index = state.config.days.indexOf(action.payload)
    state = {
      ...state,
      config: {
        ...state.config,
        days:
          state.config.days.slice(0, index)
          .concat(state.config.days.slice(index + 1))
      }
    }
  }

  if (action.type === 'CREATE_USER_PENDING') state = {
    ...state,
    status: 'pendingCreation'
  }

  if (action.type === 'CREATE_USER_FULFILLED') state = {
    ...state,
    status: 'online',
    identity: {...state.identity, password: ''}
  }

  if (action.type === 'LOG_IN_USER_FULFILLED') {
    const userData = action.payload.val()
    state = {
      status: 'online',
      identity: { ...state.identity, ...userData.identity, password: '' },
      config: { ...state.config, ...userData.config }
    }
  }

  if (
    action.type === 'LOG_OUT_USER_FULFILLED' ||
    action.type === 'DELETE_USER_FULFILLED'
  ) state = initialState

  return state

}

export default userReducer
