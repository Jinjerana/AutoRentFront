import { createSlice } from '@reduxjs/toolkit';
import { fetchAutos } from './autosAPI';

const autosSlice = createSlice({
  name: 'autos',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAutos.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAutos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchAutos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const autosReducer = autosSlice.reducer;
