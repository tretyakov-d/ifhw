import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import {
    policyActions,
    selectCurrentPolicy,
} from '../../store/policy/policySlice';
import { NotFoundPage } from '../notFound/NotFoundPage';
import { NotImplementedPage } from '../notImplemented/NotImplementedPage';
import { CarInsurancePolicyPage } from './car/CarInsurancePolicyPage';
import { selectAllPolicies } from '../../store/policies/policiesSlice';
import { has } from '../../types/utility';

export const PolicyPage = () => {
    const dispatch = useAppDispatch();
    const policies = useSelector(selectAllPolicies);
    const policy = useSelector(selectCurrentPolicy);
    const { number } = useParams();

    useEffect(() => {
        const policy = policies.find((p) => p.number === number) ?? null;
        dispatch(policyActions.setPolicy(policy));
    }, [number, policies]);

    if (policy == null) return <NotFoundPage />;

    if (!has(policy, 'carInsurance')) return <NotImplementedPage />;

    return <CarInsurancePolicyPage policy={policy} />;
};
