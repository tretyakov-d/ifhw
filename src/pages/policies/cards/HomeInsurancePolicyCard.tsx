import { Policy } from '../../../types/policy';
import React from 'react';
import { PolicyCardPresenter } from './PolicyCardPresenter';
import { WithRequiredProp } from '@reduxjs/toolkit/dist/query/tsHelpers';

export const HomeInsurancePolicyCard = ({
    policy,
}: {
    policy: WithRequiredProp<Policy, 'homeInsurance'>;
}) => {
    return (
        <PolicyCardPresenter
            number={policy.number}
            title={`Home Insurance`}
            imageUrl={`/images/home-insurance.png`}
            propertyName={`Address`}
            propertyValue={policy.homeInsurance.address}
        />
    );
};
