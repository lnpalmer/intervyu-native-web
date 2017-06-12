const initialState = {
  pending: {
    experience: [],
    days: [],
    location: {
      longitude: -81.6944,
      latitude: 41.4993
    },
    hours: 4,
    transportation: false
  },
  entries: []
}

/*
  Jobs reducer - handles job objects
*/
function jobsReducer(state = initialState, action) {

  if (action.type === 'SET_JOB_LOCATION') state = {
    ...state,
    pending: {
      ...state.pending,
      location: action.payload
    }
  }

  if (action.type === 'SET_JOB_HOURS') state = {
    ...state,
    pending: {
      ...state.pending,
      hours: action.payload
    }
  }

  if (action.type === 'SET_JOB_DISTANCE') state = {
    ...state,
    pending: {
      ...state.pending,
      distance: action.payload
    }
  }

  if (action.type === 'SET_JOB_TRANSPORTATION') state = {
    ...state,
    pending: {
      ...state.pending,
      transportation: action.payload
    }
  }

  if (action.type === 'ADD_JOB_EXPERIENCE') state = {
    ...state,
    pending: {
      ...state.pending,
      experience: [...new Set([
        ...state.pending.experience,
        action.payload
      ])]
    }
  }

  if (action.type === 'DEL_JOB_EXPERIENCE') {
    const index = state.pending.experience.indexOf(action.payload)
    state = {
      ...state,
      pending: {
        ...state.pending,
        experience:
          state.pending.experience.slice(0, index)
          .concat(state.pending.experience.slice(index + 1))
      }
    }
  }

  if (action.type === 'ADD_JOB_DAY') state = {
    ...state,
    pending: {
      ...state.pending,
      days: [...new Set([
        ...state.pending.days,
        action.payload
      ])]
    }
  }

  if (action.type === 'DEL_JOB_DAY') {
    const index = state.pending.days.indexOf(action.payload)
    state = {
      ...state,
      pending: {
        ...state.pending,
        days:
          state.pending.days.slice(0, index)
          .concat(state.pending.days.slice(index + 1))
      }
    }
  }

  if (action.type === 'RECEIVE_JOB_ENTRY') {
    if (state.entries.filter(job => {
      return job.key === action.payload.key
    }).length === 0) {
      state = {
        ...state,
        entries: [
          ...state.entries,
          action.payload
        ]
      }
    }
  }

  if (action.type === 'REMOVE_JOB_ENTRY') state = {
    ...state,
    entries: state.entries.filter(job => {
      return job.key !== action.payload
    })
  }

  if (action.type === 'LOG_OUT_USER_FULFILLED') state = {
    ...state,
    entries: []
  }

  return state

}

export default jobsReducer
