import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

export const Hyperlink = ({
    children,
    to,
}: PropsWithChildren<{ to: string }>) => {
    return (
        <Link to={to} className={'if standalone'}>
            {children}
        </Link>
    );
};
