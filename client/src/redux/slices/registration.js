import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchRegistration = createAsyncThunk(
  'auth/Registration',
  async (params) => {
    const { data } = await axios.post('/auth/register', params);
    return data;
  }
);

const initialState = {
  data: null,
  status: 'loading',
};

const registrationSlice = createSlice({
  name: 'Registration',
  initialState,
  extraReducers: {
    [fetchRegistration.pending]: (state) => {
      state.data = null;
      state.status = 'loading';
    },
    [fetchRegistration.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    },
    [fetchRegistration.rejected]: (state) => {
      state.data = null;
      state.status = 'Error';
    },
  },
});

export const registrationReducer = registrationSlice.reducer;
