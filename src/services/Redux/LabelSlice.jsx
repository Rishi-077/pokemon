import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  label: "Dashboard",
  open: true,
};

const labelSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleLabel: (state, action) => {
      state.label = action.payload;
    },
    toggleOpen: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleLabel, toggleOpen } = labelSlice.actions;
export default labelSlice.reducer;
