/**
 * Hook to load more content as the users scrolls for queries with pages
 * @param hasNextPage boolean
 * @param page number (state)
 * @param setPage Dispatch State (number)
 */
const usePagination = (
	hasNextPage = false,
	page: number,
	setPage: React.Dispatch<React.SetStateAction<number>>,
) => {
	/**
	 * Refresh action
	 */
	const loadMoreContent = () => {
		if (hasNextPage) {
			return setPage(page + 1);
		}
	};

	return { loadMoreContent };
};

export default usePagination;
