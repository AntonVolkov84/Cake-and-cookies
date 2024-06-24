import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchReplenishment = createAsyncThunk(
  'replenishment/fetchReplenishment',
  async () => {
    const { data } = await axios.get('/replenishment');
    return data;
  }
);

const initialState = {
  replenishment: {
    items: [],
    status: 'loading',
  },
};

const replenishmentSlice = createSlice({
  name: 'replenishment',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchReplenishment.pending]: (state) => {
      state.replenishment.items = [];
      state.replenishment.status = 'loading';
    },
    [fetchReplenishment.fulfilled]: (state, action) => {
      state.replenishment.items = action.payload;
      state.replenishment.status = 'loaded';
    },
    [fetchReplenishment.rejected]: (state) => {
      state.replenishment.items = [];
      state.replenishment.status = 'Error';
    },
  },
});

export const replenishmentReducer = replenishmentSlice.reducer;
