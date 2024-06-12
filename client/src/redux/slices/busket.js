import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  busket: {
    items: [],
  },
};

const busketSlice = createSlice({
  name: 'busket',
  initialState,
  reducers: {
    innerAction(state, action) {
      state.busket.items.push(action.payload);
    },
  },
});

export const busketReducer = busketSlice.reducer;
export const { innerAction } = busketSlice.actions;
