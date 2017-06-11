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
    experience: [],
    days: [],
    location: {
      longitude: 0,
      latitude: 0
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

  console.log(action.type)

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
    status: 'new'
  }

  if (action.type === 'UPLOAD_USER_PENDING') state = {
    ...state,
    status: 'pendingUpload'
  }

  if (action.type === 'UPLOAD_USER_FULFILLED') state = {
    ...state,
    status: 'online'
  }

  return state

}

export default userReducer
