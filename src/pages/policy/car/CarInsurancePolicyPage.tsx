import { CarInsuranceProperties } from './properties/CarInsuranceProperties';
import React from 'react';
import { CarInsuranceHero } from './hero/CarInsuranceHero';
import { Container } from '../../../components/layout/Container';
import { Box, FlexRow } from '../../../components/Box';
import { Typography } from '../../../components/Typography';
import { CarInsurancePropertyEdit } from './edit/CarInsurancePropertyEdit';
import { Button } from '../../../components/Button';
import { Policy } from '../../../types/policy';
import { WithRequiredProp } from '@reduxjs/toolkit/dist/query/tsHelpers';

export const CarInsurancePolicyPage = ({
    policy,
}: {
    policy: WithRequiredProp<Policy, 'carInsurance'>;
}) => {
    return (
        <>
            <CarInsuranceHero policy={policy} />

            <Container>
                <Box pt={32}>
                    <FlexRow justifyContent={'space-between'}>
                        <Typography variant={'headingSmall'}>
                            If Insurance Policy
                        </Typography>

                        <CarInsurancePropertyEdit policy={policy} />
                    </FlexRow>

                    <CarInsuranceProperties policy={policy} />

                    <FlexRow justifyContent={'flex-end'}>
                        <Button>Calculate bonus</Button>
                    </FlexRow>
                </Box>
            </Container>
        </>
    );
};
