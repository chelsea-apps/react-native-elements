import React, { useState } from 'react';
import { OperationContext } from 'urql';
import { wait } from '../helpers/index';

const useRefresh = (
	refetch: (opts?: Partial<OperationContext> | undefined) => void,
	setList?: React.Dispatch<React.SetStateAction<any>>,
	setList2?: React.Dispatch<React.SetStateAction<any>>,
) => {
	const [refreshing, setRefreshing] = useState<boolean>(false);
	const [timeToRefresh] = useState<number>(700);

	/**
	 * Refresh action
	 */
	const onRefresh = async () => {
		setRefreshing(true);
		if (!refetch) return setRefreshing(false);
		wait(timeToRefresh).then(async () => {
			await refetch();
			if (setList) await setList([]);
			if (setList2) await setList2([]);
			setRefreshing(false);
		});
	};

	return { onRefresh, refreshing };
};

export default useRefresh;
