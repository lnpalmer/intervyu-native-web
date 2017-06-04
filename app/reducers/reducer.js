const initialState = {
  number: 0
}

function reducer(state = initialState, action) {

  if (action.type == 'INC') {

    state = {...state, number: state.number + action.payload}

  }

  return state

}

export default reducer
