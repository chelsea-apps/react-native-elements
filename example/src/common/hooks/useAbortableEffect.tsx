import React, { useEffect } from 'react';

declare const UNDEFINED_VOID_ONLY: unique symbol;
type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never };

interface IStatus {
	aborted: boolean;
}

/**
 * useEffect that can be aborted on unmount to prevent memory leaks
 * @param effect Effect function
 * @param deps Dependencies
 */
export const useAbortableEffect = (
	effect: (status: IStatus) => void | Destructor,
	deps?: React.DependencyList | undefined,
) => {
	const status: IStatus = { aborted: false };

	useEffect(() => {
		status.aborted = false;

		const cleanUpFn = effect(status);

		return () => {
			status.aborted = true;
			if (typeof cleanUpFn === 'function') {
				// run the cleanup function
				cleanUpFn();
			}
		};
	}, deps);
};
