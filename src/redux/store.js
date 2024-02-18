import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/slices/users/usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
