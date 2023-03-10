import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

export const Content = ({ children }: PropsWithChildren) => {
    return (
        <main className={'if main'}>
            {children}
            <Outlet />
        </main>
    );
};
