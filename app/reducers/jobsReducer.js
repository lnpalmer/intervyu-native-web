const initialState = {
  pending: {
    experience: [],
    days: [],
    location: {
      longitude: -81.6944,
      latitude: 41.4993
    },
    address: '',
    hours: 4,
    transportation: false,
    name: '',
    description: '',
    link: '',
    icon: null,
  },
  entries: [],
  searchSettings: {
    distance: 0,
    term: ''
  }
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

  if (action.type === 'SET_JOB_ADDRESS') state = {
    ...state,
    pending: {
      ...state.pending,
      address: action.payload
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

  if (action.type === 'SET_JOB_NAME') state = {
    ...state,
    pending: {
      ...state.pending,
      name: action.payload
    }
  }

  if (action.type === 'SET_JOB_DESCRIPTION') state = {
    ...state,
    pending: {
      ...state.pending,
      description: action.payload
    }
  }

  if (action.type === 'SET_JOB_LINK') state = {
    ...state,
    pending: {
      ...state.pending,
      link: action.payload
    }
  }

  if (action.type === 'SET_JOB_ICON') state = {
    ...state,
    pending: {
      ...state.pending,
      icon: action.payload,
      iconExtension:
        action.payload ?
        action.payload.name.split('.').pop() : ''
    }
  }

  if (action.type === 'SET_JOB_SEARCH_DISTANCE') state = {
    ...state,
    searchSettings: {
      ...state.searchSettings,
      distance: action.payload
    }
  }

  if (action.type === 'SET_JOB_SEARCH_TERM') state = {
    ...state,
    searchSettings: {
      ...state.searchSettings,
      term: action.payload
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

  if (action.type === 'DOWNLOAD_JOB_ENTRY_FULFILLED') {
    if (state.entries.filter(job => {
      return job.key === action.payload.key
    }).length === 0) {
      state = {
        ...state,
        entries: [
          ...state.entries,
          {
            ...action.payload,
            expanded: false
          }
        ]
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
          {
            ...action.payload,
            expanded: false
          }
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

  if (action.type === 'LOG_IN_USER_FULFILLED') {
    state = {
      ...state,
      searchSettings: {
        ...state.searchSettings,
        distance: action.payload.val().config.distance
      }
    }
  }

  if (action.type === 'LOG_OUT_USER_FULFILLED') state = {
    ...state,
    entries: []
  }

  if (action.type === 'SET_JOB_ENTRY_EXPANDED') state = {
    ...state,
    entries: state.entries.map(entry => {
      if (entry.key === action.payload.key) {
        return { ...entry, expanded: action.payload.expanded }
      } else return entry
    })
  }

  if (action.type === 'GET_JOB_ENTRY_THUMBNAIL_FULFILLED') state = {
    ...state,
    entries: state.entries.map(entry => {
      if (entry.key === action.payload.key) {
        return { ...entry, iconUrl: action.payload.url }
      } else return entry
    })
  }

  if (action.type === 'GET_JOB_ENTRY_EMPLOYER_FULFILLED') state = {
    ...state,
    entries: state.entries.map(entry => {
      if (entry.key === action.payload.key) {
        return { ...entry, ownerName: action.payload.name }
      } else return entry
    })
  }

  return state

}

export default jobsReducer
