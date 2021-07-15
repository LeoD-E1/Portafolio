import { createSlice } from '@reduxjs/toolkit'

const workSlice = createSlice({
  name: 'work',
  initialState: [],
  reducers: {
    getWorks: (state, action) => {
      return state = [...action.payload]
    },
    editWork: (state, action) => {
      state.name = action.payload.name;
      state.link = action.payload.link;
      state.portrait = action.payload.portrait;
      state.images = action.payload.images;
      state.description = action.payload.description;
    },
    deleteWork: (state) => state.id
  }
})

export const { editWork, deleteWork, getWorks } = workSlice.actions
export default workSlice.reducer