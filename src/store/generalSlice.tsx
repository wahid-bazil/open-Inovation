import {createAsyncThunk, createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import {
    editEvalutions,
    getEvalutions,
    getFinalResult,
    getIndivClassement,
    getUser, getUserAccount,
    postEvalutions, postSumbit
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
    getFinalResultPending: boolean,
    getUserAccountPending: boolean,
    userAccount: any[],
    isSubmitDone: boolean
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
    getFinalResultPending: false,
    getUserAccountPending: false,
    isSubmitDone: false,

    userAccount: []


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
        },
        setIsSubmit(state, action) {
            state.isSubmitDone = action.payload
        },
        reseTeCurrentEdit(state) {
            state.currentProjecToEdit = null
        }

    },
    extraReducers: (builder) => {
        builder

            //getUser
            .addCase(getUser.fulfilled, (state, action) => {
                state.username = action.payload.username
                state.userCategory = action.payload.title
                state.userId = action.payload.id
                state.firstname = action.payload.firstname
                state.lastname = action.payload.lastname
                state.titleValue = action.payload.titleValue
                state.prefix = action.payload.prefix
                state.isSubmitDone = action.payload.finalSubmission
                localStorage.setItem('userId', action.payload.id);
                localStorage.setItem('title', action.payload.title);
                localStorage.setItem('firstname', action.payload.firstname);
                localStorage.setItem('lastname', action.payload.lastname);
                localStorage.setItem('titleValue', action.payload.titleValue);
                localStorage.setItem('prefix', action.payload.prefix);
                if (action.payload.finalSubmission) {
                    localStorage.setItem('submit', "done");
                }

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
                    state.isCurrentProjectEvaluted = action.payload[0].scored
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

            //getUserAccount
            .addCase(getUserAccount.pending, (state, action) => {
                state.getUserAccountPending = true
            })
            .addCase(getUserAccount.fulfilled, (state, action) => {
                state.userAccount = action.payload
                state.getUserAccountPending = false
            })

            //postSumbit
            .addCase(postSumbit.pending, (state, action) => {

            })
            .addCase(postSumbit.fulfilled, (state, action) => {
                state.isSubmitDone = true
            })


    },
});
export const General_Actions = General_Slice.actions;
export default General_Slice.reducer;