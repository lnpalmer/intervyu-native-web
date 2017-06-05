const initialState = {
  identity: {
    email: 'email',
    password: 'password'
  },
  config: {

  }
}

/*
  User reducer - handles user configuration
*/
function userReducer(state = initialState, action) {

  if (action.type === 'SET_EMAIL') state = {
    ...state,
    identity: {...state.identity, email: action.payload}
  }

  if (action.type === 'SET_PASSWORD') state = {
    ...state,
    identity: {...state.identity, password: action.payload}
  }

  return state

}

export default userReducer
