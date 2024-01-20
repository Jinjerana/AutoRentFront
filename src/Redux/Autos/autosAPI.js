import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.default.baseURL = 'https://65a7d41d94c2c5762da7ac7b.mockapi.io';

export const fetchAutos = createAsyncThunk(
  'autos/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/AutoRent');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
