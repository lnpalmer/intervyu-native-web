const initialState = {
  identity: {
    email: 'email',
    password: 'password',
    passwordRepeat: 'passwordRepeat',
    name: 'name'
  },
  config: {

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

  return state

}

export default userReducer
