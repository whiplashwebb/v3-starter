export const AUTH_COOKIE_NAME = 'jwt_token';
export enum searchTypes {
	orders = 'orders',
	items = 'items',
	shipNotices = 'ship_notices',
	returns = 'returns',
	customers = 'customers',
	all = 'all',
}
export const labeledSearchTypes = new Map([
	[searchTypes.orders, 'Orders'],
	[searchTypes.items, 'Items'],
	[searchTypes.shipNotices, 'Ship Notices'],
	[searchTypes.returns, 'Returns'],
	[searchTypes.customers, 'Customers'],
	[searchTypes.all, 'All'],
]);

export enum layouts {
	full= 'full',
	minimal = 'minimal',
}
