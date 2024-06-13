import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weight: {
    items: [],
  },
};

const weightSlice = createSlice({
  name: 'weight',
  initialState,
  reducers: {
    innerWeight(state, action) {
      state.weight.items.push(action.payload);
    },
    cleanWeight(state) {
      state.weight.items = [];
    },
  },
});

export const weightReducer = weightSlice.reducer;
export const { innerWeight, cleanWeight } = weightSlice.actions;
