import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchWriteoff = createAsyncThunk(
  'writeoff/fetchwriteoff',
  async () => {
    const { data } = await axios.get('/writeoff');
    return data;
  }
);

const initialState = {
  writeoff: {
    items: [],
    status: 'loading',
  },
};

const writeoffSlice = createSlice({
  name: 'writeoff',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWriteoff.pending]: (state) => {
      state.writeoff.items = [];
      state.writeoff.status = 'loading';
    },
    [fetchWriteoff.fulfilled]: (state, action) => {
      state.writeoff.items = action.payload;
      state.writeoff.status = 'loaded';
    },
    [fetchWriteoff.rejected]: (state) => {
      state.writeoff.items = [];
      state.writeoff.status = 'Error';
    },
  },
});

export const writeoffReducer = writeoffSlice.reducer;
