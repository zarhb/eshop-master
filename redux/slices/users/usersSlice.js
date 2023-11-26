import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { token: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = "";
    },
  },
});

export const { setToken, removeToken } = userSlice.actions;
export default userSlice.reducer;
