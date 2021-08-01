import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    getUser: (state, action) => (state = action.payload),
    editUser: (state, action) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.nickname = action.payload.nickname;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.social = action.payload.social;
      state.image = action.payload.image;
      state.target = action.payload.target;
      state.hobbies = action.payload.hobbies;
      state.background = action.payload.background;
      state.profession = action.payload.profession;
    },
  },
});

export const { getUser, editUser } = userSlice.actions;

export default userSlice.reducer;
