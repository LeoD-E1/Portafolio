import { createSlice } from "@reduxjs/toolkit";

const workSlice = createSlice({
  name: "work",
  initialState: [],
  reducers: {
    getWorks: (state, action) => (state = [...action.payload]),
    editWork: (state, action) => {
      state.name = action.payload.name;
      state.link = action.payload.link;
      state.portrait = action.payload.portrait;
      state.images = action.payload.images;
      state.description = action.payload.description;
    },
  },
});

export const { editWork, getWorks } = workSlice.actions;
export default workSlice.reducer;
