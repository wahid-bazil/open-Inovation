import {createAsyncThunk, createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import {
    editEvalutions,
    getEvalutions,
    getFinalResult,
    getIndivClassement,
    getUser,
    postEvalutions
} from "./asyncThunks";


export interface Interface_General_State {
    isAuthenticated: boolean,
    userId: string,
    username: string,
    userCategory: string,
    firstname: string,
    lastname: string,
    titleValue: string,
    prefix: string,

    projects: { id: number, label: string, score: number, scored: boolean }[],
    currentProjecToEdit: number | null,
    currentProjectTitle: string,
    isCurrentProjectEvaluted: boolean,

    finalClassemet: { id: number, label: string, score: number, scored: boolean }[]

    //loadingState
    getEvalutionsPending: boolean,
    getIndivClassementPending: boolean,
    isEvalutionsSaving: boolean,
    getFinalResultPending:boolean
}

const General_State: Interface_General_State = {
    isAuthenticated: false,
    userId: "",
    username: "",
    firstname: "",
    lastname: "",
    titleValue: "",
    prefix: "",
    userCategory: "",


    projects: [],
    currentProjecToEdit: null,
    currentProjectTitle: "",
    isCurrentProjectEvaluted: false,

    finalClassemet: [],


    //loadingState
    getEvalutionsPending: false,
    getIndivClassementPending: false,
    isEvalutionsSaving: false,
    getFinalResultPending: false


};


const General_Slice = createSlice({
    name: 'General_Slice',
    initialState: General_State,
    reducers: {
        setCurrentProjectToEdit(state, action: PayloadAction<{ id: number, status: boolean, title: string }>) {
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
                console.log(action.payload, "as")
                state.username = action.payload.username
                state.userCategory = action.payload.title
                state.userId = action.payload.id
                state.firstname = action.payload.firstname
                state.lastname = action.payload.lastname
                state.titleValue = action.payload.titleValue
                state.prefix = action.payload.prefix
                localStorage.setItem('userId', action.payload.id);
                localStorage.setItem('title', action.payload.title);
                localStorage.setItem('firstname', action.payload.firstname);
                localStorage.setItem('lastname', action.payload.lastname);
                localStorage.setItem('titleValue', action.payload.titleValue);
                localStorage.setItem('prefix', action.payload.prefix);

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
                    if (action.payload[0].scored) {
                        state.isCurrentProjectEvaluted = true
                    } else {
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

            //getFinalResult
            .addCase(getFinalResult.pending, (state, action) => {
                state.getFinalResultPending = true
            })
            .addCase(getFinalResult.fulfilled, (state, action) => {
                state.finalClassemet = action.payload
                state.getFinalResultPending = false
            })

    },
});
export const General_Actions = General_Slice.actions;
export default General_Slice.reducer;