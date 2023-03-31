/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: true,
  countries: {},
  global: {},
  error: '',
};

export const fetchStats = createAsyncThunk('countries/fetchCountries', async () => await axios
.get('https://api.covid19api.com/summary')
.then((response) => response.data));

const CovidSlice = createSlice({
  name: 'country',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchStats.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStats.fulfilled, (state, action) => {
      state.loading = false;
      state.countries = action.payload.Countries;
      console.log(state.countries)
      // state.global = action.payload.Global;
    });
    builder.addCase(fetchStats.rejected, (state, action) => {
      state.loading = false;
      state.countries = [];
      state.global = [];
      state.error = action.error.message;
    });
  },
});

export default CovidSlice.reducer;