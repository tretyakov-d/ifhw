import React, { ComponentProps, PropsWithChildren } from 'react';
import classnames from 'classnames';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonProps = {
    variant?: ButtonVariant;
} & ComponentProps<'button'>;

export const Button = ({
    children,
    variant = 'text',
    className,
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={classnames(`if button ${variant}`, className)}
            type={'button'}
            {...rest}
        >
            {children}
        </button>
    );
};
