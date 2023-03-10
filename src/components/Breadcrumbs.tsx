import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BreadcrumbsContainer = styled.div`
    height: 64px;
    @media screen and (max-width: 45rem) {
        display: none;
    }
`;

export const Breadcrumbs = ({ children }: PropsWithChildren) => {
    return (
        <BreadcrumbsContainer>
            <ol className="if breadcrumbs">{children}</ol>
        </BreadcrumbsContainer>
    );
};

export const BreadcrumbItem = ({
    to,
    children,
}: PropsWithChildren<{ to: string }>) => {
    return (
        <li className={'if'}>
            <Link className="if" to={to}>
                {children}
            </Link>
        </li>
    );
};
