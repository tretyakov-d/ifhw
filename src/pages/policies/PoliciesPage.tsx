import React from 'react';
import { Container } from '../../components/layout/Container';
import { Box } from '../../components/Box';
import { Typography } from '../../components/Typography';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import { PolicyAdCard } from './cards/PolicyAdCard';
import { useSelector } from 'react-redux';
import { PolicyCardFactory } from './cards/PolicyCardFactory';
import { selectAllPolicies } from '../../store/policies/policiesSlice';

export const PoliciesPage = () => {
    const policies = useSelector(selectAllPolicies);

    return (
        <Box className={'if color background light-beige'} pt={16} flex={1}>
            <Container>
                <Breadcrumbs>
                    <BreadcrumbItem to={'/'}>Home</BreadcrumbItem>
                    <BreadcrumbItem to={'/policies'}>Policies</BreadcrumbItem>
                </Breadcrumbs>

                <Typography variant={'headingLarge'} gutterBottom>
                    Policies
                </Typography>

                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    gap={40}
                    flexWrap={'wrap'}
                >
                    {policies.map((p) => (
                        <PolicyCardFactory key={p.number} policy={p} />
                    ))}

                    <PolicyAdCard />
                </Box>
            </Container>
        </Box>
    );
};
