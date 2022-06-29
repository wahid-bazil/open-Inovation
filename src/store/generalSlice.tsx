import {createAsyncThunk, createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import {getUser} from "./asyncThunks";


export interface Interface_General_State {
    isAuthenticated: boolean,
    userId: string,
    username: string,
    userCategory: string
}

const General_State: Interface_General_State = {
    isAuthenticated: false,
    userId: "",
    username: "",
    userCategory: ""

};


const General_Slice = createSlice({
    name: 'General_Slice',
    initialState: General_State,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //getParameters
            .addCase(getUser.fulfilled, (state, action) => {
                state.username = action.payload.username
                state.userCategory = action.payload.title
                state.userId = action.payload.id
                localStorage.setItem('userId', action.payload.id.toString());
            })
    },
});
export const General_Actions = General_Slice.actions;
export default General_Slice.reducer;