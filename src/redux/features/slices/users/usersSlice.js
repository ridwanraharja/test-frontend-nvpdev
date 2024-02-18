import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../thunks/users/usersThunk";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        const payload = action.payload;
        state.loading = false;
        state.users = [...payload.users];
      })
      .addCase(getUsers.rejected, (state, action) => {
        const payload = action.payload;
        if (payload) {
          state.error = payload;
        }
        state.loading = false;
      });
  },
});

export default usersSlice.reducer;
