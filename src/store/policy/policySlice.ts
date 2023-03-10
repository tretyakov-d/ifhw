import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Policy } from '../../types/policy';
import {
    applyCarInsurancePolicyPatch,
    carInsurancePolicyPatch,
} from './actions/carInsurancePolicyPatch';
import { has } from '../../types/utility';

export type PathCarInsuranceArgs = {
    carNickname: string;
    address: string;
    phoneNumber: string;
};

const policySlice = createSlice({
    name: 'policy',
    initialState: {
        current: null as Policy | null,
    },
    reducers: {
        setPolicy(s, { payload }: { payload: Policy | null }) {
            s.current = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            carInsurancePolicyPatch,
            (s, { payload: { policyNumber, patch } }) => {
                if (
                    s.current?.number === policyNumber &&
                    has(s.current, 'carInsurance')
                )
                    applyCarInsurancePolicyPatch(s.current, patch);
            },
        );
    },
});

export const selectCurrentPolicy = (s: RootState) => s.policy.current;

export const policyReducer = policySlice.reducer;
export const policyActions = policySlice.actions;
