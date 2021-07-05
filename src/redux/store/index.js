import { createStore } from 'redux'

const initialState = {
  works: [],
  aboutInfo: [],
  skills: [],
  mails: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {}
    case 'DELETE_TASK':
      return {}
    case 'UPDATE_TASK':
      return {}
    default:
      return state
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return {
    ...createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  }
}