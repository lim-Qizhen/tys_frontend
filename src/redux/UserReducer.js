import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user", //store name
  initialState: {
    f_name: "",
    l_name: "",
    username: "",
    accessToken: "",
    email: "",
    phone: null,
    school: "",
    subjects: [],
    exams: [],
    is_tutor: false,
  },
  reducers: {
    setFirstName: (state, action) => {
      state.f_name = action.payload;
    },
    setLastName: (state, action) => {
      state.l_name = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setSchool: (state, action) => {
      state.school = action.payload;
    },
    setSubjects: (state, action) => {
      state.subjects = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setTutor: (state, action) => {
      state.f_name = action.payload;
    },
    loginSuccess: (state, action) => {
      state.f_name = action.payload.name;
      state.address = action.payload.address;
      state.country = action.payload.country;
      state.postal = action.payload.postal;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.phone = action.payload.phone;
      state.id = action.payload._id;
      //state is like the actual thing, action.payload is like what you put in
    },
    registerSuccess: (state, action) => {
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.country = action.payload.country;
      state.postal = action.payload.postal;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.id = action.payload._id;
    },
    logout: (state) => {
      state.f_name = "";
      state.l_name = "";
      state.address = "";
      state.email = "";
      state.accessToken = "";
      state.country = "";
      state.postal = "";
      state.countryCode = "";
      state.phone = null;
      state.password = "";
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
