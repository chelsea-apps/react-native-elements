import React from 'react';
export declare type OptionalWrapperProps<T> = {
    /** Data to check against */
    data: T | null;
    /** Elements that sit inside this wrapper */
    children: React.ReactNode;
    /** Component to show if data is null | undefined */
    elseComponent?: React.ReactNode;
};
declare const OptionalWrapper: <T extends unknown>({ data, children, elseComponent, }: OptionalWrapperProps<T>) => JSX.Element;
export default OptionalWrapper;
