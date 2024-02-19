import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/slices/users/usersSlice";
import themeReducer from "./features/slices/theme/themeSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    theme: themeReducer,
  },
});

export default store;
