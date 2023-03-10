import { Policy } from '../../../types/policy';
import React from 'react';
import { PolicyCardPresenter } from './PolicyCardPresenter';
import { WithRequiredProp } from '@reduxjs/toolkit/dist/query/tsHelpers';

export const HealthInsurancePolicyCard = ({
    policy,
}: {
    policy: WithRequiredProp<Policy, 'healthInsurance'>;
}) => {
    return (
        <PolicyCardPresenter
            number={policy.number}
            title={`Health Insurance`}
            imageUrl={`/images/health-insurance.png`}
            propertyName={`Person name`}
            propertyValue={policy.healthInsurance.personName}
        />
    );
};
