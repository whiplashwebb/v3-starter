export enum routeNames {
	client = 'client',
	login = 'login',
	notFound = 'notFound',
	unauthorized = 'unauthorized',
}

export const DEFAULT_PRIVATE_ROUTE = routeNames.client;
export const DEFAULT_PUBLIC_ROUTE = routeNames.login;
