import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';
import toast from 'react-hot-toast';

const handlePending = state => {
  state.loading = true;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
  toast.error('Invalid data. Please check!');
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;
