import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../axiosConfig";


export const getUser = createAsyncThunk(
    'getUser',
    async (payload: any) => {
        const response = await axiosInstance.post("auth/authenticate", payload);
        return response.data

    }
)


