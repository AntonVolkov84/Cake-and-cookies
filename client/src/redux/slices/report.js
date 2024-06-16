import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchReport = createAsyncThunk('report/fetchReport', async () => {
  const { data } = await axios.get('/report');
  return data;
});

const initialState = {
  report: {
    items: [],
    status: 'loading',
  },
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    cleanReport(state) {
      state.report.items = [];
    },
  },
  extraReducers: {
    [fetchReport.pending]: (state, action) => {
      state.report.items = [];
      state.report.status = 'loading';
    },
    [fetchReport.fulfilled]: (state, action) => {
      state.report.items = action.payload;
      state.report.status = 'loaded';
    },
    [fetchReport.rejected]: (state) => {
      state.report.items = [];
      state.report.status = 'Error';
    },
  },
});

export const reportReducer = reportSlice.reducer;
export const { cleanReport } = reportSlice.actions;
