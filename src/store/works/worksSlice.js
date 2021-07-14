import createSlice from '@reduxjs/toolkit'

const user = ''
const worksSlice = createSlice({
  name: 'work',
  initialState: {
    id: '',
    name: '',
    link: '',
    portrait: '',
    images: '',
    description: '',
    id_portfolio: user
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
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.link = action.payload.link;
      state.portrait = action.payload.portrait;
      state.images = action.payload.images;
      state.description = action.payload.description;
    },
    deleteWork: (state, action) => {
      state.id = action.payload.id;
    }
  }
})

export const { addWork, editWork, deleteWork } = worksSlice.actions;
export default worksSlice