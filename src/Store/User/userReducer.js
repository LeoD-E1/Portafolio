import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    surname: '',
    nickname: '',
    phone: '',
    email: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    image: '',
    role: 'Administrador'
  },
  reducers: {
    editUser: (state, action) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.nickname = action.payload.nickname;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.facebook = action.payload.facebook;
      state.instagram = action.payload.instagram;
      state.linkedin = action.payload.linkedin;
      state.image = action.payload.image;
    }
  }
})

export const { editUser } = userSlice.actions;

export default userSlice.reducer