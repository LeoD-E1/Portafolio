import { configureStore } from '@reduxjs/toolkit'

import userSlice from './user/userSlice'
import workSlice from './work/workSlice'

export default configureStore({
  reducer: {
    user: userSlice,
    work: workSlice
  }
})