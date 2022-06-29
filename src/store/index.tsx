import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import General_Reducer, {Interface_General_State} from './generalSlice';




export interface Istate {
    general_Slice: Interface_General_State,
}

const store = configureStore({
    reducer: {
        general_Slice: General_Reducer,
    },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store;