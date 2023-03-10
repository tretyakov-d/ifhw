import { TextInput } from '../../../../components/TextInput';
import { Box } from '../../../../components/Box';
import { Button } from '../../../../components/Button';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { CarInsuranceMutableFields, Policy } from '../../../../types/policy';

interface CarInsurancePropertyEditFormProps {
    value: CarInsuranceMutableFields;
    onSave?: (policy: CarInsuranceMutableFields) => void;
    onCancel?: () => void;
}

export const CarInsurancePropertyEditForm = ({
    value,
    onSave,
    onCancel,
}: CarInsurancePropertyEditFormProps) => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: value,
    });

    const handleCancel = useCallback(() => {
        reset();

        if (onCancel) onCancel();
    }, [onCancel]);

    const onSubmit = (data, e) => {
        if (onSave) onSave(data);
    };

    const onError = (data, e) => {
        console.error(data, e);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <TextInput
                label={`Car nickname`}
                required
                {...register('carNickname', { required: true })}
            />

            <TextInput
                label={`Address`}
                required
                {...register('address', { required: true })}
            />
            <TextInput
                label={`Phone number`}
                required
                {...register('phoneNumber', { required: true })}
            />

            <Box
                pt={16}
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'flex-end'}
                flexWrap={'wrap'}
            >
                <Button onClick={handleCancel} variant={'secondary'}>
                    Cancel
                </Button>
                <Button type={'submit'} variant={'primary'}>
                    Save
                </Button>
            </Box>
        </form>
    );
};
