import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { CombinedError } from 'urql';
export declare type ErrorWrapperProps = {
    /** Error name */
    title: string;
    /** URQL Error */
    error?: CombinedError;
    /** The rest of the page elements */
    children: React.ReactNode;
    /** Action to be take on closing the error */
    onClose?: () => void;
    /** Container style */
    style?: StyleProp<ViewStyle>;
    /** Text style */
    textStyle?: StyleProp<TextStyle>;
    /** If false, the component will not be displayed */
    show?: boolean;
};
declare const ErrorWrapper: ({ title, error, children, onClose, style, textStyle, show, }: ErrorWrapperProps) => JSX.Element;
export default ErrorWrapper;
