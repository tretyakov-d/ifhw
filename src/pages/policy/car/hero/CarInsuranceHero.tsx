import { Box } from '../../../../components/Box';
import { Container } from '../../../../components/layout/Container';
import {
    BreadcrumbItem,
    Breadcrumbs,
} from '../../../../components/Breadcrumbs';
import { CarInsuranceHeroDetails } from './CarInsuranceHeroDetails';
import React from 'react';
import { Policy } from '../../../../types/policy';
import { WithRequiredProp } from '@reduxjs/toolkit/dist/query/tsHelpers';

export const CarInsuranceHero = ({
    policy,
}: {
    policy: WithRequiredProp<Policy, 'carInsurance'>;
}) => {
    return (
        <Box className={'if color background light-beige'} pb={48} pt={16}>
            <Container>
                <Breadcrumbs>
                    <BreadcrumbItem to={'/'}>Home</BreadcrumbItem>
                    <BreadcrumbItem to={'/policies'}>Policies</BreadcrumbItem>
                    <BreadcrumbItem to={`/policy/${policy.number}`}>
                        Car Insurance
                    </BreadcrumbItem>
                </Breadcrumbs>

                <CarInsuranceHeroDetails policy={policy} />
            </Container>
        </Box>
    );
};
