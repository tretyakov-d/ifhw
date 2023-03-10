import React, { HTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

export interface SectionProps {
    children: ReactNode;
    className?: HTMLAttributes<HTMLElement>['className'];
}

export const Section = ({ children, className }: SectionProps) => {
    return (
        <div className={classnames('if section', className)}>{children}</div>
    );
};
