import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { handleLogin } from './api/auth';
import { AuthState, LoginCredential, User } from './types';
import { AxiosResponse } from 'axios';

export const login = createAsyncThunk('auth/login', async (payload: LoginCredential) => {
    try {
        console.log(payload);
        const data = await handleLogin(payload);
        
        return data;
    } catch (err) {
        throw new Error(err as string);
    }
})
const initialState:AuthState = {
    status: 'idle',
    error: null,
    user: null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},


    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.status = 'idle';
            state.user = action.payload!;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message!;
        });
    },
})

export default authSlice.reducer;