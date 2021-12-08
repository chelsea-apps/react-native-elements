import React from 'react';
export declare type LoadingWrapperProps = {
    /** Loading state */
    loading: boolean;
    /** Page elements */
    children: React.ReactNode;
    /** Loading indicator component (usually a GIF) */
    indicator: React.ReactNode;
};
declare const LoadingWrapper: ({ loading, indicator, children, }: LoadingWrapperProps) => JSX.Element;
export default LoadingWrapper;
