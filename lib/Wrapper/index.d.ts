import React from 'react';
import { ScrollViewProps } from 'react-native';
export interface WrapperProps extends ScrollViewProps {
    /** Pages elements */
    children: React.ReactNode;
    /** Container type. 'scrollview' - Allows the content to be scrollable. 'list' - When the page contains only a flatlist. 'fixed' - content is not scrollable.  */
    type?: 'scrollView' | 'list' | 'fullScreenView';
    /** Quick way to make the content not scrollable */
    fixed?: boolean;
    /** Space to be shown at the bottom when the keyboard is up. Default - 0 */
    keyboardVerticalOffset?: number;
}
declare const Wrapper: ({ children, style, contentContainerStyle, type, fixed, keyboardVerticalOffset, ...props }: WrapperProps) => JSX.Element;
export default Wrapper;
