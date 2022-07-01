import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../axiosConfig";
import {evalution} from "../type";


export const getUser = createAsyncThunk(
    'getUser',
    async (payload: any) => {
        const response = await axiosInstance.post("auth/authenticate", payload);
        return response.data

    }
)

export const getCriteria = createAsyncThunk(
    'getCriteria',
    async () => {
        const response = await axiosInstance.post("api/criteria");
        return response.data

    }
)


export const getIndivClassement = createAsyncThunk(
    'getIndivClassement',
    async (userId: number) => {
        const url = "api/projects/indiv-classification?userId=" + userId
        const response = await axiosInstance.get(url);
        return response.data

    }
)

export const getEvalutions = createAsyncThunk(
    'getEvalutions',
    async ({userId, projectId}: { userId: number, projectId: number }) => {
        const url = `api/evaluations?userId=${userId}&projectId=${projectId}`
        const response = await axiosInstance.get(url);
        return response.data

    }
)


export const postEvalutions = createAsyncThunk(
    'postEvalutions',
    async (paylod: evalution[]) => {
        const url = `api/evaluations/list`
        const response = await axiosInstance.post(url, paylod);
        return response.data

    }
)
export const editEvalutions = createAsyncThunk(
    'editEvalutions',
    async (paylod: evalution[]) => {
        const url = `api/evaluations/list`
        const response = await axiosInstance.put(url, paylod);
        return response.data

    }
)
//g1,g2
export const getFinalResult = createAsyncThunk(
    'getFinalResult',
    async (groupe:string) => {
        const url = `api/projects/global-classification?groupe=${groupe}`
        const response = await axiosInstance.get(url);
        return response.data

    }
)

export const getUserAccount = createAsyncThunk(
    'getUserAccount',
    async () => {
        const url = `api/user-accounts `
        const response = await axiosInstance.get(url);
        return response.data

    }
)
export const postSumbit = createAsyncThunk(
    'postSumbit',
    async (userId: number) => {
        const url = `api/user-account/${userId}/final-submission `
        const payload = {
            finalSubmission: true
        }
        const response = await axiosInstance.post(url, payload);
        return response.data

    }
)



