import { Card, CardContent } from '../../../components/Card';
import { Typography } from '../../../components/Typography';
import React from 'react';
import { Hyperlink } from '../../../components/Hyperlink';

export const PolicyAdCard = () => {
    return (
        <Card width={312} display={'flex'}>
            <CardContent
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Typography variant={'headingMedium'} gutterBottom>
                    Would you like to insure something else?
                </Typography>

                <Hyperlink to={'/buy'}>Buy new insurance</Hyperlink>
            </CardContent>
        </Card>
    );
};
