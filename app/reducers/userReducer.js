const initialState = {
  identity: {
    name: 'no name'
  },
  config: {
    
  }
}

/*
  User reducer - handles user configuration
*/
function userReducer(state = initialState, action) {

  if (action.type === 'SET_NAME') state = {...state, identity: {...state.identity, name: action.payload}}

  return state

}

export default userReducer
