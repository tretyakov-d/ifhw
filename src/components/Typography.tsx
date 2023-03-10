import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export type TypographyVariant =
    | 'headingTitle'
    | 'headingLarger'
    | 'headingLarge'
    | 'headingMedium'
    | 'headingSmall'
    | 'headingSmallest'
    | 'body'
    | 'meta';
export type TypographyProps = PropsWithChildren<{
    variant?: TypographyVariant;
    component?: keyof JSX.IntrinsicElements;
    gutterBottom?: boolean;
}>;

function resolveClass(variant: TypographyVariant) {
    switch (variant) {
        case 'headingTitle':
            return 'if heading hero-title';
        case 'headingLarger':
            return 'if heading larger';
        case 'headingLarge':
            return 'if heading large';
        case 'headingMedium':
            return 'if heading medium';
        case 'headingSmall':
            return 'if heading small';
        case 'headingSmallest':
            return 'if heading smallest';
        case 'body':
            return 'if text body';
        case 'meta':
            return 'if text meta';
        default:
            console.error(`invalid Typography variant: '${variant}'`);
            break;
    }

    return 'if text body';
}

function resolveComponent(
    variant: TypographyVariant,
): keyof JSX.IntrinsicElements {
    switch (variant) {
        case 'headingTitle':
            return 'h1';
        case 'headingLarger':
            return 'h1';
        case 'headingLarge':
            return 'h2';
        case 'headingMedium':
            return 'h3';
        case 'headingSmall':
            return 'h4';
        case 'headingSmallest':
            return 'h5';
    }

    return 'span';
}

const WithoutBottomMargin = styled.div<{ as: keyof JSX.IntrinsicElements }>`
    margin-bottom: 0 !important;
`;

export const Typography = ({
    variant = 'body',
    component,
    gutterBottom = false,
    children,
}: TypographyProps) => {
    const className = resolveClass(variant);
    const Component = component ?? resolveComponent(variant);

    if (!gutterBottom)
        return (
            <WithoutBottomMargin as={Component} className={className}>
                {children}
            </WithoutBottomMargin>
        );

    return <Component className={className}>{children}</Component>;
};
