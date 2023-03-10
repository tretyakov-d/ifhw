import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { initialState } from './policiesSliceState';
import {
    applyCarInsurancePolicyPatch,
    carInsurancePolicyPatch,
} from '../policy/actions/carInsurancePolicyPatch';
import { has } from '../../types/utility';

const policiesSlice = createSlice({
    name: 'policies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            carInsurancePolicyPatch,
            ({ all }, { payload: { policyNumber, patch } }) => {
                const policy = all.find((p) => p.number === policyNumber);
                if (policy && has(policy, 'carInsurance'))
                    applyCarInsurancePolicyPatch(policy, patch);
            },
        );
    },
});

export const policiesReducer = policiesSlice.reducer;

export const selectAllPolicies = (s: RootState) => s.policies.all;
