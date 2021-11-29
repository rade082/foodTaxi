import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name:"login",
    initialState:{
        token: '',
        isLoggedIn: false
    },
    reducers:{
        loginUser(state,action){
            state.token = action.payload;
            state.isLoggedIn = true;
        },
        logoutUser(state){
            state.token = '';
            state.isLoggedIn = false;
        }
    }
});

export const loginActions = loginSlice.actions;
export default  loginSlice;
