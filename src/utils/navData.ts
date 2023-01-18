import { searchTypes } from '@/constants';
import type { NavData } from '@/types';

export function getSearchUrl(navData: NavData, searchType: searchTypes): string {
	const needle = searchType === searchTypes.all ? 'search' : `search-all-${ searchType }`;

	if (navData.search) {
		let url = '';

		navData.search.forEach((navItem) => {
			if (navItem.slug === needle) {
				url = navItem.url;
			}
		});

		if (url) {
			return url;
		} else {
			throw new Error(`Search url with slug '${needle}' not found!`);
		}
	} else {
		throw new Error('Search data not found!');
	}
}
