import React from 'react';
import { HomeInsurancePolicyCard } from './HomeInsurancePolicyCard';
import { CarInsurancePolicyCard } from './CarInsurancePolicyCard';
import { PetInsurancePolicyCard } from './PetInsurancePolicyCard';
import { HealthInsurancePolicyCard } from './HealthInsurancePolicyCard';
import { Policy } from '../../../types/policy';
import { has } from '../../../types/utility';

export const PolicyCardFactory = ({ policy }: { policy: Policy }) => {
    if (has(policy, 'homeInsurance'))
        return <HomeInsurancePolicyCard policy={policy} />;

    if (has(policy, 'healthInsurance'))
        return <HealthInsurancePolicyCard policy={policy} />;

    if (has(policy, 'carInsurance'))
        return <CarInsurancePolicyCard policy={policy} />;

    if (has(policy, 'petInsurance'))
        return <PetInsurancePolicyCard policy={policy} />;

    console.error('Unsupported policy', policy);

    return null;
};
