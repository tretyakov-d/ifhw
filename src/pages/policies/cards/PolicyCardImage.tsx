import { Box } from '../../../components/Box';
import React from 'react';

export const PolicyCardImage = ({ imageUrl }: { imageUrl: string }) => {
    return (
        <Box
            bgImage={imageUrl}
            bgSize={'contain'}
            bgRepeat={'no-repeat'}
            bgPosition={'center'}
            height={180}
        />
    );
};
