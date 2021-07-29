import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
  name: "skill",
  initialState: [],
  reducers: {
    getSkills: (state, action) => (state = [...action.payload]),
    editSkill: (state, action) => {
      state.name = action.payload.name;
      state.level = action.payload.level;
      state.description = action.payload.description;
    },
  },
});

export const { getSkills, editSkill } = skillSlice.actions;
export default skillSlice.reducer;
