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
    cleanBucket(state) {
      state.busket.items = [];
    },
  },
});

export const busketReducer = busketSlice.reducer;
export const { innerAction, cleanBucket } = busketSlice.actions;
