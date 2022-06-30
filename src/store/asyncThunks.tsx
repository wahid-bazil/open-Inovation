import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../axiosConfig";


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


