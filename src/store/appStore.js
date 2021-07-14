import { configureStore } from '@reduxjs/toolkit'

import userReducer from './User/userReducer'

export default configureStore({
  reducer: {
    user: userReducer
  }
})