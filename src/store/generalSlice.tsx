import {createAsyncThunk, createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import {editEvalutions, getEvalutions, getIndivClassement, getUser, postEvalutions} from "./asyncThunks";


export interface Interface_General_State {
    isAuthenticated: boolean,
    userId: string,
    username: string,
    userCategory: string,

    projects: { id: number, label: string, score: number, scored: boolean }[],
    currentProjecToEdit: number | null,
    currentProjectTitle: string,
    isCurrentProjectEvaluted: boolean

    //loadingState
    getEvalutionsPending: boolean,
    getIndivClassementPending: boolean,
    isEvalutionsSaving: boolean
}

const General_State: Interface_General_State = {
    isAuthenticated: false,
    userId: "",
    username: "",
    userCategory: "",

    projects: [],
    currentProjecToEdit: null,
    currentProjectTitle: "",
    isCurrentProjectEvaluted: false,


    //loadingState
    getEvalutionsPending: false,
    getIndivClassementPending: false,
    isEvalutionsSaving: false,


};


const General_Slice = createSlice({
    name: 'General_Slice',
    initialState: General_State,
    reducers: {
        setCurrentProjectToEdit(state, action: PayloadAction<{ id: number, status: boolean ,title:string }>) {
            state.isCurrentProjectEvaluted = action.payload.status
            state.currentProjecToEdit = action.payload.id
            state.currentProjectTitle = action.payload.title
        },
        switchCurrentProjectStatus(state, action: PayloadAction<boolean>) {
            state.isCurrentProjectEvaluted = action.payload
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
                localStorage.setItem('title', action.payload.title.toString());
                localStorage.setItem('username', action.payload.username.toString());
            })

            //getIndivClassement
            .addCase(getIndivClassement.pending, (state, action) => {
                state.getIndivClassementPending = true
            })
            .addCase(getIndivClassement.fulfilled, (state, action) => {
                state.projects = action.payload
                if (state.currentProjecToEdit === null) {
                    state.currentProjecToEdit = action.payload[0].id
                    state.currentProjectTitle = action.payload[0].label
                    if (action.payload[0].scored){
                        state.isCurrentProjectEvaluted = true
                    }
                    else{
                        state.isCurrentProjectEvaluted = false
                    }
                }
                state.getIndivClassementPending = false
            })

            //getEvalutions
            .addCase(getEvalutions.pending, (state, action) => {
                state.getEvalutionsPending = true
            })
            .addCase(getEvalutions.fulfilled, (state, action) => {
                state.getEvalutionsPending = false
            })

            //editEvalutions
            .addCase(editEvalutions.pending, (state, action) => {
                state.isEvalutionsSaving = true
            })
            .addCase(editEvalutions.fulfilled, (state, action) => {
                state.isEvalutionsSaving = false
            })

            //postEvalutions
            .addCase(postEvalutions.pending, (state, action) => {
                state.isEvalutionsSaving = true
            })
            .addCase(postEvalutions.fulfilled, (state, action) => {
                state.isEvalutionsSaving = false
            })

    },
});
export const General_Actions = General_Slice.actions;
export default General_Slice.reducer;