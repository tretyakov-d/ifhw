import { Policy } from '../../../types/policy';
import React from 'react';
import { PolicyCardPresenter } from './PolicyCardPresenter';
import { WithRequiredProp } from '@reduxjs/toolkit/dist/query/tsHelpers';

export const CarInsurancePolicyCard = ({
    policy,
}: {
    policy: WithRequiredProp<Policy, 'carInsurance'>;
}) => {
    return (
        <PolicyCardPresenter
            number={policy.number}
            title={`Car Insurance`}
            imageUrl={`/images/car-insurance.png`}
            propertyName={`Car make model`}
            propertyValue={policy.carInsurance.makeModel}
        />
    );
};
