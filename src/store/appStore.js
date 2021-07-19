import { configureStore } from '@reduxjs/toolkit'

import userSlice from './user/userSlice'
import workSlice from './work/workSlice'
import skillSlice from './skills/skillSlice'

export default configureStore({
  reducer: {
    user: userSlice,
    work: workSlice,
    skill: skillSlice
  }
})