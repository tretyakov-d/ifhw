import styled, { CSSProperties } from 'styled-components';
import React, { PropsWithChildren } from 'react';

export type BoxProps = PropsWithChildren<{
    width?: CSSProperties['width'];
    maxWidth?: CSSProperties['maxWidth'];
    height?: CSSProperties['height'];

    bgColor?: string;
    bgImage?: string;
    bgSize?: CSSProperties['backgroundSize'];
    bgPosition?: CSSProperties['backgroundPosition'];
    bgRepeat?: CSSProperties['backgroundRepeat'];

    borderRadius?: number;
    display?: CSSProperties['display'];
    flex?: CSSProperties['flex'];
    flexDirection?: CSSProperties['flexDirection'];
    flexWrap?: CSSProperties['flexWrap'];
    alignItems?: CSSProperties['alignItems'];
    justifyContent?: CSSProperties['justifyContent'];
    gap?: CSSProperties['gap'];

    gridTemplateColumns?: CSSProperties['gridTemplateColumns'];
    rowGap?: CSSProperties['rowGap'];

    overflow?: CSSProperties['overflow'];

    p?: CSSProperties['padding'];
    pt?: CSSProperties['paddingTop'];
    pb?: CSSProperties['paddingBottom'];
}>;

const forwardedProps = new Set(['children', 'className']);

export const Box = styled.div.withConfig({
    shouldForwardProp: (p) => forwardedProps.has(p),
})<BoxProps>((props) => ({
    height: props.height,
    width: props.width,
    maxWidth: props.maxWidth,

    backgroundColor: props.bgColor,
    backgroundImage: props.bgImage ? `url('${props.bgImage}')` : undefined,
    backgroundPosition: props.bgPosition,
    backgroundRepeat: props.bgRepeat,
    backgroundSize: props.bgSize,

    borderRadius: props.borderRadius,

    display: props.display,

    flex: props.flex,
    flexDirection: props.flexDirection,
    flexWrap: props.flexWrap,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    gap: props.gap,
    rowGap: props.rowGap,

    gridTemplateColumns: props.gridTemplateColumns,

    overflow: props.overflow,

    padding: props.p,
    paddingTop: props.pt,
    paddingBottom: props.pb,
}));

export const FlexRow = (props: Omit<BoxProps, 'display' | 'flexDirection'>) => (
    <Box display={'flex'} flexDirection={'row'} {...props} />
);
