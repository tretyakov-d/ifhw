import { createAction } from '@reduxjs/toolkit';
import { CarInsuranceMutableFields, Policy } from '../../../types/policy';
import { WithRequiredProp } from '@reduxjs/toolkit/dist/query/tsHelpers';

export type CarInsurancePatch = {
    policyNumber: string;
    patch: CarInsuranceMutableFields;
};

export const carInsurancePolicyPatch = createAction<CarInsurancePatch>(
    'carInsurancePolicyPatch',
);

export const applyCarInsurancePolicyPatch = (
    policy: WithRequiredProp<Policy, 'carInsurance'>,
    patch: CarInsuranceMutableFields,
) => {
    policy.policyHolder.address = patch.address;
    policy.policyHolder.phoneNumber = patch.phoneNumber;
    policy.carInsurance.carNickname = patch.carNickname;
};
