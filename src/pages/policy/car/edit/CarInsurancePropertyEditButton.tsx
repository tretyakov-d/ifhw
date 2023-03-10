import React from 'react';
import { Button, ButtonProps } from '../../../../components/Button';

export const CarInsurancePropertyEditButton = (
    props: Omit<ButtonProps, 'children'>,
) => {
    return (
        <Button {...props}>
            <span className="if icon ui pencil blue" />
            Edit policy
        </Button>
    );
};
