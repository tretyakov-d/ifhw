import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { WithRequiredProp } from '@reduxjs/toolkit/dist/query/tsHelpers';
import { Policy } from '../../../../types/policy';

const StyledTable = styled.table`
    margin-bottom: 16px !important;
`;

const PropertyRow = ({
    name,
    value,
}: {
    name: ReactNode;
    value: ReactNode;
}) => (
    <tr className="if">
        <td className="if">{name}</td>
        <td className="if">{value}</td>
    </tr>
);

export const CarInsuranceProperties = ({
    policy,
}: {
    policy: WithRequiredProp<Policy, 'carInsurance'>;
}) => {
    return (
        <StyledTable className="if table">
            <tbody className="if">
                <PropertyRow
                    name={`Car nickname`}
                    value={policy.carInsurance.carNickname}
                />
                <PropertyRow
                    name={`Address`}
                    value={policy.policyHolder.address}
                />
                <PropertyRow
                    name={`Phone number`}
                    value={policy.policyHolder.phoneNumber}
                />
                <PropertyRow name={`Bonus`} value={policy.carInsurance.bonus} />
            </tbody>
        </StyledTable>
    );
};
