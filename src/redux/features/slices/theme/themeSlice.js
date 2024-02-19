import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      const payload = action.payload;
      state.darkMode = payload;
      console.log(payload);
      localStorage.setItem("darkMode", payload);
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export const selectDarkMode = (state) => state.theme.darkMode;
export default themeSlice.reducer;
