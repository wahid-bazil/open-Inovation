import {createAsyncThunk, createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import {getEvalutions, getIndivClassement, getUser} from "./asyncThunks";


export interface Interface_General_State {
    isAuthenticated: boolean,
    userId: string,
    username: string,
    userCategory: string,

    projects: { id: number, label: string, score: number, scored: boolean }[],
    currentProjecToEdit: number | null,

    //loadingState
    getEvalutionsPending: boolean,
    getIndivClassementPending: boolean
}

const General_State: Interface_General_State = {
    isAuthenticated: false,
    userId: "",
    username: "",
    userCategory: "",

    projects: [],
    currentProjecToEdit: null,

    //loadingState
    getEvalutionsPending: true,
    getIndivClassementPending: true


};


const General_Slice = createSlice({
    name: 'General_Slice',
    initialState: General_State,
    reducers: {
        //loadingstate
        setCurrentProjectToEdit(state, action: PayloadAction<number>) {
            console.log(action.payload, "edd")
            state.currentProjecToEdit = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            //getUser
            .addCase(getUser.fulfilled, (state, action) => {
                state.username = action.payload.username
                state.userCategory = action.payload.title
                state.userId = action.payload.id
                localStorage.setItem('userId', action.payload.id.toString());
            })

            //getIndivClassement
            .addCase(getIndivClassement.pending, (state, action) => {
                state.getIndivClassementPending = true
            })
            .addCase(getIndivClassement.fulfilled, (state, action) => {
                state.projects = action.payload
                state.currentProjecToEdit = action.payload[0].id
                state.getIndivClassementPending = false
            })

            //getEvalutions
            .addCase(getEvalutions.pending, (state, action) => {
                state.getEvalutionsPending = true
            })
            .addCase(getEvalutions.fulfilled, (state, action) => {
                state.getEvalutionsPending = false
            })

    },
});
export const General_Actions = General_Slice.actions;
export default General_Slice.reducer;