import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchRemaining = createAsyncThunk(
  'remaining/fetchRemaining',
  async () => {
    const { data } = await axios.get('/remaining');
    return data;
  }
);

export const fetchAddRemaining = createAsyncThunk(
  'remaining/fetchAddRemaining',
  async (params) => {
    const { data } = await axios.post('/remaining', params);
    return data;
  }
);

export const fetchDeleteRemaining = createAsyncThunk(
  'remaining/fetchDeleteRemaining',
  async (params) => {
    const { data } = await axios.delete('/remaining', params);
    return data;
  }
);

export const fetchPatchRemaining = createAsyncThunk(
  'remaining/fetchPatchRemaining',
  async (params) => {
    const { data } = await axios.patch('/remaining', params);
    return data;
  }
);

const initialState = {
  remaining: {
    items: [],
    status: 'loading',
  },
};

const remainingSlice = createSlice({
  name: 'remaining',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRemaining.pending]: (state, action) => {
      state.remaining.items = [];
      state.remaining.status = 'loading';
    },
    [fetchRemaining.fulfilled]: (state, action) => {
      state.remaining.items = action.payload;
      state.remaining.status = 'loaded';
    },
    [fetchRemaining.rejected]: (state) => {
      state.remaining.items = [];
      state.remaining.status = 'Error';
    },
  },
});

export const remainingReducer = remainingSlice.reducer;
