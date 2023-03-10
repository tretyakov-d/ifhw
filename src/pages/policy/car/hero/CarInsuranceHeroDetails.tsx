import { Box } from '../../../../components/Box';
import { Typography } from '../../../../components/Typography';
import { CarIcon } from '../CarIcon';
import React from 'react';
import { WithRequiredProp } from '@reduxjs/toolkit/dist/query/tsHelpers';
import { Policy } from '../../../../types/policy';
import { format } from 'date-fns';
import { formatNumber } from '../../../../utils/formatNumber';
import styled from 'styled-components';

const Property = ({ name, value }: { name: string; value: string }) => {
    return (
        <div>
            <Typography variant={'headingSmallest'}>{name}</Typography>
            <Typography>{value}</Typography>
        </div>
    );
};

function formatDate(dt: Date | string) {
    if (typeof dt === 'string') dt = new Date(dt);
    return format(dt, 'dd.MM.yyyy');
}
const PropertyContainer = styled.div`
    padding-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 16px;

    @media screen and (max-width: 45rem) {
        grid-template-columns: 1fr;
    }
`;

const Image = styled.div`
    flex: 1;
    background-image: url(/images/car-insurance-large.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right bottom;

    @media screen and (max-width: 45rem) {
        display: none;
    }
`;

export const CarInsuranceHeroDetails = ({
    policy,
}: {
    policy: WithRequiredProp<Policy, 'carInsurance'>;
}) => {
    return (
        <Box width={'100%'} display={'flex'} flexDirection={'row'}>
            <Box flex={1}>
                <Box pt={16}>
                    <Typography variant={'headingLarge'}>
                        {policy.carInsurance.carNickname}
                    </Typography>
                </Box>

                <Box
                    pt={16}
                    pb={16}
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    gap={12}
                >
                    <CarIcon />
                    <p>
                        {policy.carInsurance.licensePlate}{' '}
                        {policy.carInsurance.makeModel}
                    </p>
                </Box>

                <PropertyContainer>
                    <Property
                        name={'Coverage'}
                        value={policy.carInsurance.coverage}
                    />
                    <Property
                        name={'Insurance period'}
                        value={`${formatDate(
                            policy.insurancePeriod.start,
                        )} - ${formatDate(policy.insurancePeriod.end)}`}
                    />
                    <Property
                        name={'Policy Holder'}
                        value={policy.policyHolder.name}
                    />
                    <Property
                        name={'Total cost'}
                        value={`${formatNumber(policy.premium)} €`}
                    />
                </PropertyContainer>
            </Box>
            <Image />
        </Box>
    );
};
