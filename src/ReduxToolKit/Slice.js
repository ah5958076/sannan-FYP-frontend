import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: { userData: null, cart: [] },
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
  },
});

export default slice.reducer;
export const { setUserData } = slice.actions;
