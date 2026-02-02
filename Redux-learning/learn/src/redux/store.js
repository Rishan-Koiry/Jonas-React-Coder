import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterslice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;