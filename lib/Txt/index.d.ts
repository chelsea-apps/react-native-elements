import React from 'react';
import { TextProps } from 'react-native';
export declare type ReactNode = React.ReactChild | React.ReactFragment | React.ReactPortal | boolean | null | undefined;
export interface TxtProps extends TextProps {
    /** Text | Component to be displayed */
    children: React.ReactNode;
}
declare const Txt: ({ children, style, ...props }: TxtProps) => JSX.Element;
export default Txt;
