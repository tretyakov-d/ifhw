import React from 'react';
import { Typography } from '../../../components/Typography';
import { Hyperlink } from '../../../components/Hyperlink';
import { Card, CardContent, CardHeader } from '../../../components/Card';
import { PolicyCardImage } from './PolicyCardImage';

export type PolicyCardProps = {
    number: string;
    title: string;
    imageUrl: string;
    propertyName: string;
    propertyValue: string;
};

export const PolicyCardPresenter = ({
    number,
    title,
    imageUrl,
    propertyName,
    propertyValue,
}: PolicyCardProps) => {
    return (
        <Card width={312}>
            <CardHeader>
                <PolicyCardImage imageUrl={imageUrl} />
            </CardHeader>
            <CardContent>
                <Typography variant={'headingSmall'} gutterBottom>
                    {title}
                </Typography>

                <Typography variant={'headingSmallest'}>
                    {propertyName}
                </Typography>

                <Typography component={'p'} gutterBottom>
                    {propertyValue}
                </Typography>

                <Hyperlink to={`/policy/${number}`}>
                    View insurance details
                </Hyperlink>
            </CardContent>
        </Card>
    );
};
