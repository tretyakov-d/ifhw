import { Box, BoxProps } from './Box';
import React, { PropsWithChildren } from 'react';

export const Card = (props: BoxProps) => (
    <Box bgColor={'#faf9f7'} borderRadius={8} overflow={'hidden'} {...props} />
);

export const CardHeader = ({ children }: PropsWithChildren) => {
    return <div className={'if color background dark-beige'}>{children}</div>;
};

export const CardContent = (props: BoxProps) => {
    return <Box p={24} {...props} />;
};
