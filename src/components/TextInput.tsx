import React, {
    ComponentProps,
    ForwardedRef,
    forwardRef,
    ReactNode,
} from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const StyledInput = styled.input`
    width: 100% !important; // couldn't find full width option in design system, and don't need other option within homework
`;

export type TextInputProps = { label: ReactNode } & Omit<
    ComponentProps<'input'>,
    'type' | 'ref'
>;

// eslint-disable-next-line react/display-name
export const TextInput = forwardRef(
    (props: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
        const { label, className, ...rest } = props;

        return (
            <div className="if input-wrapper">
                <StyledInput
                    ref={ref}
                    type="text"
                    className={classnames('if input-field', className)}
                    {...rest}
                />
                <div className="if input-label-wrapper">
                    <label className="if">{label}</label>
                </div>
            </div>
        );
    },
);
