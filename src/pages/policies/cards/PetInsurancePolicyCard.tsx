import { Policy } from '../../../types/policy';
import React from 'react';
import { PolicyCardPresenter } from './PolicyCardPresenter';
import { WithRequiredProp } from '@reduxjs/toolkit/dist/query/tsHelpers';

export const PetInsurancePolicyCard = ({
    policy,
}: {
    policy: WithRequiredProp<Policy, 'petInsurance'>;
}) => {
    return (
        <PolicyCardPresenter
            number={policy.number}
            title={`Pet Insurance`}
            imageUrl={`/images/pet-insurance.png`}
            propertyName={`Pet name`}
            propertyValue={policy.petInsurance.petName}
        />
    );
};
