import { createAsyncThunk } from "@reduxjs/toolkit";
import { query } from "../../../axiosUtil";

export const getUsers = createAsyncThunk("users/getUsers", async (page) => {
  const url = "/users?limit=100";
  const res = await query("GET", url);
  return res;
});
