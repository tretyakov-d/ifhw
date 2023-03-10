import React, { useCallback, useMemo, useState } from 'react';
import { CarInsurancePropertyEditButton } from './CarInsurancePropertyEditButton';
import { Modal } from '../../../../components/Modal';
import { CarInsurancePropertyEditForm } from './CarInsurancePropertyEditForm';
import { useDispatch } from 'react-redux';
import { policyActions } from '../../../../store/policy/policySlice';
import { CarInsuranceMutableFields, Policy } from '../../../../types/policy';
import { WithRequiredProp } from '@reduxjs/toolkit/dist/query/tsHelpers';
import { carInsurancePolicyPatch } from '../../../../store/policy/actions/carInsurancePolicyPatch';

export const CarInsurancePropertyEdit = ({
    policy,
}: {
    policy: WithRequiredProp<Policy, 'carInsurance'>;
}) => {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const open = useCallback(() => setIsOpen(true), [isOpen]);
    const close = useCallback(() => setIsOpen(false), [isOpen]);

    const value = useMemo(() => {
        return {
            carNickname: policy.carInsurance.carNickname,
            phoneNumber: policy.policyHolder.phoneNumber,
            address: policy.policyHolder.address,
        };
    }, [policy]);

    const handleSave = useCallback(
        (patch: CarInsuranceMutableFields) => {
            dispatch(
                carInsurancePolicyPatch({ policyNumber: policy.number, patch }),
            );
            close();
        },
        [policy.number],
    );

    return (
        <div>
            <CarInsurancePropertyEditButton onClick={open} />

            <Modal title={'Edit Policy'} isOpen={isOpen} onClose={close}>
                <CarInsurancePropertyEditForm
                    value={value}
                    onCancel={close}
                    onSave={handleSave}
                />
            </Modal>
        </div>
    );
};
