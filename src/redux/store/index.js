import { createStore } from 'redux'

const initialState = {
  works: [],
  aboutInfo: [],
  skills: [],
  mails: []
}

const worksReducer = (state = initialState.works, action) => {
  switch (action.type) {
    case 'ADD_WORK':
      return {}
    case 'DELETE_WORK':
      return {}
    case 'UPDATE_WORK':
      return {}
    case 'SHOW_WORK':
      return {}
    default:
      return state
  }
}

const store = createStore(worksReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
  const storeNow = store.getState()
  console.log(storeNow)
})

// eslint-disable-next-line import/no-anonymous-default-export
export default store