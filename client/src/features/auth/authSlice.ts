import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { handleLogin, handleRegister } from './api/auth';
import { AuthState, LoginCredential, User } from './types';
import { AxiosResponse } from 'axios';

export const login = createAsyncThunk('auth/login', async ({email,password}:User) => {
    try {
        console.log({email,password});
        const data = await handleLogin({email,password});
        return data;
    } catch (err) {
        throw new Error(err as string);
    }
})

export const register = createAsyncThunk('auth/register', async ({email,password,nickname}:User) => {
    try {
        console.log({email,password,nickname});
        const data = await handleRegister({email,password,nickname});
        console.log(data);
        return data;
    } catch (err) {
        throw new Error(err as string);
    }
})
const initialState: AuthState = {
    status: 'loading',
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
            state.status = 'login';
            state.user = action.payload!;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message!;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.status = 'login';
            state.user = action.payload!;
        });
        builder.addCase(register.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message!;
        }); 
    },
})

export default authSlice.reducer;