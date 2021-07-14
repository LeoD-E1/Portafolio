import { createSlice } from '@reduxjs/toolkit'

const workSlice = createSlice({
  name: 'work',
  initialState: {
    id: '',
    name: '',
    link: '',
    portrait: '',
    images: '',
    description: '',
  },
  reducers: {
    addWork: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.link = action.payload.link;
      state.portrait = action.payload.portrait;
      state.images = action.payload.images;
      state.description = action.payload.description;
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

export const { addWork, editWork, deleteWork } = workSlice.actions
export default workSlice.reducer