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
    delProduct(state, action) {
      state.busket.items.forEach(function (e, i) {
        if (e.id === action.payload) state.busket.items.splice(i, 1);
      });
    },
  },
});

export const busketReducer = busketSlice.reducer;
export const { innerAction, cleanBucket, delProduct } = busketSlice.actions;
