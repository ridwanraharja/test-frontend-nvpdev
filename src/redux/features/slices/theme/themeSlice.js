import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});
