import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { policyReducer } from './policy/policySlice';
import { policiesReducer } from './policies/policiesSlice';

export const store = configureStore({
    reducer: {
        policies: policiesReducer,
        policy: policyReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
