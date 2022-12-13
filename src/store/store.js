import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../slices/counterSlice';

export const store = configureStore({
    //store single feature's states
    reducer : {
        counter : counterSlice,

    }
})