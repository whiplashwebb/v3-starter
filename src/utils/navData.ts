import { searchTypes } from '@/constants';
import type { NavData, NavItem } from '@/types';

export function getNavDataUrlBySlug(navItems: NavItem[], slug: string): string {
	let url = '';

	navItems.forEach((navItem) => {
		if (navItem.slug === slug) {
			url = navItem.url;
		}
	});

	if (url) {
		return url;
	} else {
		throw new Error(`navData url with slug '${ slug }' not found!`);
	}
}

export function getSearchUrl(navData: NavData, searchType: searchTypes): string {
	if (navData.search) {
		const slug = searchType === searchTypes.all ? 'search' : `search-all-${ searchType }`;
		return getNavDataUrlBySlug(navData.search, slug);
	} else {
		throw new Error('Search navData not found!');
	}
}

export function getLogoutUrl(navData: NavData): string {
	if (navData.session) {
		return getNavDataUrlBySlug(navData.session, 'logout');
	} else {
		throw new Error('Session navData not found!');
	}
}

export function getLocaleUrl(navData: NavData): string {
	if (navData.session) {
		return getNavDataUrlBySlug(navData.session, 'locale');
	} else {
		throw new Error('Session navData not found!');
	}
}

export function getAllWarehousesUrl(navData: NavData): string {
	if (navData.warehouse) {
		return getNavDataUrlBySlug(navData.warehouse, 'warehouses');
	} else {
		throw new Error('Warehouse navData not found!');
	}
}

export function getAllCustomersUrl(navData: NavData): string {
	if (navData.warehouse) {
		return getNavDataUrlBySlug(navData.warehouse, 'warehouses');
	} else {
		throw new Error('Warehouse navData not found!');
	}
}
